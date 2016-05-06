import {Component, ViewEncapsulation, Input, Output, ElementRef, EventEmitter} from 'angular2/core';

import './baAmChart.loader.ts';
import {DOM} from "angular2/src/platform/dom/dom_adapter";

@Component({
  selector: 'ba-am-chart',
  styles: [require('./baAmChart.scss')],
  template: require('./baAmChart.html'),
  encapsulation: ViewEncapsulation.None
})
export class BaAmChart {

  @Input() baAmChartConfiguration:Object;
  @Input() baAmChartClass:string;
  @Output() onChartReady = new EventEmitter<any>();

  constructor (private _elementRef:ElementRef) {
  }

  ngAfterViewInit() {
    let el = DOM.querySelector(this._elementRef.nativeElement, '.ba-am-chart');

    let chart = AmCharts.makeChart(el, this.baAmChartConfiguration);
    this.onChartReady.emit(chart);
  }
}
