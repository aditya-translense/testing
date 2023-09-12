import { Module} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/typeorm/entities/User';
import {Profile} from './users/typeorm/entities/Profile'
import {Post} from './users/typeorm/entities/Post'
@Module({
  imports: [TypeOrmModule.forRoot({
    type:'mysql',
    host:'localhost',
    port:3306,
   username:'root',
  password:'aditya@2408',
  database:'nestjs_mysql_tutorial',
  entities:[User,Profile,Post],
  synchronize:true  }),UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
