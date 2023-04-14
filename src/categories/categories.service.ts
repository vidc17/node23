import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import {Category} from "../entities/category.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";

@Injectable()
export class CategoriesService {

  constructor(@InjectRepository(Category)private readonly categoryRepository:Repository<Category>) {
  }
  async create(createCategoryDto: CreateCategoryDto):Promise<Category> {
    const newCategory: Category = this.categoryRepository.create(createCategoryDto)
    return this.categoryRepository.save(newCategory);
  }

  findAll() {
    return `This action returns all categories`;
  }

  findOne(id: number) {
    return `This action returns a #${id} category`;
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return `This action updates a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
