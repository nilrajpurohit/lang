import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee-service.service';
@Component({
  selector: 'app-a15-http-error-handler',
  templateUrl: './a15-http-error-handler.component.html',
  styleUrls: ['./a15-http-error-handler.component.scss']
})
export class A15HttpErrorHandlerComponent implements OnInit {
  errorMessage:string = '';
  constructor(private empService:EmployeeService) { }

  ngOnInit(): void {
    this.empService.getEmployeeData().subscribe(
      data=>console.log(data),
      error=>this.errorMessage = error
    );
  }

}
