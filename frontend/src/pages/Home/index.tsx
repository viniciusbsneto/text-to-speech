import React from 'react';

import { Container, Comment, CommentList } from './styles';

const Home: React.FC = () => (
  <Container>
    <Comment>
      <form>
        <h1>Comentário</h1>

        <textarea placeholder="Digite um comentário..." />

        <button type="submit">Cadastrar</button>
      </form>
    </Comment>

    <CommentList>
      <h1>Comentários</h1>
      <ul>
        <li>
          <div>
            <p>
              Este é um exemplo de comentário a ser transformado em aúdio pelo
              IBM Watson Text To Speech.
            </p>
            <span>16:39</span>
          </div>
          <button type="button">Ouvir</button>
        </li>

        <li>
          <div>
            <p>
              Este é um exemplo de comentário a ser transformado em aúdio pelo
              IBM Watson Text To Speech.
            </p>
            <span>16:39</span>
          </div>
          <button type="button">Ouvir</button>
        </li>

        <li>
          <div>
            <p>
              Este é um exemplo de comentário a ser transformado em aúdio pelo
              IBM Watson Text To Speech.
            </p>
            <span>16:39</span>
          </div>
          <button type="button">Ouvir</button>
        </li>

        <li>
          <div>
            <p>
              Este é um exemplo de comentário a ser transformado em aúdio pelo
              IBM Watson Text To Speech.
            </p>
            <span>16:39</span>
          </div>
          <button type="button">Ouvir</button>
        </li>

        <li>
          <div>
            <p>
              Este é um exemplo de comentário a ser transformado em aúdio pelo
              IBM Watson Text To Speech.
            </p>
            <span>16:39</span>
          </div>
          <button type="button">Ouvir</button>
        </li>

        <li>
          <div>
            <p>
              Este é um exemplo de comentário a ser transformado em aúdio pelo
              IBM Watson Text To Speech.
            </p>
            <span>16:39</span>
          </div>
          <button type="button">Ouvir</button>
        </li>
      </ul>
    </CommentList>
  </Container>
);

export default Home;
