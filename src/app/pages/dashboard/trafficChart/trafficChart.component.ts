import {Component, ViewEncapsulation, ElementRef} from '@angular/core';

import './trafficChart.loader.ts';
import {TrafficChartService} from './trafficChart.service';
import * as Chart from 'chart.js';

@Component({
  selector: 'traffic-chart',
  // encapsulation: ViewEncapsulation.None,
  styleUrls: ['./trafficChart.scss'],
  templateUrl: './trafficChart.html'
})

// TODO: move chart.js to it's own component
export class TrafficChart {

  public doughnutData: Array<Object>;

  constructor(private trafficChartService:TrafficChartService) {
    this.doughnutData = trafficChartService.getData();
  }

  ngAfterViewInit() {
    this._loadDoughnutCharts();
  }

  private _loadDoughnutCharts() {
    let el = jQuery('.chart-area').get(0) as HTMLCanvasElement;
    new Chart(el.getContext('2d')).Doughnut(this.doughnutData, {
      segmentShowStroke: false,
      percentageInnerCutout : 64,
      responsive: true
    });
  }
}
