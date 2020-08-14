import React, { useState, useEffect, useCallback, FormEvent } from 'react';

import { Container, Comment, CommentList } from './styles';

import api from '../../services/api';

interface Comment {
  id: string;
  text: string;
  date: Date;
}

const Home: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newCommentText, setNewCommentText] = useState('');
  const [loading, setLoading] = useState(true);

  const handleAddComment = useCallback(
    async (event: FormEvent<HTMLFormElement>): Promise<void> => {
      event.preventDefault();

      const newComment = {
        text: newCommentText,
      };

      await api.post('/comments', newComment);

      setNewCommentText('');
    },
    [newCommentText],
  );

  useEffect(() => {
    setLoading(true);
    api.get('/comments').then(response => {
      setComments(response.data);
      setLoading(false);
    });
  }, [handleAddComment]);

  return (
    <Container>
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
              <button type="button">Ouvir</button>
            </li>
          ))
        ) : (
          <span>Nenhum comentário cadastrado.</span>
        )}
      </CommentList>
    </Container>
  );
};

export default Home;
