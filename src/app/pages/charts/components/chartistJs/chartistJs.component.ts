import {Component, ViewEncapsulation} from '@angular/core';
import {BaCard} from '../../../../theme/components';

import {ChartistJsService} from './chartistJs.service';
import {BaChartistChart} from '../../../../theme/components';

@Component({
  selector: 'chartist-js',
  encapsulation: ViewEncapsulation.None,
  pipes: [],
  providers: [ChartistJsService],
  directives: [BaCard, BaChartistChart],
  styles: [require('chartist/dist/chartist.css'), require('./chartistJs.scss')],
  template: require('./chartistJs.html'),
})

export class ChartistJs {

  data:any;

  constructor(private _chartistJsService:ChartistJsService) {
  }

  ngOnInit() {
    this.data = this._chartistJsService.getAll();
  }

  getResponsive(padding, offset) {
    return this._chartistJsService.getResponsive(padding, offset);
  }
}
