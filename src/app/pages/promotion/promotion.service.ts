import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {map, catchError} from 'rxjs/operators';
import {HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { PromotionList } from '../../@core/data/promotion';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {
  constructor(private http: HttpClient) {
  }

  getPromotion(): Observable<any> {
    const url = 'http://localhost:8011/api/promotions/all';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Requested-Url': url,
      'X-Requested-Method': 'GET',
    });
    const options = {headers: headers};
    return this.http.get(url).pipe(
      map(this.extractData),
      catchError(this.handleError),
    );
  }

  private extractData(body: any): PromotionList[] {
    return Object.assign(body.promotionList);
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
