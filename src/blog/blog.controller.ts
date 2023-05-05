import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
  BadRequestException
} from '@nestjs/common';
import { BlogService } from './blog.service';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import {JwtAuthGuard} from "../auth/guards/jwtAuth.guard";
import {Blog} from "./entities/blog.entity";

@Controller('blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @UseGuards (JwtAuthGuard)
  @Post()
  create(@Request() req,@Body() createBlogDto: CreateBlogDto) {
    return this.blogService.create(req.user.id, createBlogDto);
  }

  @Get()
  findAll() {
    return this.blogService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.blogService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async update(@Request()req, @Param('id') id: string, @Body() updateBlogDto: UpdateBlogDto) {
    const currentUser = req.user.id;
    const blog: Blog = await this.findOne(id);
    if(currentUser != blog.user.id){
      throw new BadRequestException("It is not your blog");
    }
    return this.blogService.update(+id, updateBlogDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.blogService.remove(+id);
  }
}
