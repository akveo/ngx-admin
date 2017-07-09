import {Injectable} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Headers, RequestOptions, Http, Response } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class CadasterService {

  constructor(private http : Http) {
  }

territoriesList:any[] = [];



addNewTerritory(territory){
  this.territoriesList.push(territory);
  console.log(this.territoriesList);
}

getTerritories(){
  return this.territoriesList;
}

create(address): Observable<any> {
   let headers = new Headers({ 'Content-Type': 'application/json' });
   let options = new RequestOptions({ headers: headers });

   return this.http.post('http://localhost:1880/tms/territories', address, options)
                   .map(this.extractData)
                   .catch(this.handleError);
 }

 private extractData(res: Response) {
   let body = res.json();
   return body || { };
 }

 private handleError (error: Response | any) {
   // In a real world app, you might use a remote logging infrastructure
   let errMsg: string;
   if (error instanceof Response) {
     const body = error.json() || '';
     const err = body.error || JSON.stringify(body);
     errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
   } else {
     errMsg = error.message ? error.message : error.toString();
   }
   console.error("ErrorHanfler");
   console.error(errMsg );
   return Observable.throw(errMsg);
 }

}
