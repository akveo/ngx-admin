import { Observable } from 'rxjs';

export interface OutlineData {
  label: string;
  value: number;
}

export abstract class VisitorsAnalyticsData {
  abstract getInnerLineChartData(): Observable<number[]>;
  abstract getOutlineLineChartData(): Observable<OutlineData[]>;
  abstract getPieChartData(): Observable<number>;
}
