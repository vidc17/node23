import { PartialType } from '@nestjs/mapped-types';
import { CreateBlogDto } from './create-blog.dto';
import {IsNotEmpty} from "class-validator";

export class UpdateBlogDto extends PartialType(CreateBlogDto) {
    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    content: string;

    @IsNotEmpty()
    category_id: number;
}
