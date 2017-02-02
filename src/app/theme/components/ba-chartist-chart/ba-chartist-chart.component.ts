import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  ViewChild
} from '@angular/core';

import * as Chartist from 'chartist';
import 'style-loader!./ba-chartist-chart.component.scss';

@Component({
  selector: 'ba-chartist-chart',
  templateUrl: './ba-chartist-chart.component.html'
})
export class BaChartistChart implements AfterViewInit, OnChanges, OnDestroy {

  @Input() baChartistChartType: string;
  @Input() baChartistChartData: any;
  @Input() baChartistChartOptions: any;
  @Input() baChartistChartResponsive: any;
  @Input() baChartistChartClass: string;
  @Output() onChartReady = new EventEmitter<any>();

  @ViewChild('baChartistChart') public _selector: ElementRef;

  private chart;

  ngAfterViewInit(): void {
    this.chart = new Chartist[this.baChartistChartType](this._selector.nativeElement, this.baChartistChartData, this.baChartistChartOptions, this.baChartistChartResponsive);
    this.onChartReady.emit(this.chart);
  }

  ngOnChanges(changes): void {
    if (this.chart) {
      (<any>this.chart).update(this.baChartistChartData, this.baChartistChartOptions);
    }
  }

  ngOnDestroy(): void {
    if (this.chart) {
      this.chart.detach();
    }
  }
}
