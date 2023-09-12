import { Controller, Get,Post,Body, Param, ParseIntPipe } from '@nestjs/common';
import { UserServiceService } from '../user-service/user-service.service';
import { CreateUserDto } from '../dto/CreateUser.dto';
import {CreateProfileDto} from '../dto/CreateUserProfile.dto'
import { CreateUserPostDto } from '../dto/CreateUserPost.dto';
@Controller('user-controller')
export class UserControllerController {
    constructor(private readonly userService:UserServiceService){}

    @Get()
    getusers(){
        this.userService.getUsers()
    }

    @Post()
    createUser(@Body() createUserDto:CreateUserDto){{
       return this.userService.createUser(createUserDto);
    }}

    @Post(':id/profiles')
    createUserProfile(@Body() createuserprofile:CreateProfileDto,@Param('id',ParseIntPipe) id:number){
        return this.userService.createUserProfile(createuserprofile,id)
    }

    @Post(':id/posts')
    createUserPost(@Param('id',ParseIntPipe) id:number ,@Body() createUserPostdto:CreateUserPostDto){
         return this.userService.createUserPost(id,createUserPostdto)
    }
}
