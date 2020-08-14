import { Router } from 'express';
import { getRepository } from 'typeorm';

import CreateCommentService from '@services/CreateCommentService';
import TextToSpeechService from '@services/TextToSpeechService';
import Comment from '@models/Comment';

const commentsRouter = Router();

commentsRouter.get('/', async (request, response) => {
  const commentsRepository = getRepository(Comment);
  const comments = await commentsRepository.find();

  return response.json(comments);
});

commentsRouter.post('/', async (request, response) => {
  try {
    const { text } = request.body;

    const createComment = new CreateCommentService();

    const textToSpeech = new TextToSpeechService();

    const speech = await textToSpeech.execute({
      text,
    });

    const comment = await createComment.execute({
      text,
      speech,
    });

    return response.json(comment);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default commentsRouter;
