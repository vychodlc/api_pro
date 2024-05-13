export class CreateGoodsInputDto {
  from_id: number;
  from_name: string;
  from_phone: string;
  from_address: string;
  created_at: Date;
  cost: number;
  pay_log: string;
  pay: number;
  status: boolean;
  log: string;
}
export class CreateGoodsInputItemDto {
  id: number;
  order_id: number;
  length: number;
  diameter: number;
  unit: number;
  price: number;
  total: number;
  amount: number;
  state: boolean;
  created_at: Date;
}
