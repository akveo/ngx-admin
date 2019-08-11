export interface ProfitChart {
  chartLabel: string[];
  data: number[][];
}

export abstract class ProfitChartData {
  abstract getProfitChartData(period: string): ProfitChart;
}
