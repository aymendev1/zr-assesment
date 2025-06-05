import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from '../../users/user.entity/user.entity';

@Entity()
export class Book {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  author: string;

  @Column({ nullable: true })
  description?: string;

  @Column()
  year: number;

  @Column({ nullable: true })
  coverImageUrl?: string;

  @ManyToOne(() => User, (user) => user.id)
  user: User;
}
