import { Observable } from 'rxjs';

export abstract class StatsBarData {
  abstract getStatsBarData(): Observable<number[]>;
}
