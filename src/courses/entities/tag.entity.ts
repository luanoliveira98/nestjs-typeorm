// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Course } from './course.entity';

@Entity('tags')
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export class Tag {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => Course, (course) => course.tags)
  courses: Course[];
}
