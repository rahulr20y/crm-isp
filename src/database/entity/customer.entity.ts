import { Entity, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';
import {Contains, IsInt, Length, IsEmail, IsFQDN, IsDate, Min, Max, IsNotEmpty} from "class-validator"

@Entity('customers')
export class customers {
    @PrimaryGeneratedColumn()
     id: number;

    @Column({ unique:true})
    @IsEmail({}, { message: 'Incorrect email' })
    @IsNotEmpty({message:"email cannot be empty"})
    customer_email: string;

    @Column({ length: 40 })
    @IsNotEmpty()
    customer_name: string;

    @Column({ length: 500 })
    constomer_add: string;

}