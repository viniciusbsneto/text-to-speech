import { Router } from 'express';
import { getRepository } from 'typeorm';

import CreateCommentService from '@services/CreateCommentService';
import Comment from '@models/Comment';

const commentsRouter = Router();

commentsRouter.get('/', async (request, response) => {
  const commentsRepository = getRepository(Comment);
  const comments = await commentsRepository.find();

  return response.json(comments);
});

commentsRouter.post('/', async (request, response) => {
  const { text } = request.body;

  const createComment = new CreateCommentService();

  const comment = await createComment.execute({
    text,
  });

  return response.json(comment);
});

export default commentsRouter;
