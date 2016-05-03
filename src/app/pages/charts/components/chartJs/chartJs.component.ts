import {Component, ViewEncapsulation} from 'angular2/core';
import {BaCard} from '../../../../theme';

import {ChartJsService} from "./chartJs.service";

import {CHART_DIRECTIVES} from 'ng2-charts';
import {chartColors} from "../../../../theme/theme.constants";

@Component({
  selector: 'chart-js',
  pipes: [],
  providers: [ChartJsService],
  encapsulation: ViewEncapsulation.None,
  styles: [require('./chartJs.scss')],
  directives: [BaCard, CHART_DIRECTIVES],
  template: require('./chartJs.html'),
})
export class ChartJs {
  public pieLabels = ["Sleeping", "Designing", "Coding", "Cycling"];
  public pieChartType = 'Pie';
  public pieData = [20, 40, 5, 35];
  public pieColours = chartColors;
  public pieOptions = {
    segmentShowStroke : false,
    // responsive: true,
    scaleFontColor: "rgba(255,255,255,.7)",
    scaleLineColor: "rgba(255,255,255,.7)",
    pointLabelFontColor: "rgba(255,255,255,.7)"
  };

  constructor(private _chartJsService:ChartJsService) {
  }

  ngAfterViewInit() {

  }

  pieChangeData () {
    let shuffle = (o) => {
      for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x){}
      return o;
    };

    this.pieData = shuffle(this.pieData);
  }
}
