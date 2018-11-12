import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GENERAL } from './../../app-config';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({
        'Accept': 'application/json',
        'authorization': 'Bearer ' + window.localStorage.getItem('access_token'),
    }),
}

const path = GENERAL.ENTORNO.ORGANIZACION_SERVICE;

@Injectable()
export class OrganizacionService {

    constructor(private http: HttpClient) {
    }

    get(endpoint) {
        return this.http.get(path + endpoint, httpOptions).pipe(
          catchError(this.handleError),
        );
    }

    post(endpoint, element) {
        return this.http.post(path + endpoint, element, httpOptions).pipe(
          catchError(this.handleError),
        );
    }

    put(endpoint, element) {
        return this.http.put(path + endpoint + '/' + element.Id, element, httpOptions).pipe(
          catchError(this.handleError),
        );
    }

    delete(endpoint, element) {
        return this.http.delete(path + endpoint + '/' + element.Id, httpOptions).pipe(
          catchError(this.handleError),
        );
    }

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          console.error('An error occurred:', error.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          console.error(
            `Backend returned code ${error.status}, ` +
            `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return throwError({
          status: error.status,
          message: 'Something bad happened; please try again later.',
        });
    };
}
