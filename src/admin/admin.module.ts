import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';

import { TypeOrmModule } from "@nestjs/typeorm";
import { employees } from 'src/database/entity/employee.entity';
import { complaints } from 'src/database/entity/complaint.entity';
import { customers } from 'src/database/entity/customer.entity';

@Module({
  imports:[TypeOrmModule.forFeature([complaints, employees, customers])],
  controllers: [AdminController],
  providers: [AdminService]
})
export class AdminModule {}
