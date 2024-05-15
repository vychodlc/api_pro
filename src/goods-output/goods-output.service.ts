import { Injectable } from '@nestjs/common';
import {
  CreateGoodsOutputDto,
  CreateGoodsOutputItemDto,
} from './dto/create-goods-output.dto';
import {
  UpdateGoodsOutputDto,
  UpdateGoodsOutputItemDto,
} from './dto/update-goods-output.dto';
import { Like, Repository } from 'typeorm';
import { GoodsOutput, GoodsOutputItem } from './entities/goods-output.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class GoodsOutputService {
  constructor(
    @InjectRepository(GoodsOutput)
    private readonly goodsOutputRepository: Repository<GoodsOutput>,
  ) {}

  async create(createGoodsOutputDto: CreateGoodsOutputDto) {
    const newOne = this.goodsOutputRepository.create(createGoodsOutputDto);
    await this.goodsOutputRepository.save(newOne);
    return {
      success: true,
      data: newOne,
    };
  }

  async pageQuery(params: {
    pageSize: number;
    current: number;
    created_at: string;
    to_name: string;
  }) {
    const { pageSize, current, created_at, to_name } = params;
    const queryFilter: any = {};
    if (to_name) queryFilter.to_name = Like(`%${to_name}%`);
    if (created_at) queryFilter.created_at = created_at;
    const [data, total] = await this.goodsOutputRepository.findAndCount({
      where: queryFilter,
      order: { created_at: 'DESC' },
      skip: current ? (current - 1) * pageSize : 0,
      take: pageSize ? pageSize : null,
    });
    return {
      success: true,
      data,
      total,
    };
  }

  async update(id: number, updateGoodsOutputDto: UpdateGoodsOutputDto) {
    await this.goodsOutputRepository.update(id, updateGoodsOutputDto);
    return {
      success: true,
    };
  }

  async remove(id: number) {
    await this.goodsOutputRepository.delete(id);
    return {
      success: true,
    };
  }
}

@Injectable()
export class GoodsOutputItemService {
  constructor(
    @InjectRepository(GoodsOutputItem)
    private readonly goodsOutputItemRepository: Repository<GoodsOutputItem>,
  ) {}
  async create(createGoodsOutputItemDto: {
    table: CreateGoodsOutputItemDto[];
  }) {
    const newOnes = [];
    const promises = createGoodsOutputItemDto.table.map((item) => {
      return new Promise((resolve) => {
        item.id = null;
        this.goodsOutputItemRepository.save(item).then((newOne) => {
          newOnes.push(newOne);
          resolve(newOne);
        });
      });
    });
    await Promise.all(promises);
    return {
      success: true,
      data: newOnes,
    };
  }

  async pageQuery(params: {
    pageSize: number;
    current: number;
    order_id: string;
  }) {
    const { pageSize, current, order_id } = params;
    const queryFilter: any = {};
    if (order_id) queryFilter.order_id = order_id;
    const [data, total] = await this.goodsOutputItemRepository.findAndCount({
      where: queryFilter,
      order: { created_at: 'DESC' },
      skip: current ? (current - 1) * pageSize : 0,
      take: pageSize ? pageSize : null,
    });
    return {
      success: true,
      data,
      total,
    };
  }

  async update(id: number, updateGoodsOutputItemDto: UpdateGoodsOutputItemDto) {
    await this.goodsOutputItemRepository.update(id, updateGoodsOutputItemDto);
    return {
      success: true,
    };
  }

  async remove(id: number) {
    await this.goodsOutputItemRepository.delete(id);
    return {
      success: true,
    };
  }
}
