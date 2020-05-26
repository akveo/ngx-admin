import {Injectable} from '@angular/core';
import {HttpClient,  HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {map, catchError} from 'rxjs/operators';
import {HttpErrorResponse} from '@angular/common/http';
import { BillingList } from '../../@core/data/billing';
import { DatePipe } from '@angular/common'

@Injectable({
  providedIn: 'root',
})
export class BillingService {
  constructor(private http: HttpClient, public datepipe: DatePipe) {
  }

  postData = {
    start: 0,
    sort: '',
    length: 20,
    column: 'startTime',
    customerCode: '',
    customerFullname: '',
    customerBusiness: '',
    payCycle: '',
    nextBillTmFirst: '',
    nextBillTmLast: '',
    isActive: '1'
  };
  
  json;
  getBilling(): Observable<any> { 
    const url = 'http://34.87.6.140:8011/api/customerStatic/pagingSearchParamBilling?start=0&sort=desc&length=20&column=startTime&customerCode=&customerFullname=&customerBusiness=&payCycle=&nextBillTmFirst=&nextBillTmLast=&isActive=1';
    // const options = { headers: headers};
    return this.http.post(url, null).pipe(
      map(this.extractData),
      catchError(this.handleError),
    );
    // '?start=' + this.postData.start + '&sort='+ this.postData.sort +
    // '&length=' + this.postData.length + '&column=' + this.postData.column + '&customerCode=' +
    // this.postData.customerCode + '&customerFullname=' + this.postData.customerFullname + 
    // '&customerBusiness=' + this.postData.customerBusiness + '&payCycle=' + this.postData.payCycle +
    // '&nextBillTmFirst=' + this.postData.nextBillTmFirst + '&nextBillTmLast='+ this.postData.nextBillTmLast +
    // '&isActive=' + this.postData.isActive 
  }
  // params: [{ start: 0, sort: '', length: 20, column: 'startTime', customerCode: '', customerFullname: ''
  // ,  customerBusiness: '', payCycle: '', nextBillTmFirst: '', nextBillTmLast: '', isActive: '1'}]
  private extractData(body: any): BillingList[] {
    console.log('coba', body.content)
    return Object.assign(body.content);
  }

  postBilling(data: BillingList): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Requested-Method': 'POST',
    });
    console.log('isiiii', data.ebCustomerId)
    const id = data.ebCustomerId
    let nextBill_date =this.datepipe.transform(data.nextBillTm, 'yyyy-MM-dd'+'T'+'HH:mm:ss.SSS');
    let endTime_date =this.datepipe.transform(data.endTime, 'yyyy-MM-dd'+'T'+'HH:mm:ss.SSS');
    let startTime_date =this.datepipe.transform(data.startTime, 'yyyy-MM-dd'+'T'+'HH:mm:ss.SSS');
    let modifyTm_date =this.datepipe.transform(data.modifyTm, 'yyyy-MM-dd'+'T'+'HH:mm:ss.SSS');
    data.nextBillTm = nextBill_date
    data.endTime = endTime_date
    data.startTime = startTime_date
    data.modifyTm = modifyTm_date
    console.log('isi tanggal' ,data)
    const options = { headers: headers };
    const url = 'http://34.87.6.140:8011/api/customerStatic/insertData';
    return this.http.post(url, JSON.stringify(data) , options).pipe(
      catchError(this.handleError),
    );
  }

  deleteBilling(data: BillingList): Observable<any> {
    const id = data.ebCustomerId;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Requested-Method': 'PUT',
    });
    const options = { headers: headers };
    const url = 'http://34.87.6.140:8011/api/customerStatic/delete';
    return this.http.put(url, id, options).pipe(
      catchError(this.handleError),
    );
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
