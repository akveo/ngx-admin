import {Component, ViewEncapsulation, Input, Output, ElementRef, EventEmitter} from 'angular2/core';

import './baAmChart.loader.ts';
import {DOM} from "angular2/src/platform/dom/dom_adapter";
import {BaAmChartThemeService} from './baAmChartTheme.service';

@Component({
  selector: 'ba-am-chart',
  styles: [require('./baAmChart.scss')],
  template: require('./baAmChart.html'),
  encapsulation: ViewEncapsulation.None,
  providers: [BaAmChartThemeService],
})
export class BaAmChart {

  @Input() baAmChartConfiguration:Object;
  @Input() baAmChartClass:string;
  @Output() onChartReady = new EventEmitter<any>();

  constructor (private _elementRef:ElementRef, private _baAmChartThemeService:BaAmChartThemeService) {
  }

  ngOnInit() {
    AmCharts.themes.blur = this._baAmChartThemeService.getTheme();
  }

  ngAfterViewInit() {
    let el = DOM.querySelector(this._elementRef.nativeElement, '.ba-am-chart');

    let chart = AmCharts.makeChart(el, this.baAmChartConfiguration);
    this.onChartReady.emit(chart);
  }
}
