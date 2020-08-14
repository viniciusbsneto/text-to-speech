import { getRepository } from 'typeorm';

import Comment from '@models/Comment';

interface Request {
  text: string;
}

class CreateCommentService {
  public async execute({ text }: Request): Promise<Comment> {
    const commentsRepository = getRepository(Comment);

    const comment = commentsRepository.create({
      text,
    });

    await commentsRepository.save(comment);

    return comment;
  }
}

export default CreateCommentService;
