import { Router } from 'express';
import { getRepository } from 'typeorm';
import multer from 'multer';

import CreateCommentService from '@services/CreateCommentService';
import UpdateCommentSpeechService from '@services/UpdateCommentSpeechService';
import Comment from '@models/Comment';
import uploadConfig from '../config/upload';

const commentsRouter = Router();

const upload = multer(uploadConfig);

commentsRouter.get('/', async (request, response) => {
  const commentsRepository = getRepository(Comment);
  const comments = await commentsRepository.find();

  return response.json(comments);
});

commentsRouter.post('/', async (request, response) => {
  try {
    const { text } = request.body;

    const createComment = new CreateCommentService();

    const comment = await createComment.execute({
      text,
    });

    return response.json(comment);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

commentsRouter.patch('/speech', upload.single('speech'), async (request, response) => {
  try {
    const { comment_id } = request.body;

    const updateCommentSpeechService = new UpdateCommentSpeechService();

    const comment = await updateCommentSpeechService.execute({
      comment_id,
      speechFilename: request.file.filename,
    });

    return response.json(comment);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }

  response.json({ message: 'Speech file has been uploaded.' });
});

export default commentsRouter;
