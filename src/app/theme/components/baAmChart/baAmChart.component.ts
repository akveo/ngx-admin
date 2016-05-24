import {Component, ViewChild, ViewEncapsulation, Input, Output, ElementRef, EventEmitter} from '@angular/core';

import {BaThemePreloader} from '../../../theme/services';

import './baAmChart.loader.ts';
import {BaAmChartThemeService} from './baAmChartTheme.service';

@Component({
  selector: 'ba-am-chart',
  template: require('./baAmChart.html'),
  encapsulation: ViewEncapsulation.None,
  providers: [BaAmChartThemeService],
})
export class BaAmChart {

  @Input() baAmChartConfiguration:Object;
  @Input() baAmChartClass:string;
  @Output() onChartReady = new EventEmitter<any>();

  @ViewChild('baAmChart') private _selector:ElementRef;

  constructor (private _baAmChartThemeService:BaAmChartThemeService) {
    this._loadChartsLib();
  }

  ngOnInit() {
    AmCharts.themes.blur = this._baAmChartThemeService.getTheme();
  }

  ngAfterViewInit() {
    let chart = AmCharts.makeChart(this._selector.nativeElement, this.baAmChartConfiguration);
    this.onChartReady.emit(chart);
  }

  private _loadChartsLib():void {
    BaThemePreloader.registerLoader(new Promise((resolve, reject) => {
      AmCharts.ready(function(){
        resolve('AmCharts ready');
      });
    }));
  }
}
