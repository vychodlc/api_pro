export class CreateGoodsOutputDto {
  created_at: Date;
  to_id: number;
  to_name: string;
  to_phone: string;
  to_address: string;
  detail: string;
  count: number;
  handler_id: number;
  handler_name: string;
  driver: string;
  pay_log: string;
  cost: number;
  status: boolean;
}

export class CreateGoodsOutputItemDto {
  id: number;
  order_id: number;
  length: number;
  diameter: number;
  unit: number;
  price: number;
  total: number;
  amount: number;
  created_at: Date;
}
