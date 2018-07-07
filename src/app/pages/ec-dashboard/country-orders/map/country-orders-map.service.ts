import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class CountryOrdersMapService {

  constructor(private http: HttpClient) {}

  getCords() {
    return this.http.get('./assets/leaflet-countries/countries.geo.json');
  }

}
