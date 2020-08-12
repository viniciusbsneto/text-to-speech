import Comment from '@models/Comment';

interface CreateCommentDTO {
  text: string;
  date: Date;
}

class CommentsRepository {
  private comments: Comment[];

  constructor() {
    this.comments = [];
  }

  public all(): Comment[] {
    return this.comments;
  }

  public create({ text, date }: CreateCommentDTO): Comment {
    const comment = new Comment({ text, date });

    this.comments.push(comment);

    return comment;
  }
}

export default CommentsRepository;
