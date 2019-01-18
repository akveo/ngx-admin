import { Observable } from 'rxjs';

export abstract class TrafficChartData {
  abstract getTrafficChartData(): Observable<number[]>;
}
