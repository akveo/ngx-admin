import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { UserResponse } from '../../@core/data/user-response';
import { User } from '../../@core/data/user';

@Injectable({
    providedIn: 'root',
})
export class LoginService {
    constructor(private http: HttpClient) {
    }

    login(user: User): Observable<any> {
        const url = 'http://10.170.3.190:8011/api/user/getAuthorization ';
        return this.http.post(url,JSON.stringify(user)).pipe(
            map(this.extractData),
            catchError(this.handleError),
            tap(res => this.setSession(res)),
        );
    }

    public setSession(authResult) {
        localStorage.setItem('roles', authResult.value);
        localStorage.setItem('username', authResult.username);
    }     


    private extractData(body: any): UserResponse {
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