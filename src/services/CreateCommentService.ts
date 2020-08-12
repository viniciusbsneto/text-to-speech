import { getCustomRepository } from 'typeorm';

import Comment from '@models/Comment';
import CommentsRepository from '@repositories/CommentsRepository';

interface Request {
  text: string;
  date: Date;
}

class CreateCommentService {
  public async execute({ text, date }: Request): Promise<Comment> {
    const commentsRepository = getCustomRepository(CommentsRepository);

    const comment = commentsRepository.create({
      text,
      date,
    });

    await commentsRepository.save(comment);

    return comment;
  }
}

export default CreateCommentService;
