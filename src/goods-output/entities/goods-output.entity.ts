import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class GoodsOutput {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column()
  to_id: number;

  @Column({ length: 255 })
  to_name: string;

  @Column({ length: 255 })
  to_phone: string;

  @Column({ length: 255 })
  to_address: string;

  @Column({ type: 'varchar', length: 10000, default: '' })
  detail: string;

  @Column()
  count: number;

  @Column()
  handler_id: number;

  @Column()
  handler_name: string;

  @Column()
  driver: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  cost: number;

  @Column({ type: 'varchar', length: 10000, default: '' })
  pay_log: string;

  @Column()
  status: boolean;
}

@Entity()
export class GoodsOutputItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  order_id: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  length: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  diameter: number;

  @Column()
  unit: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;

  @Column()
  amount: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  total: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;
}
