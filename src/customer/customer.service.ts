import { HttpException, Injectable,HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { employees } from 'src/database/entity/employee.entity';
import { complaints } from 'src/database/entity/complaint.entity';

import {validate} from "class-validator";


@Injectable()
export class CustomerService {
    constructor(
        @InjectRepository(complaints)
        private complaintsRepository: Repository<complaints>,
        @InjectRepository(employees)
        private employessRepository: Repository<employees>,
    ) {}


    async findAll(customerEmail:string): Promise<complaints[]> {
        return await this.complaintsRepository.find({
            where:{customer_email:customerEmail}
        });
    }

    async create(data: complaints) {
        const user = this.complaintsRepository.create(data);
        const errors = await validate(user);
        if (errors.length > 0) {
            //console.log(errors[0].constraints)
            //throw new Error(`Validation failed!${errors[0].constraints}`); 
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: `This is a custom message ${errors}`,
              }, HttpStatus.FORBIDDEN);
        } else {
            const result = await this.complaintsRepository.save(user);
            //console.log(result);
            return result.id;
        }
    }

    async changeStatus(customerEmail:string,complaintID:string, data: Partial<complaints> ){
        const id = Number(complaintID);
        await this.complaintsRepository.update({ id }, data);
        return await this.complaintsRepository.findOne({ id });
    }
}
