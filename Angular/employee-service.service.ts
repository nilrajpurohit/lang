import {Injectable} from '@angular/core';
import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

interface IEmployee{
  id:number,
  name:string,
  dep:string,
  sal:number
}
@Injectable()
export class EmployeeService{
  constructor(private http:HttpClient){}
  employee:object[] = [
    {id:1,name:"Nil Rajpurohit",dep:"Web Development",sal:15000},
    {id:2,name:"Nikul Bhavsar",dep:"Web Design",sal:25000},
    {id:3,name:"Hemant Chastave",dep:"Mobile App Development",sal:25000},
    {id:4,name:"Aayush Chabbra",dep:"Brand Ambsitter",sal:50000},
    {id:5,name:"Yogita Kyatam",dep:"Full Stack",sal:40000},
  ]
  private url:string="/assets/data/employee.json";
  private worngUrl:string="/assets/data/employee1.json";
  getEmployee(){
    return this.employee;
  }

  getEmployeeData():Observable<IEmployee[]>{
    // by using pipe method we attach catchError() method fromm rxjs lib it take a method as a parameter (i pass errorHandler())
    return this.http.get<IEmployee[]>(this.worngUrl).pipe(catchError(this.errorHandler))
  }

  getHttpEmployee():Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this.url);
  }
  
  errorHandler(error:HttpErrorResponse){
    // throwError() is use to through error or errorMessage
    return throwError(error.message || "Error Occur");
  }
}