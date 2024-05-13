import { Injectable } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Account } from './entities/account.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AccountService {
  constructor(
    @InjectRepository(Account)
    private readonly accountRepository: Repository<Account>,
  ) {}

  async create(createAccountDto: CreateAccountDto) {
    const newOne = this.accountRepository.create(createAccountDto);
    await this.accountRepository.save(newOne);
    return {
      success: true,
      data: newOne,
    };
  }

  async pageQuery(params: {
    pageSize: number;
    current: number;
    type: string;
    order_id: string;
    method: string;
    created_at: string;
    amount: string;
    another_id: string;
  }) {
    const {
      pageSize,
      current,
      type,
      order_id,
      method,
      created_at,
      amount,
      another_id,
    } = params;
    const queryFilter: any = {};
    if (type) queryFilter.type = type;
    if (order_id) queryFilter.order_id = order_id;
    if (method) queryFilter.method = method;
    if (created_at) queryFilter.created_at = created_at;
    if (amount) queryFilter.amount = amount;
    if (another_id) queryFilter.another_id = another_id;
    const [data, total] = await this.accountRepository.findAndCount({
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

  async update(id: number, updateAccountDto: UpdateAccountDto) {
    await this.accountRepository.update(id, updateAccountDto);
    return {
      success: true,
    };
  }

  async remove(id: number) {
    await this.accountRepository.delete(id);
    return {
      success: true,
    };
  }
}
