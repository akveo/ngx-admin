import {Component, ViewEncapsulation} from '@angular/core';

import './activeDevices.loader.ts';
import {DashboardService} from "../dashboard.service";

@Component({
  selector: 'active-devices-pie-chart',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./activeDevices.scss')],
  template: require('./activeDevices.html')
})
export class ActiveDevices {

  public activeDevices: number;
  public percentage: number;

  constructor(private _dashboardService: DashboardService) {

    this._dashboardService.getNumberOfActiveDevices().subscribe(
      (result: any) => {
        this.activeDevices = result.active;
        this.percentage = ((result.active / result.total) * 100).toFixed(1);

        this._loadPieCharts(this.percentage);
        this._updatePieCharts(this.percentage);
      },
      (error) => console.log(error)
    )
  }

  private _loadPieCharts(percentage: number) {

    jQuery('.active-devices-pie-chart').each(function () {
      let chart = jQuery(this);
      chart.easyPieChart({
        easing: 'easeOutBounce',
        onStep: function (from, to, percent) {
          jQuery(this.el).find('.percent').text(percentage + "%");
        },
        barColor: '#ffffff',
        trackColor: 'rgba(0,0,0,0)',
        size: 84,
        scaleLength: 0,
        animation: 2000,
        lineWidth: 9,
        lineCap: 'round',
      });
    });
  }

  private _updatePieCharts(percentage: number) {
    jQuery('.active-devices-pie-chart').each(function (index, chart) {
      jQuery(chart).data('easyPieChart').update(percentage + "%");
    });
  }
}
