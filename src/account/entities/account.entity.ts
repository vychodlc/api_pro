import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Account {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @Column()
  order_id: number;

  @Column()
  method: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  // 金额
  @Column({ type: 'decimal', precision: 10, scale: 2 })
  amount: number;

  @Column()
  another_id: number;
}
