import { Observable } from 'rxjs';

export interface TrafficBar {
  data: number[];
  labels: string[];
  formatter: string;
}

export abstract class TrafficBarData {
  abstract getTrafficBarData(period: string): Observable<TrafficBar>;
}
