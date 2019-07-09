import { Observable } from 'rxjs';

export abstract class ProfitBarAnimationChartData {
  abstract getChartData(): Observable<{ firstLine: number[]; secondLine: number[]; }>;
}
