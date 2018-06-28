import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {throwError as observableThrowError, Observable, Subject, ReplaySubject } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';
import {environment} from './../../../../environments/environment';
import { tap, catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserinfoService {

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<any> {    
    return this.http
      .get(environment.flowFreeApiUrl + 'getAllUsers',httpOptions);
  }

 updateUser(requestBody): Observable<any> {    
    return this.http
      .post(environment.flowFreeApiUrl + 'updateUser', requestBody,httpOptions);
  }
  
  getAllRoles(): Observable<any> {    
    return this.http
      .get(environment.flowFreeApiUrl + 'getAllUserRoles',httpOptions);
  }

  getAllEnvironment(): Observable<any> {    
    return this.http
      .get(environment.flowFreeApiUrl + 'getAllEnvironment',httpOptions);
  }

  updateUserRoles(requestBody): Observable<any> {      			
  			console.log(JSON.stringify(requestBody));   
    return this.http
      .post(environment.flowFreeApiUrl + 'updateUserRoles', requestBody,httpOptions);
  }

  assignUserEnv(requestBody): Observable<any> {    
    return this.http
      .post(environment.flowFreeApiUrl + 'assignUserEnv', requestBody,httpOptions);
  }


   private _handleError(err: HttpErrorResponse | any) {
    const errorMsg = err.message || 'Error: Unable to complete request.';
    return Observable.throw(errorMsg);
  }



}
