import { Controller, Get, Post, Body, Headers } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Post('/login/account')
  login(@Body() createUserDto: CreateUserDto) {
    return this.userService.login(createUserDto);
  }

  @Post('/login/outLogin')
  logout() {
    return this.userService.logout();
  }

  @Get('/currentUser')
  currentUser(@Headers() headers: Record<string, string>) {
    return this.userService.currentUser(headers);
  }
}
