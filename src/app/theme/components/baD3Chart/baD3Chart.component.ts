import {
  Component,
  ViewChild,
  ViewEncapsulation,
  Input,
  Output,
  EventEmitter,
  AfterViewInit,
  ElementRef
} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';

import {BaD3ChartService} from './baD3Chart.service';
import {d3} from './baD3Chart.loader';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'ba-d3-chart',
  template: require('./baD3Chart.html'),
  styles: [require('./baD3Chart.scss')],
  providers: [BaD3ChartService]
})
export class BaD3Chart {

  @Input() baD3ChartType:string;
  @Input() baD3ChartData:any;
  @Output() onChartReady = new EventEmitter<any>();

  @ViewChild('baD3Chart') private _selector:ElementRef;

  resizeCheck:Subscription;

  constructor(private _chartService:BaD3ChartService) {
  }

  ngAfterViewInit() {
    // draw method returns an Observable that listens for window resize
    // useful to unsubscribe when necessary
    this.resizeCheck = this._chartService.drawChartNew({
      chartType: this.baD3ChartType,
      element: this._selector.nativeElement,
      inputData: this.baD3ChartData
    });
  }

  ngOnDestroy() {
    this._chartService.removeChart(this._selector.nativeElement);
    this.resizeCheck.unsubscribe();
  }

}