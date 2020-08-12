import { uuid } from 'uuidv4';

class Comment {
  id: string;

  text: string;

  date: Date;

  constructor({ text, date }: Omit<Comment, 'id'>) {
    this.id = uuid();
    this.text = text;
    this.date = date;
  }
}

export default Comment;
