/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable no-nested-ternary */
import React, { useState, useEffect, useCallback, FormEvent } from 'react';

import { Container, Content, Comment, CommentList } from './styles';

import api from '../../services/api';

interface Comment {
  id: string;
  text: string;
  speech: string;
  date: Date;
}

const Home: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newCommentText, setNewCommentText] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    api.get('/comments').then(response => {
      setComments(response.data);
      setLoading(false);
    });
  }, []);

  const handleAddComment = useCallback(
    async (event: FormEvent<HTMLFormElement>): Promise<void> => {
      event.preventDefault();

      const newComment = {
        text: newCommentText,
      };

      const response = await api.post('/comments', newComment);

      setComments([...comments, response.data]);

      setNewCommentText('');
    },
    [comments, newCommentText],
  );

  return (
    <Container>
      <Content>
        <Comment>
          <form onSubmit={handleAddComment}>
            <h1>Comentário</h1>

            <textarea
              value={newCommentText}
              onChange={e => setNewCommentText(e.target.value)}
              placeholder="Digite um comentário..."
            />

            <button type="submit">Cadastrar</button>
          </form>
        </Comment>

        <CommentList>
          <h1>Comentários</h1>
          {loading ? (
            <span>Carregando comentários...</span>
          ) : comments.length ? (
            comments.map(comment => (
              <li key={comment.id}>
                <div>
                  <p>{comment.text}</p>
                  <span>{comment.date}</span>
                </div>
                <audio
                  controls
                  src={`http://localhost:3333/files/${comment.speech}`}
                />
              </li>
            ))
          ) : (
            <span>Nenhum comentário cadastrado.</span>
          )}
        </CommentList>
      </Content>
    </Container>
  );
};

export default Home;
