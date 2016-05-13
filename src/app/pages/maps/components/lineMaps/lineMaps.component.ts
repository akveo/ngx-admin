import {Component, ViewEncapsulation} from '@angular/core';
import {BaCard, BaAmChart} from '../../../../theme/components';

import {LineMapsService} from "./lineMaps.service";

@Component({
  selector: 'line-maps',
  pipes: [],
  providers: [LineMapsService],
  encapsulation: ViewEncapsulation.None,
  styles: [require('ammap3/ammap/ammap.css'), require('./lineMaps.scss')],
  directives: [BaCard, BaAmChart],
  template: require('./lineMaps.html'),
})
export class LineMaps {

  chartData:Object;

  constructor(private _lineMapsService:LineMapsService) {
    this.chartData = this._lineMapsService.getData();
  }
}
