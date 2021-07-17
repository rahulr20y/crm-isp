import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { employees } from 'src/database/entity/employee.entity';
import { complaints } from 'src/database/entity/complaint.entity';
import { customers } from 'src/database/entity/customer.entity';

import {validate} from "class-validator";

@Injectable()
export class AdminService {
    constructor(
        @InjectRepository(complaints)
        private complaintsRepository: Repository<complaints>,
        @InjectRepository(employees)
        private employessRepository: Repository<employees>,
        @InjectRepository(customers)
        private customersRepository: Repository<customers>,

    ) {}


    findAllComplaints(): Promise<complaints[]> {
        return this.complaintsRepository.find();
    }

    findAllEmployees(): Promise<employees[]> {
        return this.employessRepository.find();
    }

    findAllCustomers(): Promise<customers[]>{
        return this.customersRepository.find()
    }

    findAllCategory(data:string):Promise<complaints[]>{
        return this.complaintsRepository.find({where:{category:data}});
    }

    async assignEmploee(complaintID:string, data: Partial<complaints> ){
        const id = Number(complaintID);
        await this.complaintsRepository.update({ id }, data);
        return await this.complaintsRepository.findOne({ id });
    }
}
