import { Injectable } from '@angular/core';
import { of as observableOf,  Observable } from 'rxjs';
import { SolarData } from '../data/solar';

@Injectable()
export class SolarService extends SolarData {
  private value = 42;

  getSolarData(): Observable<number> {
    return observableOf(this.value);
  }
}
