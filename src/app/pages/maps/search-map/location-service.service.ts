import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LocationService {

  private key: string = 'AIzaSyDU7nlRcJTW0VhnfCMkLytn4lhtvaXtF3w';
  private address: string = 'address=';
  private scheme: string = 'https://';
  private path: string = 'maps.googleapis.com/maps/api/geocode/json';

  constructor(private http: Http) {
  }

  searchByAddress(location: string): Observable<any> {
    const query: string = this.scheme + this.path + '?' + this.address + location + '&' + this.key;
    return this.http.get(query).map(result => result.json());
  }
}
