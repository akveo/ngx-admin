import { Component } from '@angular/core';
import { EasyPieChartData } from '../../theme/components';
import { PieChartService } from './pieChart/pieChart.service'

@Component({
  selector: 'dashboard',
  styleUrls: ['./dashboard.scss'],
  templateUrl: './dashboard.html'
})
export class Dashboard {
  pieChartData: EasyPieChartData[];

  constructor(private _pieChartService: PieChartService) {
    this.pieChartData = _pieChartService.getData();
  }
}