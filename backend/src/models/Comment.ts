import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('comments')
class Comment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  text: string;

  @Column('timestamp')
  date: Date;
}

export default Comment;
