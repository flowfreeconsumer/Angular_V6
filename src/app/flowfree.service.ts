import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {throwError as observableThrowError, Observable, Subject, ReplaySubject } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';
import {environment} from '../environments/environment';
import { tap, catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class FlowfreeService {

  constructor(private http: HttpClient) { }

 login(requestBody): Observable<any> {    
    return this.http
      .post(environment.flowFreeApiUrl + 'login', requestBody,httpOptions);
  }
  errorHandler(error: HttpErrorResponse){
    return observableThrowError(error.message || "Server Error");
  }

}
