import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    name: 'username',
    length: 20,
    comment: '名字',
  })
  username: string;

  @Column()
  password: string;

  @Column({ default: 'guest' })
  role:
    | 'super_admin'
    | 'admin'
    | 'employee_day'
    | 'employee_piece'
    | 'driver'
    | 'guest';
}
