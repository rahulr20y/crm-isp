import { Controller,Get, Post, Param, HttpStatus, Body} from '@nestjs/common';
import console from 'console';
import { complaints } from 'src/database/entity/complaint.entity';
import { customers } from 'src/database/entity/customer.entity';

import { CustomerService } from './customer.service';

@Controller('customer')
export class CustomerController {
    constructor(private readonly customerService:CustomerService){}


    @Get(':id')
    async getComplaints(@Param('id') customerEmail: string){
        const complaints =  await this.customerService.findAll(customerEmail);
        return {
          statusCode: HttpStatus.OK,
          message: 'complaints fetched successfully',
          complaints
        };
    }

    @Post('complaint')
    async postComplaint(@Body() data:complaints){
        const complaintID = await this.customerService.create(data);
        return {
          statusCode: HttpStatus.OK,
          message: 'Complaint posted successfully',
          complaintID
        };

    }

    @Post(':customerId/status/:complaintID')
    async postStatus(@Param('customerId') customerEmail: string,@Param('complaintID') complaintID:string,@Body() data: Partial<complaints>){
        const complaint = await this.customerService.changeStatus(customerEmail,complaintID,data);
        return {
            statusCode: HttpStatus.OK,
            message: 'complaint status posted successfully',
            complaint
            // customerEmail,
            // complaintID
        }
    }
}
