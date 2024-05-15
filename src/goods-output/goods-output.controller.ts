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
import {
  GoodsOutputItemService,
  GoodsOutputService,
} from './goods-output.service';
import {
  CreateGoodsOutputDto,
  CreateGoodsOutputItemDto,
} from './dto/create-goods-output.dto';
import {
  UpdateGoodsOutputDto,
  UpdateGoodsOutputItemDto,
} from './dto/update-goods-output.dto';

@Controller('goods/output')
export class GoodsOutputController {
  constructor(private readonly goodsInputService: GoodsOutputService) {}

  @Post()
  create(@Body() createGoodsOutputDto: CreateGoodsOutputDto) {
    return this.goodsInputService.create(createGoodsOutputDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.goodsInputService.remove(id);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() updateGoodsOutputDto: UpdateGoodsOutputDto,
  ) {
    console.log('updateGoodsOutputDto', updateGoodsOutputDto);

    return this.goodsInputService.update(id, updateGoodsOutputDto);
  }

  @Get()
  findByPage(
    @Query('pageSize') pageSize?: number,
    @Query('current') current?: number,
    @Query('created_at') created_at?: string,
    @Query('to_name') to_name?: string,
  ) {
    return this.goodsInputService.pageQuery({
      pageSize,
      current,
      created_at,
      to_name,
    });
  }
}

@Controller('goods/output/item')
export class GoodsOutputItemController {
  constructor(private readonly goodsInputItemService: GoodsOutputItemService) {}

  @Post()
  create(
    @Body() createGoodsOutputItemDto: { table: CreateGoodsOutputItemDto[] },
  ) {
    return this.goodsInputItemService.create(createGoodsOutputItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.goodsInputItemService.remove(id);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() updateGoodsOutputItemDto: UpdateGoodsOutputItemDto,
  ) {
    return this.goodsInputItemService.update(id, updateGoodsOutputItemDto);
  }

  @Get()
  findByPage(
    @Query('pageSize') pageSize?: number,
    @Query('current') current?: number,
    @Query('order_id') order_id?: string,
  ) {
    return this.goodsInputItemService.pageQuery({
      pageSize,
      current,
      order_id,
    });
  }
}
