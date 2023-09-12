import { Module} from '@nestjs/common';
import { UserControllerController } from './user-controller/user-controller.controller';
import { UserServiceService } from './user-service/user-service.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './typeorm/entities/User';
import { Profile } from './typeorm/entities/Profile';
import { Post } from './typeorm/entities/Post';
@Module({
  imports:[TypeOrmModule.forFeature([User,Profile,Post])],
  controllers: [UserControllerController],
  providers: [UserServiceService]
})
export class UsersModule {}
