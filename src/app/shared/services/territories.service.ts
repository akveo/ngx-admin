import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {  AngularFireDatabase } from 'angularfire2/database';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { FirebaseApp } from "angularfire2";
import { Subject } from "rxjs";
import { TerritoryTypeEnum } from "app/shared/models/territory";

@Injectable()
export class TerritoriesService {

  smartTableData = [

  ];

  fbSDK:any;

  constructor(private http: Http , private db : AngularFireDatabase,  @Inject(FirebaseApp) fb: FirebaseApp){
      this.fbSDK = fb.database();
  }

  getData(): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.smartTableData);
      }, 2000);
    });
  }

  getTerritories(): Observable<any> {
    return this.http.get("http://localhost:1880/tms/territories")
                                      .map(this.extractData)
                                        .catch(this.handleError);
  }
createTerritory(territory:any , territoryType: any) : Observable<any>{

  
  const territoryToSave = Object.assign({}, territory);
  const newTerritoryKey = this.fbSDK.ref('territory-ui').child('territories').push().key;
  const dataToSave = {};

  dataToSave["territories/" + newTerritoryKey] = territoryToSave;
  dataToSave[`${territoryType}/${newTerritoryKey}`] = true;

  console.log(dataToSave)

  return this.firebaseUpdate(dataToSave);
}

firebaseUpdate(dataToSave) {
    const subject = new Subject();

    this.fbSDK.ref().update(dataToSave)
        .then(
            val => {
                subject.next(val);
                subject.complete();

            },
            err => {
                subject.error(err);
                subject.complete();
            }
        );

        return subject.asObservable();
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
