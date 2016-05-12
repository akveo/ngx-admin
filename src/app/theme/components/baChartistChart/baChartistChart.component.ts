import {Component, ViewEncapsulation, Input, Output, ElementRef, EventEmitter} from '@angular/core';

import './baChartistChart.loader.ts';

@Component({
  selector: 'ba-chartist-chart',
  styles: [require('chartist/dist/chartist.css'), require('./baChartistChart.scss')],
  template: require('./baChartistChart.html'),
  encapsulation: ViewEncapsulation.None,
  providers: [],
})
export class BaChartistChart {

  @Input() baChartistChartType:string;
  @Input() baChartistChartData:Object;
  @Input() baChartistChartOptions:Object;
  @Input() baChartistChartResponsive:Object;
  @Input() baChartistChartClass:string;
  @Output() onChartReady = new EventEmitter<any>();

  constructor (private _elementRef:ElementRef) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    let el = this._elementRef.nativeElement.querySelector('.ba-chartist-chart');

    let chart = new Chartist[this.baChartistChartType](el, this.baChartistChartData, this.baChartistChartOptions, this.baChartistChartResponsive);
    this.onChartReady.emit(chart);
  }

}
