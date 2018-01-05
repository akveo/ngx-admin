import {Injectable} from '@angular/core';

@Injectable()
export class CalcService {

  latitude: number = 51.678418;
  longitude: number = 7.809007;
  zoom: number;

  constructor() {
  }

  setCurrentPosition() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 10;
      });
    }
  }

  setCoordinates(lat, lng, zoom): void {
    this.latitude = lat;
    this.longitude = lng;
    this.zoom = zoom;
  }
}
