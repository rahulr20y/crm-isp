import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { employees } from 'src/database/entity/employee.entity';
import { complaints } from 'src/database/entity/complaint.entity';

import {validate} from "class-validator";

@Injectable()
export class EmployeeService {
    constructor(
        @InjectRepository(complaints)
        private complaintsRepository: Repository<complaints>,
        @InjectRepository(employees)
        private employessRepository: Repository<employees>,
    ) {}


    findAllComplaints(employeeId): Promise<complaints[]> {
        return this.complaintsRepository.find({where:{employee_id:employeeId}});
    }

    async changeStatus(employeeID:string,complaintID:string, data: Partial<complaints> ){
        const id = Number(complaintID);
        await this.complaintsRepository.update({ id }, data);
        return await this.complaintsRepository.findOne({ id });
    }
}
