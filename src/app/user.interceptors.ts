import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { filter, tap } from "rxjs/operators";
import * as api from 'thingbook-api';

@Injectable()
export class LoginInterceptor implements HttpInterceptor {

    public static s: BehaviorSubject<api.User> = new BehaviorSubject<api.User>(undefined);

    intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(httpRequest).pipe(
            tap((event: HttpResponse<any>) => {
                if (event instanceof HttpResponse && event.url.endsWith('/user/login')) {
                    LoginInterceptor.s.next(<api.User>event.body);
                }
            })
        );
    }
}

