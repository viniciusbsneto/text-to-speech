import { Router } from 'express';
import { parseISO } from 'date-fns';
import { getCustomRepository } from 'typeorm';

import CommentsRepository from '@repositories/CommentsRepository';
import CreateCommentService from '@services/CreateCommentService';

const commentsRouter = Router();

commentsRouter.get('/', async (request, response) => {
  const commentsRepository = getCustomRepository(CommentsRepository);
  const comments = await commentsRepository.find();

  return response.json(comments);
});

commentsRouter.post('/', async (request, response) => {
  const { text, date } = request.body;

  const parsedDate = parseISO(date);

  const createComment = new CreateCommentService();

  const comment = await createComment.execute({
    text,
    date: parsedDate,
  });

  return response.json(comment);
});

export default commentsRouter;
