import { Observable } from 'rxjs';

export interface Month {
  month: string;
  delta: string;
  down: boolean;
  kWatts: string;
  cost: string;
}

export interface Electricity {
  title: string;
  active?: boolean;
  months: Month[];
}

export interface ElectricityChart {
  label: string;
  value: number;
}

export abstract class ElectricityData {
  abstract getListData(): Observable<Electricity[]>;
  abstract getChartData(): Observable<ElectricityChart[]>;
}
