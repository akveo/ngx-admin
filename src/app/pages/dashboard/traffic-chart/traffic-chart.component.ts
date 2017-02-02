import { AfterViewInit, Component, OnInit } from '@angular/core';

import { TrafficChartService } from './traffic-chart.service';
import * as Chart from 'chart.js';

import 'style-loader!./traffic-chart.component.scss';

@Component({
  selector: 'traffic-chart',
  templateUrl: './traffic-chart.component.html'
})

// TODO: move chart.js to it's own component
export class TrafficChartComponent implements AfterViewInit, OnInit {

  doughnutData: Array<any>;

  constructor(private trafficChartService: TrafficChartService) { }

  ngOnInit(): void {
    this.doughnutData = this.trafficChartService.getData();
  }

  ngAfterViewInit(): void {
    this._loadDoughnutCharts();
  }

  private _loadDoughnutCharts() {
    const el: HTMLCanvasElement = jQuery('.chart-area').get(0) as HTMLCanvasElement;
    new Chart(el.getContext('2d')).Doughnut(this.doughnutData, {
      segmentShowStroke: false,
      percentageInnerCutout : 64,
      responsive: true
    });
  }
}
