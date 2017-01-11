import {Component, ViewEncapsulation} from '@angular/core';

import {Chart} from './measurementTypesUser.loader.ts';
import {MeasurementTypesUserService} from './measurementTypesUser.service';

@Component({
  selector: 'measurement-types-user',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./measurementTypesUser.scss')],
  template: require('./measurementTypesUser.html')
})

export class MeasurementTypesForUserComponent {

  public doughnutData: Array<Object>;
  public totalDevices: number;

  constructor(private deviceTypesPieChartService: MeasurementTypesUserService) {
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
    let el = jQuery('.chart-area-measurement-types-user').get(0) as HTMLCanvasElement;
    new Chart(el.getContext('2d')).Doughnut(this.doughnutData, {
      segmentShowStroke: false,
      percentageInnerCutout: 64,
      responsive: true
    });
  }
}
