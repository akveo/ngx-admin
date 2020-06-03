import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { UserResponse } from '../@core/data/user-response';
import { User } from '../@core/data/user';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class LoginService {
    private userSubject: BehaviorSubject<User>;
    public user: Observable<User>;

    constructor(
        private router: Router,
        private http: HttpClient) {
        this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
        this.user = this.userSubject.asObservable();
    }

    public get userValue(): User {
        return this.userSubject.value;
    }

    login(user: User): Observable<any> {
        let url = 'http://34.87.6.140:8012/api/user/getAuthorization';

        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'X-Requested-Method': 'POST',
        });
        const options = { headers: headers };

        console.log(JSON.stringify(user));
        console.log(url);

        return this.http.post(url, JSON.stringify(user), options).pipe(
            map(this.extractData),
            catchError(this.handleError),
            tap(res => this.setSession(res)))
    }

    logout() {
        // remove user from local storage and set current user to null
        localStorage.removeItem('username');
        localStorage.removeItem('roles');
        this.userSubject.next(null);
        this.router.navigate(['/auth/login']);
    }

    public setSession(authResult) {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('username', JSON.stringify(authResult.username));
        localStorage.setItem('roles', JSON.stringify(authResult.value));
    }

    private extractData(body: any): UserResponse {
        console.log(JSON.stringify(body));
        let result: UserResponse;
        result = Object.assign(body);
        // this.userSubject.next(); pls find this
        // this.userSubject.next();
        return result;
    }

    private handleError(error: HttpErrorResponse | any) {
        let errMsg: string;
        let errObj: any;

        if (error instanceof HttpErrorResponse) {
            const err = error.message || JSON.stringify(error);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
            errObj = error.message;
        } else {
            errMsg = error.message ? error.message : error.toString();
            const body = error.message || '';
            errObj = body;
        }

        return throwError(errObj);
    }

}