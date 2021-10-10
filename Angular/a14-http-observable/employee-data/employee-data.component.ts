import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/employee-service.service';
@Component({
  selector: 'app-employee-data',
  templateUrl: './employee-data.component.html',
  styleUrls: ['./employee-data.component.scss']
})
export class EmployeeDataComponent implements OnInit {

  constructor(private employeeService:EmployeeService) { }
  employee:any=[];
  ngOnInit(): void {
    this.employeeService.getHttpEmployee().subscribe(data=> this.employee = data);
  }

}
