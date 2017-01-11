import {Component, ViewEncapsulation} from '@angular/core';

import {Chart} from './deviceTypes.loader.ts';
import {DeviceTypesService} from './deviceTypes.service';

@Component({
  selector: 'device-types',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./deviceTypes.scss')],
  template: require('./deviceTypes.html')
})

export class DeviceTypesComponent {

  public doughnutData: Array<Object>;
  public totalDevices: number;

  constructor(private deviceTypesPieChartService: DeviceTypesService) {
    deviceTypesPieChartService.getData().subscribe(
      (data) => {
        this.doughnutData = data;
        this.totalDevices = this.doughnutData.reduce((sum,data) => sum + data.value , 0);
        this.doughnutData.forEach((deviceData) => {
          (<any>deviceData).percentage = (((<any>deviceData).value/this.totalDevices)*100).toFixed(1);
        });
        this._loadDoughnutCharts();
      },
      (error) => console.log(error)
    );
  }

  private _loadDoughnutCharts() {
    let el = jQuery('.chart-area-device-types').get(0) as HTMLCanvasElement;
    new Chart(el.getContext('2d')).Doughnut(this.doughnutData, {
      segmentShowStroke: false,
      percentageInnerCutout: 64,
      responsive: true
    });
  }
}
