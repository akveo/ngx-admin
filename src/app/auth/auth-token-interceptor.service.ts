import { Injectable, Injector } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import 'rxjs/add/operator/switchMap';
import { catchError } from 'rxjs/operators';
import { tap } from "rxjs/operators";




import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(
    private inj: Injector,
    private authService: NbAuthService,
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.authService = this.inj.get(NbAuthService);

	return this.authService.getToken()
      .pipe(
        switchMap((token: NbAuthJWTToken) => {
          if (token && token.getValue()) {
            request = request.clone({
              setHeaders: {
                 'Authorization': token.getValue(),
              },
            });
          }
          return next.handle(request).pipe(
		tap(
                  event => {
                        //logging the http response to browser's console in case of a success
                        if (event instanceof HttpResponse) {
                                console.log("api call success :", event);
                        }
                  },
                  error => {
                        //logging the http response to browser's console in case of a failuer
                        if (event instanceof HttpResponse) {
                                console.log("api call error :", event);
                        }
                  }
      		)
      	 );
        }),
      );
  }
}
