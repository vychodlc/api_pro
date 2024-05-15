import { Module } from '@nestjs/common';
import {
  GoodsOutputItemService,
  GoodsOutputService,
} from './goods-output.service';
import {
  GoodsOutputController,
  GoodsOutputItemController,
} from './goods-output.controller';
import {
  GoodsOutput,
  GoodsOutputItem,
} from 'src/goods-output/entities/goods-output.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([GoodsOutput, GoodsOutputItem])],
  controllers: [GoodsOutputController, GoodsOutputItemController],
  providers: [GoodsOutputService, GoodsOutputItemService],
})
export class GoodsOutputModule {}
