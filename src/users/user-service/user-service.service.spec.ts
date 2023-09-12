import { Test, TestingModule } from '@nestjs/testing';
import { UserServiceService } from './user-service.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from '../typeorm/entities/User';
import { Profile } from '../typeorm/entities/Profile';
import { Post } from '../typeorm/entities/Post';

describe('UserServiceService', () => {
  let service: UserServiceService;
  let mockUserRepository={
    create:jest.fn().mockImplementation((dto)=>dto),
    save:jest.fn().mockImplementation((user)=>Promise.resolve({id:Date.now(),...user}))
  };
  let mockProfileRepository={};
  let mockPostRepository={};
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserServiceService,
      {
        provide:getRepositoryToken(User),
        useValue:mockUserRepository
      },
      {
        provide:getRepositoryToken(Profile),
        useValue:mockProfileRepository
      },
      {
        provide:getRepositoryToken(Post),
        useValue:mockPostRepository
      }
    ],
    }).compile();

    service = module.get<UserServiceService>(UserServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a user',async()=>{
    expect(await service.createUser({username:"aditya","password":"1234"})).toEqual({
      id:expect.any(Number),
      username:"aditya",
      password:"1234"
    })
  })
});
