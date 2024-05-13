import { PartialType } from '@nestjs/mapped-types';
import { CreateGoodsFromDto } from './create-goods-from.dto';

export class UpdateGoodsFromDto extends PartialType(CreateGoodsFromDto) {}
