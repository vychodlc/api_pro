import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Query,
  Put,
} from '@nestjs/common';
import { GoodsFromService } from './goods-from.service';
import { CreateGoodsFromDto } from './dto/create-goods-from.dto';
import { UpdateGoodsFromDto } from './dto/update-goods-from.dto';

@Controller('goods/from')
export class GoodsFromController {
  constructor(private readonly goodsFromService: GoodsFromService) {}

  @Post()
  create(@Body() createGoodsFromDto: CreateGoodsFromDto) {
    return this.goodsFromService.create(createGoodsFromDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.goodsFromService.remove(id);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() updateGoodsFromDto: UpdateGoodsFromDto,
  ) {
    return this.goodsFromService.update(id, updateGoodsFromDto);
  }

  @Get()
  findByPage(
    @Query('pageSize') pageSize?: number,
    @Query('current') current?: number,
    @Query('name') name?: string,
    @Query('address') address?: string,
    @Query('phone') phone?: string,
  ) {
    return this.goodsFromService.pageQuery({
      pageSize,
      current,
      name,
      address,
      phone,
    });
  }
}
