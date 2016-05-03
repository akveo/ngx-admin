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

  public labels = ["Sleeping", "Designing", "Coding", "Cycling"];
  public data = [20, 40, 5, 35];
  public colours = chartColors;
  public options = {
    scaleShowLabelBackdrop : false,
    segmentShowStroke : false,
    // responsive: true,
    scaleFontColor: "rgba(255,255,255,.7)",
    scaleLineColor: "rgba(255,255,255,.7)",
    pointLabelFontColor: "rgba(255,255,255,.7)"
  };

  constructor(private _chartJsService:ChartJsService) {
  }

  chartType(type) {
    return type;
  }

  changeData ($event) {
    let shuffle = (o) => {
      for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x){}
      return o;
    };

    this.data = shuffle(this.data);
  }
}
