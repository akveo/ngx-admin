import { Observable } from 'rxjs';

export interface TrafficList {
  date: string;
  value: number;
  delta: {
    up: boolean;
    value: number;
  };
  comparison: {
    prevDate: string;
    prevValue: number;
    nextDate: string;
    nextValue: number;
  };
}

export abstract class TrafficListData {
  abstract getTrafficListData(period: string): Observable<TrafficList>;
}
