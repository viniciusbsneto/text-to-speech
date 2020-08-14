import 'reflect-metadata';

import express from 'express';
import cors from 'cors';
import path from 'path';
import routes from './routes';

import './database';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, 'tmp')));
app.use(routes);

app.listen(3333, () => {
  console.log('💻 Server is running on port 3333...');
});
