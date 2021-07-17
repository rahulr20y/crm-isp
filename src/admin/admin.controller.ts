import { Controller, Param, Post, Get,HttpStatus,Body } from '@nestjs/common';
import { complaints } from 'src/database/entity/complaint.entity';


import { AdminService } from './admin.service';

@Controller('admin')
export class AdminController {
    constructor(private readonly adminservice:AdminService){}


    @Get('complaints')
    async getAllComplaints(){
        //return this.adminservice.findAllComplaints();
        const complaints =  await this.adminservice.findAllComplaints();
        return {
          statusCode: HttpStatus.OK,
          message: 'complaints fetched successfully',
          complaints
        };
    }

    @Get('employees')
    async getAllemployees(){
        //return this.adminservice.findAllEmployees();
        const employees =  await this.adminservice.findAllEmployees();
        return {
          statusCode: HttpStatus.OK,
          message: 'Employees fetched successfully',
          employees
        };
    }
    
    @Get('customers')
    async getAllcustomer(){
        //return this.adminservice.findAllCustomers();
        const customers =  await this.adminservice.findAllCustomers();
        return {
          statusCode: HttpStatus.OK,
          message: 'Customers fetched successfully',
          customers
        };
    }

    @Get('complaints/:category')
    async getCategory(@Param('category') category:string){
        const complaints = await this.adminservice.findAllCategory(category);
        return {
            statusCode: HttpStatus.OK,
            message: `${category} complaint fetch successfully`,
            complaints
        }
    }

    @Post(':complaintID')
    async postStatus(@Param('complaintID') complaintID:string,@Body() data: Partial<complaints>){
        const complaint = await this.adminservice.assignEmploee(complaintID,data);
        return {
            statusCode: HttpStatus.OK,
            message: 'employee Assigned successfully',
            complaint
            // customerEmail,
            // complaintID
        }
    }

    

}

