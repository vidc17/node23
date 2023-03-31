import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn} from "typeorm";


@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @Column()
    password: string;

    @CreateDateColumn()
    created_at: Date;
}