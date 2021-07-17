import { Controller, Get, Param,HttpStatus, Post, Body } from '@nestjs/common';
import { complaints } from 'src/database/entity/complaint.entity';

import { EmployeeService } from './employee.service';

@Controller('employee')
export class EmployeeController {
    constructor(private readonly employeeService:EmployeeService){}


    @Get(':employeeId')
    async getComplaints(@Param('employeeId') employeeId:string){
        const complaints =  await this.employeeService.findAllComplaints(employeeId);
        return {
          statusCode: HttpStatus.OK,
          message: 'complaints assingned to you fetched successfully',
          complaints
        };
    }

    @Post(':employeeID/status/:complaintID')
    async postStatus(@Param('employeeID') employeeID:string,@Param('complaintID') complaintID:string,@Body() data:Partial<complaints> ){
        const complaint = await this.employeeService.changeStatus(employeeID,complaintID,data);
        return {
            statusCode: HttpStatus.OK,
            message: 'complaint status posted successfully',
            complaint,
            //employeeId,
            //complaintId
        }
    }

}
