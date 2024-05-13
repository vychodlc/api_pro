import { Module } from '@nestjs/common';
import {
  GoodsInputItemService,
  GoodsInputService,
} from './goods-input.service';
import {
  GoodsInputController,
  GoodsInputItemController,
} from './goods-input.controller';
import {
  GoodsInput,
  GoodsInputItem,
} from 'src/goods-input/entities/goods-input.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([GoodsInput, GoodsInputItem])],
  controllers: [GoodsInputController, GoodsInputItemController],
  providers: [GoodsInputService, GoodsInputItemService],
})
export class GoodsInputModule {}
