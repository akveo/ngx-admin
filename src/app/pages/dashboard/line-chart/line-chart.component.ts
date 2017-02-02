import { Component, OnInit } from '@angular/core';

import { LineChartService } from './line-chart.service';

import 'style-loader!./line-chart.component.scss';

@Component({
  selector: 'line-chart',
  templateUrl: './line-chart.component.html'
})
export class LineChartComponent implements OnInit {

  chartData: any;

  constructor(private _lineChartService: LineChartService) { }

  ngOnInit(): void {
    this.chartData = this._lineChartService.getData();
  }

  initChart(chart: any): void {
    const zoomChart: any = () => {
      chart.zoomToDates(new Date(2013, 3), new Date(2014, 0));
    };

    chart.addListener('rendered', zoomChart);
    zoomChart();

    if (chart.zoomChart) {
      chart.zoomChart();
    }
  }
}
