/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import { createUserDto } from './dtos/create-user-dto';
import { UsersService } from './users.service';

@Controller('auth')
export class UsersController {
  constructor(private userService: UsersService){}
  @Post('/signup')
   createUser(@Body() body: createUserDto){
    
     this.userService.create(body.email, body.password)
   }
}
