import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/employee-service.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  public employee:any = [];
  constructor(private _employeeService:EmployeeService) {
  }

  ngOnInit(): void {
    this.employee = this._employeeService.getEmployee();
  }

}
