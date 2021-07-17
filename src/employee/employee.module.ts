import { Module } from '@nestjs/common';
import { EmployeeController } from './employee.controller';
import { EmployeeService } from './employee.service';

import { TypeOrmModule } from "@nestjs/typeorm";
import { employees } from 'src/database/entity/employee.entity';
import { complaints } from 'src/database/entity/complaint.entity';
import { customers } from 'src/database/entity/customer.entity';

@Module({
  imports:[TypeOrmModule.forFeature([employees, complaints,customers])],
  controllers: [EmployeeController],
  providers: [EmployeeService]
})
export class EmployeeModule {}
