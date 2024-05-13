import { Injectable } from '@nestjs/common';
import {
  CreateGoodsInputDto,
  CreateGoodsInputItemDto,
} from './dto/create-goods-input.dto';
import {
  UpdateGoodsInputDto,
  UpdateGoodsInputItemDto,
} from './dto/update-goods-input.dto';
import { Like, Repository } from 'typeorm';
import { GoodsInput, GoodsInputItem } from './entities/goods-input.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class GoodsInputService {
  constructor(
    @InjectRepository(GoodsInput)
    private readonly goodsInputRepository: Repository<GoodsInput>,
  ) {}

  async create(createGoodsInputDto: CreateGoodsInputDto) {
    const newOne = this.goodsInputRepository.create(createGoodsInputDto);
    await this.goodsInputRepository.save(newOne);
    return {
      success: true,
      data: newOne,
    };
  }

  async pageQuery(params: {
    pageSize: number;
    current: number;
    created_at: string;
    from_name: string;
    status: string;
  }) {
    const { pageSize, current, created_at, from_name, status } = params;
    const queryFilter: any = {};
    if (from_name) queryFilter.from_name = Like(`%${from_name}%`);
    if (created_at) queryFilter.created_at = created_at;
    if (status) queryFilter.status = status;
    const [data, total] = await this.goodsInputRepository.findAndCount({
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

  async update(id: number, updateGoodsInputDto: UpdateGoodsInputDto) {
    await this.goodsInputRepository.update(id, updateGoodsInputDto);
    return {
      success: true,
    };
  }

  async remove(id: number) {
    await this.goodsInputRepository.delete(id);
    return {
      success: true,
    };
  }
}

@Injectable()
export class GoodsInputItemService {
  constructor(
    @InjectRepository(GoodsInputItem)
    private readonly goodsInputItemRepository: Repository<GoodsInputItem>,
  ) {}

  async create(createGoodsInputItemDto: { table: CreateGoodsInputItemDto[] }) {
    const newOnes = [];
    const promises = createGoodsInputItemDto.table.map((item) => {
      return new Promise((resolve) => {
        item.id = null;
        this.goodsInputItemRepository.save(item).then((newOne) => {
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
    const [data, total] = await this.goodsInputItemRepository.findAndCount({
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

  async update(id: number, updateGoodsInputItemDto: UpdateGoodsInputItemDto) {
    await this.goodsInputItemRepository.update(id, updateGoodsInputItemDto);
    return {
      success: true,
    };
  }

  async remove(id: number) {
    await this.goodsInputItemRepository.delete(id);
    return {
      success: true,
    };
  }
}
