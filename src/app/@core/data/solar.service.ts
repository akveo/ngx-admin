import { Injectable } from '@angular/core';
import { of as observableOf,  Observable } from 'rxjs';

@Injectable()
export class SolarService {
  private value = 42;

  getSolarData(): Observable<number> {
    return observableOf(this.value);
  }
}
