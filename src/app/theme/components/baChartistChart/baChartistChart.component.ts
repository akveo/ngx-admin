import {
    Component,
    ViewChild,
    ViewEncapsulation,
    Input,
    Output,
    ElementRef,
    EventEmitter,
    OnInit,
    OnChanges,
    OnDestroy,
} from '@angular/core';

import {Chartist} from './baChartistChart.loader.ts';

@Component({
  selector: 'ba-chartist-chart',
  encapsulation: ViewEncapsulation.None,
  styles: [require('chartist/dist/chartist.css'), require('./baChartistChart.scss')],
  template: require('./baChartistChart.html'),
  providers: [],
})
export class BaChartistChart {

  @Input() baChartistChartType:string;
  @Input() baChartistChartData:Object;
  @Input() baChartistChartOptions:Object;
  @Input() baChartistChartResponsive:Object;
  @Input() baChartistChartClass:string;
  @Output() onChartReady = new EventEmitter<any>();

  @ViewChild('baChartistChart') private _selector:ElementRef;

  private chart;

  ngAfterViewInit() {
    this.chart = new Chartist[this.baChartistChartType](this._selector.nativeElement, this.baChartistChartData, this.baChartistChartOptions, this.baChartistChartResponsive);
    this.onChartReady.emit(this.chart);
  }

  ngOnChanges() {
    if (this.chart) {
      (<any>this.chart).update(this.baChartistChartData, this.baChartistChartOptions);
    }
  }

  ngOnDestroy():void {
    if (this.chart) {
      this.chart.detach();
    }
  }
}
