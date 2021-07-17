import { Entity, Column, PrimaryGeneratedColumn, Unique,PrimaryColumn,OneToOne, OneToMany, ManyToMany, JoinColumn } from 'typeorm';
import {Contains, IsInt, Length, IsEmail, IsFQDN, IsDate, Min, Max, IsNotEmpty} from "class-validator"
import { complaints } from './complaint.entity';
import { type } from 'os';

@Entity('employees')
export class employees {
    @PrimaryGeneratedColumn()
     id: number;

    // @PrimaryColumn()
    // employee_id: string; 

    @Column()
    employee_id:string
    @ManyToMany(type => complaints, complaint => complaint.employee_id)
    @JoinColumn({name:"employee_id"})
    employee:complaints[]

    @PrimaryColumn()
    @Column({ unique:true})
    @IsEmail({}, { message: 'Incorrect email' })
    @IsNotEmpty({message:"email cannot be empty"})
    employee_email: string;

    @Column({ length: 40 })
    @IsNotEmpty()
    employee_name: string;

    @Column({ length: 50 })
    @IsNotEmpty()
    expertise: string;

    //@OneToMany(type => complaints, complaints => complaints.employee_id) complaints: complaints;

}