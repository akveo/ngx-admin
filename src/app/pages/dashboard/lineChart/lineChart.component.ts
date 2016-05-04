import {Component, ViewEncapsulation} from 'angular2/core';

import './lineChart.loader.ts';
import {LineChartService} from './lineChart.service';

@Component({
  selector: 'line-chart',
  encapsulation: ViewEncapsulation.None,
  providers: [LineChartService],
  styles: [require('./lineChart.scss')],
  template: require('./lineChart.html')
})
export class LineChart {

  constructor(private _lineChartService:LineChartService) {
  }

  ngAfterViewInit() {
    this._loadLineChart();
  }

  // TODO: load proper AmCharts theme
  private _loadLineChart() {
    let chart = AmCharts.makeChart('amchart', this._lineChartService.getData());

    let zoomChart = () => {
      chart.zoomToDates(new Date(2013, 3), new Date(2014, 0));
    };

    chart.addListener('rendered', zoomChart);
    
    if (chart.zoomChart) {
      chart.zoomChart();
    }
  }
}
