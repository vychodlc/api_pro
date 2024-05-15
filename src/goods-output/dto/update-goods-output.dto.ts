import { PartialType } from '@nestjs/mapped-types';
import {
  CreateGoodsOutputDto,
  CreateGoodsOutputItemDto,
} from './create-goods-output.dto';

export class UpdateGoodsOutputDto extends PartialType(CreateGoodsOutputDto) {}
export class UpdateGoodsOutputItemDto extends PartialType(
  CreateGoodsOutputItemDto,
) {}
