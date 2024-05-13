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
import { AccountService } from './account.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';

@Controller('account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Post()
  create(@Body() createAccountDto: CreateAccountDto) {
    return this.accountService.create(createAccountDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.accountService.remove(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateAccountDto: UpdateAccountDto) {
    return this.accountService.update(id, updateAccountDto);
  }

  @Get()
  findByPage(
    @Query('pageSize') pageSize?: number,
    @Query('current') current?: number,
    @Query('type') type?: string,
    @Query('order_id') order_id?: string,
    @Query('method') method?: string,
    @Query('created_at') created_at?: string,
    @Query('amount') amount?: string,
    @Query('another_id') another_id?: string,
  ) {
    return this.accountService.pageQuery({
      pageSize,
      current,
      type,
      order_id,
      method,
      created_at,
      amount,
      another_id,
    });
  }
}
