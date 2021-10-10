import { Injectable } from '@angular/core';
import { User } from './classes/user';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnrollUserService {
  url = 'http://localhost:3000/enroll';
  constructor(private http:HttpClient) {}

  enroll(user:User){
    return this.http.post<any>(this.url,user).pipe(catchError(this.errorHadle));
  }

  errorHadle(error:HttpErrorResponse){
    return throwError(error);
  }
}
