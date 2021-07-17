import { Module } from '@nestjs/common';
import { CustomerController } from './customer.controller';
import { CustomerService } from './customer.service';

import { TypeOrmModule } from "@nestjs/typeorm";
import { employees } from 'src/database/entity/employee.entity';
import { complaints } from 'src/database/entity/complaint.entity';
import { customers } from 'src/database/entity/customer.entity';


@Module({
  imports:[TypeOrmModule.forFeature([employees, complaints, customers])],
  controllers: [CustomerController],
  providers: [CustomerService]
})
export class CustomerModule {}
