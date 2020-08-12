import { Router } from 'express';
import { parseISO } from 'date-fns';

import CommentsRepository from '@repositories/CommentsRepository';
import CreateCommentService from '@services/CreateCommentService';

const commentsRouter = Router();
const commentsRepository = new CommentsRepository();

commentsRouter.get('/', (request, response) => {
  const comments = commentsRepository.all();

  return response.json(comments);
});

commentsRouter.post('/', (request, response) => {
  const { text, date } = request.body;

  const parsedDate = parseISO(date);

  const createComment = new CreateCommentService(commentsRepository);

  const comment = createComment.execute({ text, date: parsedDate });

  return response.json(comment);
});

export default commentsRouter;
