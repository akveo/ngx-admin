import { AfterViewInit, Component, OnInit } from '@angular/core';

import { PieChartService } from './pie-chart.service';

import 'easy-pie-chart/dist/jquery.easypiechart.js';
import 'style-loader!./pie-chart.component.scss';

@Component({
  selector: 'pie-chart',
  templateUrl: './pie-chart.component.html'
})
// TODO: move easypiechart to component
export class PieChartComponent implements AfterViewInit, OnInit {

  charts: Array<any>;
  private _init = false;

  constructor(private _pieChartService: PieChartService) { }

  ngOnInit(): void {
    this.charts = this._pieChartService.getData();
  }

  ngAfterViewInit(): void {
    if (!this._init) {
      this._loadPieCharts();
      this._updatePieCharts();
      this._init = true;
    }
  }

  private _loadPieCharts() {
    jQuery('.chart').each(function() {
      const chart: any = jQuery(this);

      chart.easyPieChart({
        easing: 'easeOutBounce',
        onStep: function (from, to, percent) {
          jQuery(this.el).find('.percent').text(Math.round(percent));
        },
        barColor: jQuery(this).attr('data-rel'),
        trackColor: 'rgba(0,0,0,0)',
        size: 84,
        scaleLength: 0,
        animation: 2000,
        lineWidth: 9,
        lineCap: 'round',
      });
    });
  }

  private _updatePieCharts() {
    const getRandomArbitrary: any = (min, max) => { return Math.random() * (max - min) + min; };

    jQuery('.pie-charts .chart').each((index, chart) => {
      jQuery(chart).data('easyPieChart').update(getRandomArbitrary(55, 90));
    });
  }
}
