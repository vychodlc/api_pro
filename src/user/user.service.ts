import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  create(createUserDto: CreateUserDto) {
    // this.userRepository.save(createUserDto);
    console.log(createUserDto);
    return 'This action adds a new user';
  }

  async findAll() {
    const findResult = await this.userRepository.find();
    return {
      status: 200,
      data: findResult,
    };
  }

  async login(createUserDto: CreateUserDto) {
    const { username, password } = createUserDto;
    const findResult = await this.userRepository.find({
      where: {
        username,
        password,
      },
    });
    if (findResult.length > 0) {
      return {
        status: 'ok',
        type: 'account',
        currentAuthority: findResult[0].role,
      };
    } else {
      return {
        status: 401,
        data: '用户名或密码错误',
      };
    }
  }

  async logout() {
    return {
      success: true,
      data: {},
    };
  }

  async currentUser(headers: Record<string, string>) {
    const { authorization } = headers;
    console.log(authorization);

    return {
      success: true,
      data: {
        name: 'Serati Ma',
        avatar:
          'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
        userid: '00000001',
        email: 'antdesign@alipay.com',
        signature: '海纳百川，有容乃大',
        title: '交互专家',
        group: '蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED',
        tags: [
          {
            key: '0',
            label: '很有想法的',
          },
          {
            key: '1',
            label: '专注设计',
          },
          {
            key: '2',
            label: '辣~',
          },
          {
            key: '3',
            label: '大长腿',
          },
          {
            key: '4',
            label: '川妹子',
          },
          {
            key: '5',
            label: '海纳百川',
          },
        ],
        notifyCount: 12,
        unreadCount: 11,
        country: 'China',
        access: 'admin',
        geographic: {
          province: {
            label: '浙江省',
            key: '330000',
          },
          city: {
            label: '杭州市',
            key: '330100',
          },
        },
        address: '西湖区工专路 77 号',
        phone: '0752-268888888',
      },
    };
  }
}
