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

  public labels = {
    one: ["Sleeping", "Designing", "Coding", "Cycling"],
    two: ["April", "May", "June", "Jule", "August", "September", "October", "November", "December"],
    three: ["May", "June", "Jule", "August", "September", "October", "November"]
  };
  public data = {
    one: [20, 40, 5, 35],
    two: [[1, 9, 3, 4, 5, 6, 7, 8, 2].map((e) => {return Math.sin(e) * 25 + 25})],
    three: [
      [65, 59, 90, 81, 56, 55, 40],
      [28, 48, 40, 19, 88, 27, 45]
    ]
  };
  public series = ['Product A', 'Product B'];
  public colours = chartColors;
  public options = {
    scaleShowLabelBackdrop : false,
    segmentShowStroke : false,
    // TODO: produce an error
    // responsive: true,
    scaleFontColor: "rgba(255,255,255,.7)",
    scaleLineColor: "rgba(255,255,255,.7)",
    pointLabelFontColor: "rgba(255,255,255,.7)"
  };

  constructor(private _chartJsService:ChartJsService) {
  }

  ngOnInit() {
    // var self = this;
    // setInterval(() => {
    //
    //   var temp = [...this.data.two];
    //   temp[0].unshift(temp[0].pop());
    //   this.data.two = temp;
    //
    // }, 300);
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
