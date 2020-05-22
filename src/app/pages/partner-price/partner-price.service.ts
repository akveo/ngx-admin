import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { PromotionList } from '../../@core/data/promotion';
import { PartnerPrice } from '../../@core/data/partner-price';
import { PartnerPriceDetail } from '../../@core/data/partner-price-detail';

@Injectable({
  providedIn: 'root',
})
export class PartnerPriceService {
  constructor(private http: HttpClient) {
  }

  getHeaderPartnerPrice(filter: any): Observable<any> {
    const url = 'http://34.87.6.140:8011/api/productFlow/pagingFlowHeader?start=0&sort=asc&length=10&column=' + filter.column;
    return this.http.post(url, null).pipe(
      map(this.extractData),
      catchError(this.handleError),
    );
  }

  getDetailPartnerPrice(filter: any): Observable<any> {
    const url = 'http://34.87.6.140:8011/api/productFlow/pagingByCustomerCode?start=0&sort=asc&length=10&column=modifiedTm&customerCode=' + filter.customerCode;
    return this.http.post(url, null).pipe(
      map(this.extractData),
      catchError(this.handleError),
    );
  }

  // postPromotion(data: PromotionList): Observable<any> {
  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'X-Requested-Method': 'POST',
  //   });
  //   const options = { headers: headers };
  //   const url = 'http://localhost:8011/api/promotions/add';
  //   return this.http.post(url, JSON.stringify(data), options).pipe(
  //     catchError(this.handleError),
  //   );
  // }

  private extractData(body: any): PartnerPrice[] {
    return Object.assign(body.content);
  }

  private extractDataDetail(body: any): PartnerPriceDetail[] {
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
