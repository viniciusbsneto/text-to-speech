import { getRepository } from 'typeorm';

import Comment from '@models/Comment';

interface Request {
  text: string;
  speech: string;
}

class CreateCommentService {
  public async execute({ text, speech }: Request): Promise<Comment> {
    const commentsRepository = getRepository(Comment);

    const comment = commentsRepository.create({
      text,
      speech,
    });

    await commentsRepository.save(comment);

    return comment;
  }
}

export default CreateCommentService;
