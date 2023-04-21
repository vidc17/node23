import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoryDto } from './create-category.dto';
import {IsNotEmpty, IsOptional} from "class-validator";

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {
    @IsOptional()
    title?:string;

    @IsOptional()
    description?:string;
}
