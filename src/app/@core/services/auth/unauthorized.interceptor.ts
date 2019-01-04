import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

import { AuthStore } from '../../store/auth.store';

@Injectable()
export class UnauthorizedInterceptor implements HttpInterceptor {
    constructor(
        private authStore: AuthStore
    ) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).do(event => {}, err => {
            if (err instanceof HttpErrorResponse && err.status === 403) {
                this.authStore.logout();
            }
        });
    }
}
