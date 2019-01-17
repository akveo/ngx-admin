export interface OrdersChart {
  chartLabel: string[];
  linesData: number[][];
}

export abstract class OrdersChartData {
  abstract getDataLabels(nPoints: number, labelsArray: string[]): string[];
  abstract getOrdersChartData(period: string): OrdersChart;
}
