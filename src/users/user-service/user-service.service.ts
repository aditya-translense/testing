import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/CreateUser.dto';
import { CreateProfileDto } from '../dto/CreateUserProfile.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../typeorm/entities/User';
import { Profile } from '../typeorm/entities/Profile';
import { Post } from '../typeorm/entities/Post';
import { CreateUserPostDto } from '../dto/CreateUserPost.dto';

@Injectable()
export class UserServiceService {

    constructor(
        @InjectRepository(User) private userRepository:Repository<User>,
        @InjectRepository(Profile) private profileRepository:Repository<Profile>,
        @InjectRepository(Post) private postRepository:Repository<Post>
    ){
    
    }

   getUsers(){

   }

   createUser(createUserDto:CreateUserDto){
      const newUser=this.userRepository.create({...createUserDto})
      return this.userRepository.save(newUser)
   }

   async createUserProfile(createUserProfile:CreateProfileDto,id:number){
      const user=await this.userRepository.findOneBy({id});
      if(!user){
        throw new HttpException('User not found,cannot create profile',HttpStatus.BAD_REQUEST)
      }
      const newProfile=this.profileRepository.create(createUserProfile)
      const savedProfile=await this.profileRepository.save(newProfile)
      user.profile=savedProfile
      return this.userRepository.save(user);
   }

   async createUserPost(id:number,createUserPostdto:CreateUserPostDto){
    const user=await this.userRepository.findOneBy({id});
    if(!user){
      throw new HttpException('User not found,cannot create profile',HttpStatus.BAD_REQUEST)
    }
    const newPost=this.postRepository.create({...createUserPostdto,user})
     return this.postRepository.save(newPost)
   }
}
