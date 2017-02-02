import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

import { BaThemePreloader } from '../../../theme/services';

import 'amcharts3';
import 'amcharts3/amcharts/plugins/responsive/responsive.js';
import 'amcharts3/amcharts/serial.js';

import 'ammap3';
import 'ammap3/ammap/maps/js/worldLow';

import { BaAmChartThemeService } from './ba-am-chart-theme.service';

import 'style-loader!./ba-am-chart.component.scss';

@Component({
  selector: 'ba-am-chart',
  templateUrl: './ba-am-chart.component.html',
  providers: [BaAmChartThemeService],
})
export class BaAmChart implements OnInit {

  @Input() baAmChartConfiguration: any;
  @Input() baAmChartClass: string;
  @Output() onChartReady = new EventEmitter<any>();

  @ViewChild('baAmChart') public _selector: ElementRef;

  constructor (private _baAmChartThemeService: BaAmChartThemeService) {
    this._loadChartsLib();
  }

  ngOnInit(): void {
    AmCharts.themes.blur = this._baAmChartThemeService.getTheme();
  }

  ngAfterViewInit(): void {
    const chart: any = AmCharts.makeChart(this._selector.nativeElement, this.baAmChartConfiguration);
    this.onChartReady.emit(chart);
  }

  private _loadChartsLib(): void {
    BaThemePreloader.registerLoader(new Promise((resolve, reject) => {
      const amChartsReadyMsg: string = 'AmCharts ready';

      if (AmCharts.isReady) {
        resolve(amChartsReadyMsg);
      } else {
        AmCharts.ready(() => {
          resolve(amChartsReadyMsg);
        });
      }
    }));
  }
}
