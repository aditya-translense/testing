import { Test, TestingModule } from '@nestjs/testing';
import { UserControllerController } from './user-controller.controller';
import {UserServiceService} from '../user-service/user-service.service'
import exp from 'constants';
describe('UserControllerController', () => {
  let controller: UserControllerController;
  const mockUserService={
    createUser:jest.fn((dto)=>{
      return {
        id:Date.now(),
        ...dto
      }
    }),
    createUserProfile:jest.fn((dto,id)=>{
      return {
         ...dto
      }
    })
  }
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserControllerController],
      providers:[UserServiceService]
    }).overrideProvider(UserServiceService).useValue(mockUserService).compile();

    controller = module.get<UserControllerController>(UserControllerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a user',()=>{
     expect(controller.createUser({username:"aditya",password:"1344"})).toEqual({
      id:expect.any(Number),
      username:"aditya",
      password:"1344"
     })
  })

  it('should create a new user profile',()=>{
    expect(controller.createUserProfile({firstName:"aditya",lastName:"solanki",age:23,dob:"24-08-2003"},3)).toEqual({
      firstName:"aditya",
      lastName:"solanki",
      age:23,
      dob:"24-08-2003"
    })
  }     
)
  })

