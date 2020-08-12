import { Router } from 'express';
import commentsRouter from './comments.routes';

const routes = Router();

routes.use('/comments', commentsRouter);

export default routes;
