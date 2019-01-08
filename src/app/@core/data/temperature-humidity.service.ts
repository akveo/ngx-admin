import { Injectable } from '@angular/core';
import { of as observableOf,  Observable } from 'rxjs';

export class Temperature {
  value: number;
  min: number;
  max: number;
}

@Injectable()
export class TemperatureHumidityService {

  private temperatureDate: Temperature = {
    value: 24,
    min: 12,
    max: 30,
  };

  private humidityDate: Temperature = {
    value: 87,
    min: 0,
    max: 100,
  };

  getTemperatureData(): Observable<Temperature> {
    return observableOf(this.temperatureDate);
  }

  getHumidityData(): Observable<Temperature> {
    return observableOf(this.humidityDate);
  }
}
