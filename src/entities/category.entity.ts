import {Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import {UpdateUserDto} from "../user/dto/update-user.dto";
import {Blog} from "../blog/entities/blog.entity";

@Entity('categories')
export class Category {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    title: string;

    @Column()
    description: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @OneToMany(() => Blog, (blog: Blog) => blog.category)
    blogs: Blog[];
}
