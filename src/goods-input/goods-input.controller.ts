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
  GoodsInputItemService,
  GoodsInputService,
} from './goods-input.service';
import {
  CreateGoodsInputDto,
  CreateGoodsInputItemDto,
} from './dto/create-goods-input.dto';
import {
  UpdateGoodsInputDto,
  UpdateGoodsInputItemDto,
} from './dto/update-goods-input.dto';

@Controller('goods/input')
export class GoodsInputController {
  constructor(private readonly goodsInputService: GoodsInputService) {}

  @Post()
  create(@Body() createGoodsInputDto: CreateGoodsInputDto) {
    return this.goodsInputService.create(createGoodsInputDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.goodsInputService.remove(id);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() updateGoodsInputDto: UpdateGoodsInputDto,
  ) {
    return this.goodsInputService.update(id, updateGoodsInputDto);
  }

  @Get()
  findByPage(
    @Query('pageSize') pageSize?: number,
    @Query('current') current?: number,
    @Query('status') status?: string,
    @Query('created_at') created_at?: string,
    @Query('from_name') from_name?: string,
  ) {
    return this.goodsInputService.pageQuery({
      pageSize,
      current,
      created_at,
      from_name,
      status,
    });
  }
}

@Controller('goods/input/item')
export class GoodsInputItemController {
  constructor(private readonly goodsInputItemService: GoodsInputItemService) {}

  @Post()
  create(
    @Body() createGoodsInputItemDto: { table: CreateGoodsInputItemDto[] },
  ) {
    return this.goodsInputItemService.create(createGoodsInputItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.goodsInputItemService.remove(id);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() updateGoodsInputItemDto: UpdateGoodsInputItemDto,
  ) {
    return this.goodsInputItemService.update(id, updateGoodsInputItemDto);
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
