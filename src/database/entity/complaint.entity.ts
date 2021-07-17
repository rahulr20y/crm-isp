import { Entity, Column, PrimaryGeneratedColumn, Unique, OneToOne, ManyToMany, JoinColumn } from 'typeorm';
import {Contains, IsInt, Length, IsEmail, IsFQDN, IsDate, Min, Max, IsNotEmpty} from "class-validator";
import { employees } from './employee.entity';


@Entity('complaints')
export class complaints {


    @PrimaryGeneratedColumn()
     id: number;

    @Column({ length: 40 })
    @IsNotEmpty()
    customer_name: string;

    @Column()
    @IsEmail({}, { message: 'Incorrect email' })
    @IsNotEmpty({message:"email cannot be empty"})
    customer_email: string;

    @Column({ length: 50 })
    @IsNotEmpty()
    category: string;

    @Column({ length: 500 })
    complaint_desc: string;

    @Column({ length: 50, default:'No' })
    customer_status: string;

    @Column({ length: 50, default:'No' })
    employee_status: string;

    // @Column({ length: 500, default:null })
    // @ManyToMany(type => employees, employee =>employee.employee_id)
    // employee_id: string;
    
    @Column()
    employee_id:string
    @JoinColumn({name:"employee_id"})
    @ManyToMany(type => employees, employee =>employee.employee)
    employee: employees[];


    //@OneToOne(type => employees, employees => employees.employee_id) employees: employees;

}