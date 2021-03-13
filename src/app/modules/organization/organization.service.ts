import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { Organization, OrganizationDataSharingAgreement } from 'thingbook-api';

@Injectable({
    providedIn: 'root'
})
export class OrganizationService {

    constructor(private http: HttpClient) {

    }

    getOrganization(id): Observable<Organization> {
        return this.http.get<Organization>(`http://localhost:3000/api/v1/organization/${id}`)
            .pipe(
                catchError(this.handleError<Organization>('getOrganization', null))
            );
    }

    getOrganizationAgreements(id): Observable<OrganizationDataSharingAgreement[]> {
        return this.http.get<OrganizationDataSharingAgreement[]>(`http://localhost:3000/api/v1/organization/${id}/agreement`)
            .pipe(
                catchError(this.handleError<OrganizationDataSharingAgreement[]>('getOrganizationAgreements', []))
            );
    }

    getOrganizations(): Observable<Organization[]> {
        return this.http.get<Organization[]>('http://localhost:3000/api/v1/organization')
            .pipe(
                catchError(this.handleError<Organization[]>('getOrganizations', []))
            );
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            console.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

}