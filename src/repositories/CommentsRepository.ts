import { EntityRepository, Repository } from 'typeorm';

import Comment from '@models/Comment';

@EntityRepository(Comment)
class CommentsRepository extends Repository<Comment> {}

export default CommentsRepository;
