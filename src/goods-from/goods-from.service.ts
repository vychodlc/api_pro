import { Injectable } from '@nestjs/common';
import { CreateGoodsFromDto } from './dto/create-goods-from.dto';
import { UpdateGoodsFromDto } from './dto/update-goods-from.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { GoodsFrom } from './entities/goods-from.entity';
import { Like, Repository } from 'typeorm';

@Injectable()
export class GoodsFromService {
  constructor(
    @InjectRepository(GoodsFrom)
    private readonly goodsFromRepository: Repository<GoodsFrom>,
  ) {}

  async create(createGoodsFromDto: CreateGoodsFromDto) {
    const newOne = this.goodsFromRepository.create(createGoodsFromDto);
    await this.goodsFromRepository.save(newOne);
    return {
      success: true,
      data: newOne,
    };
  }

  async pageQuery(params: {
    pageSize: number;
    current: number;
    name: string;
    address: string;
    phone: string;
  }) {
    const { pageSize, current, name, address, phone } = params;
    const queryFilter: any = {};
    if (name) queryFilter.name = Like(`%${name}%`);
    if (address) queryFilter.address = Like(`%${address}%`);
    if (phone) queryFilter.phone = Like(`%${phone}%`);
    const [data, total] = await this.goodsFromRepository.findAndCount({
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

  async update(id: number, updateGoodsFromDto: UpdateGoodsFromDto) {
    await this.goodsFromRepository.update(id, updateGoodsFromDto);
    return {
      success: true,
    };
  }

  async remove(id: number) {
    await this.goodsFromRepository.delete(id);
    return {
      success: true,
    };
  }
}
