import {Component, ViewEncapsulation} from '@angular/core';

import {LineMapsService} from './lineMaps.service';

@Component({
  selector: 'line-maps',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./lineMaps.scss')],
  template: require('./lineMaps.html')
})
export class LineMaps {

  chartData:Object;

  constructor(private _lineMapsService:LineMapsService) {
    this.chartData = this._lineMapsService.getData();
  }
}
