import { PartialType } from '@nestjs/mapped-types';
import {
  CreateGoodsInputDto,
  CreateGoodsInputItemDto,
} from './create-goods-input.dto';

export class UpdateGoodsInputDto extends PartialType(CreateGoodsInputDto) {}

export class UpdateGoodsInputItemDto extends PartialType(
  CreateGoodsInputItemDto,
) {}
