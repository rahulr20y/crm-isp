import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';
//entity
import { employees } from './database/entity/employee.entity';
import { complaints } from './database/entity/complaint.entity';
import { customers } from './database/entity/customer.entity';
//module
import { AdminModule } from './admin/admin.module';
import { AdminController } from './admin/admin.controller';
import { AdminService } from './admin/admin.service';
import { CustomerModule } from './customer/customer.module';
import { CustomerController } from './customer/customer.controller';
import { CustomerService } from './customer/customer.service';
import { EmployeeModule } from './employee/employee.module';
import { EmployeeController } from './employee/employee.controller';
import { EmployeeService } from './employee/employee.service';
import { Note } from './database/entity/Note.entity';
import { SharedNote } from './database/entity/SharedNote.entity';
import { User } from './database/entity/User.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'crm_isp',
      entities: [complaints, employees, customers,Note,SharedNote,User],
      synchronize: true, //->this is in sync with database-- false in case of production to prevent data losses
    }),
    AdminModule,
    CustomerModule,
    EmployeeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
