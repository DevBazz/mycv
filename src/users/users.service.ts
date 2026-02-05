/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private repo: Repository<User>){}
    
    create(email: string, password: string){
      const user = this.repo.create({email, password})
      return this.repo.save(user)
    }

    findOne(id: number){
        return this.repo.findOneBy({id})
    }

    find(email: string){
        return this.repo.find({
            where: {email}
        })
    }

    async update(id: number, arrts: Partial<User>){
        const user = await this.findOne(id)
        if(!user){
            throw new Error("User not Found")
        }

        Object.assign(user, arrts)
        return this.repo.save(user)
    }
}
