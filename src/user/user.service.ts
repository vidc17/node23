import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "../entities/user.entity";
import {Repository} from "typeorm";
import { CreateUserDto } from "./dto/create-user.dto";
import {DeleteResult} from "typeorm/browser";
import {UpdateUserDto} from "./dto/update-user.dto";
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService{
    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>
    ){

    }
    async findAll(): Promise<User[]>{
        return this.userRepository.find();
    }

    async create(createUserDto: CreateUserDto): Promise <User> {
        const hashed = await bcrypt.hash(createUserDto.password, 10);
        const data = {createUserDto, password:hashed};
        const newUser = this.userRepository.create(data);
        return this.userRepository.save(newUser);
    }
    async delete(id:number): Promise<DeleteResult>{
        return this.userRepository.delete(id);
    }

    async findById(id:number): Promise<User>{
        return this.userRepository.findOneBy({id});
    }

    async findByEmail(email:string): Promise<User>{
        return this.userRepository.findOneBy({email});
    }

    async update(id:number, updateUserDto: UpdateUserDto): Promise<User>{
        await this.userRepository.update(id, updateUserDto);
        return this.findById(id);
    }
}