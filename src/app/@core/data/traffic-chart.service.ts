import { Injectable } from '@angular/core';
import { of as observableOf,  Observable } from 'rxjs';


@Injectable()
export class TrafficChartService {

  private data: number[] = [
    300, 520, 435, 530,
    730, 620, 660, 860,
  ];

  getTrafficChartData(): Observable<number[]> {
    return observableOf(this.data);
  }
}
