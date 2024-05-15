import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GoodsFromModule } from './goods-from/goods-from.module';
import { GoodsInputModule } from './goods-input/goods-input.module';
import { AccountModule } from './account/account.module';
import { GoodsOutputModule } from './goods-output/goods-output.module';

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'storage',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    GoodsFromModule,
    GoodsInputModule,
    AccountModule,
    GoodsOutputModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
