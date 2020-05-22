import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {map, catchError} from 'rxjs/operators';
import {HttpErrorResponse} from '@angular/common/http';
import { ServiceAgreementList } from '../../@core/data/service-agreement';

@Injectable({
  providedIn: 'root',
})
export class ServiceAgreementService {
  constructor(private http: HttpClient) {
  }
  url = 'http://localhost:8011/api/customerStatic/pagingSearchParam?start=0&sort=desc&length=20&column=startTime&customerCode=&customerFullname=&customerBusiness=&payCycle=&isActive=';
  json;
  getServiceAgreement(): Observable<any> {  
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Requested-Method': 'POST',
    }); 
    const options = { headers: headers };
    return this.http.post(this.url, null).pipe(
      map(this.extractData),
      catchError(this.handleError),
    );
    
    
  }

  private extractData(body: any): ServiceAgreementList[] {
    // console.log('test', body.serviceAgreementList);
    return Object.assign(body.content);
  }

  private handleError(error: HttpErrorResponse | any) {
    let errMsg: string;
    let errObj: any;

    if (error instanceof HttpErrorResponse) {
      const err = error.message || JSON.stringify(error);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
      errObj = error.error.message;
    } else {
      errMsg = error.message ? error.message : error.toString();
      const body = error.message || '';
      errObj = body;
    }

    return throwError(errObj);
  }
}
