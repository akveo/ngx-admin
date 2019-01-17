import { Observable } from 'rxjs';

export interface LiveUpdateChart {
  liveChart: { value: [string, number] }[];
  delta: {
    up: boolean;
    value: number;
  };
  dailyIncome: number;
}

export interface PieChart {
  value: number;
  name: string;
}

export abstract class EarningData {
  abstract getEarningLiveUpdateCardData(currency: string): Observable<any[]>;
  abstract getEarningCardData(currency: string): Observable<LiveUpdateChart>;
  abstract getEarningPieChartData(): Observable<PieChart[]>;
}
