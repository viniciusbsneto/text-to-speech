import Comment from '@models/Comment';
import CommentsRepository from '@repositories/CommentsRepository';

interface Request {
  text: string;
  date: Date;
}

class CreateCommentService {
  private commentsRepository: CommentsRepository;

  constructor(commentsRepository: CommentsRepository) {
    this.commentsRepository = commentsRepository;
  }

  public execute({ text, date }: Request): Comment {
    const comment = this.commentsRepository.create({
      text,
      date,
    });

    return comment;
  }
}

export default CreateCommentService;
