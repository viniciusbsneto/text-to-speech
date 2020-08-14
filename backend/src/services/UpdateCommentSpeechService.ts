import { getRepository } from 'typeorm';
import Comment from '@models/Comment';
import path from 'path';
import fs from 'fs';
import uploadConfig from '../config/upload';

interface Request {
  comment_id: string;
  speechFilename: string;
}

class UpdateCommentSpeechService {
  public async execute({ comment_id, speechFilename }: Request): Promise<Comment> {
    const commentsRepository = getRepository(Comment);

    const comment = await commentsRepository.findOne(comment_id);

    if (!comment) {
      throw new Error('Invalid comment id');
    }

    if (comment.speech) {
      const commentSpeechFilePath = path.join(uploadConfig.directory, comment.speech);
      const commentSpeechFileExists = await fs.promises.stat(commentSpeechFilePath);

      if (commentSpeechFileExists) {
        await fs.promises.unlink(commentSpeechFilePath);
      }
    }

    comment.speech = speechFilename;

    await commentsRepository.save(comment);

    return comment;
  }
}

export default UpdateCommentSpeechService;
