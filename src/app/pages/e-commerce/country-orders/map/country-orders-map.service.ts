import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class CountryOrdersMapService {

  constructor(private http: HttpClient) {}

  getCords(): Observable<any> {
    return this.http.get('./assets/leaflet-countries/countries.geo.json');
  }

}
