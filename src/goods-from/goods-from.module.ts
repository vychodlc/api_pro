import { Module } from '@nestjs/common';
import { GoodsFromService } from './goods-from.service';
import { GoodsFromController } from './goods-from.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GoodsFrom } from './entities/goods-from.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GoodsFrom])],
  controllers: [GoodsFromController],
  providers: [GoodsFromService],
})
export class GoodsFromModule {}
