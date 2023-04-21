import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import {Category} from "../entities/category.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {DeleteResult} from "typeorm/browser";

@Injectable()
export class CategoriesService {

  constructor(@InjectRepository(Category)private readonly categoryRepository:Repository<Category>) {
  }
  async create(createCategoryDto: CreateCategoryDto):Promise<Category> {
    const newCategory: Category = this.categoryRepository.create(createCategoryDto)
    return this.categoryRepository.save(newCategory);
  }

  findAll():Promise<Category[]> {
    return this.categoryRepository.find();
  }

  findOne(id: number):Promise<Category> {
    return this.categoryRepository.findOneBy({id});
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto): Promise<Category> {
    await this.categoryRepository.update(id, updateCategoryDto);
    return this.findOne(id);
  }

  remove(id: number): Promise<DeleteResult> {
    return this.categoryRepository.delete(id);
  }
}
