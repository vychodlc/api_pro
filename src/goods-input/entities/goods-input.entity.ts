import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class GoodsInput {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  from_id: number;

  @Column({ length: 255 })
  from_name: string;

  @Column({ length: 255 })
  from_phone: string;

  @Column({ length: 255 })
  from_address: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  cost: number;

  @Column({ type: 'varchar', length: 20000, default: '' })
  pay_log: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  pay: number;

  @Column()
  status: boolean;
}

@Entity()
export class GoodsInputItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  order_id: number;

  @Column()
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

  @Column()
  state: boolean;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({ length: 255, default: '' })
  log: string;
}
