import {Component, OnInit} from '@angular/core';

import {LineChartData} from "../../../../theme/components/morrisLineChart/morrisLineChart.component";
import {DonutChartData} from "../../../../theme/components/morrisDonutChart/morrisDonutChart.component";
import {BarChartData} from "../../../../theme/components/morrisBarChart/morrisBarChart.component";
import {AreaChartData} from "../../../../theme/components/morrisAreaChart/morrisAreaChart.component";
import {MorrisService} from "./morris.service";
@Component({
  moduleId: module.id,
  selector: 'morris',
  templateUrl: 'morris.componenet.html',
  providers: [MorrisService],
  styles: [require('chartist/dist/chartist.css'), require('./morrisJs.scss')]
})

export class MorrisComponent  implements OnInit{
  ngOnInit(): void {
    this.initLineChart();
    this.initDonutChart();
    this.initBarChart();
    this.initAreaChart();
  }

  lineChartData : LineChartData = new LineChartData();
  donutChartData : DonutChartData = new DonutChartData();
  barChartData : BarChartData = new BarChartData();
  areaChartData : AreaChartData = new AreaChartData();

  initLineChart() : void{
    this.lineChartData.data = MorrisService.getLineChartData();
    this.lineChartData.xkey = ['year'];
    this.lineChartData.ykey = ['Serie A', 'Serie B'];
    this.lineChartData.lables = ['Serie A', 'Serie B'];
    this.lineChartData.lineColors = ['rgb(32, 158, 145)', 'rgb(223, 184, 28)'];
  }

  initDonutChart() : void {
    this.donutChartData.data = MorrisService.getDonutChartData();
    this.donutChartData.colors = ['rgb(223, 184, 28)', 'rgb(232, 86, 86)', 'rgb(32, 158, 145)'];
    this.donutChartData.formatterFunction = function (x : any) {
      return '$ ' + x.toFixed(2);
    }
  }

  initBarChart() : void {
    this.barChartData.data = MorrisService.getBarChartData();
    this.barChartData.xkey = ['year'];
    this.barChartData.ykey = ['Serie A', 'Serie B'];
    this.barChartData.lables = ['Serie A', 'Serie B'];
    this.barChartData.lineColors = ['rgb(32, 158, 145)', 'rgb(223, 184, 28)'];
  }

  initAreaChart() : void {
    this.areaChartData.data = MorrisService.getLineChartData();
    this.areaChartData.xkey = ['year'];
    this.areaChartData.ykey = ['Serie A', 'Serie B'];
    this.areaChartData.lables = ['Serie A', 'Serie B'];
    this.areaChartData.lineColors = ['rgb(32, 158, 145)', 'rgb(223, 184, 28)'];
  }
}
