import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/employee-service.service';
@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {
  public employee:any = [];
  constructor(private _employeeService:EmployeeService) {
  }

  ngOnInit(): void {
    this.employee = this._employeeService.getEmployee();
  }

}
