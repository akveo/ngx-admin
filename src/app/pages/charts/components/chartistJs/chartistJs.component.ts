import {Component, ViewEncapsulation} from 'angular2/core';
import {BaCard} from '../../../../theme';

import {ChartistJsService} from "./chartistJs.service";

require('chartist');

@Component({
  selector: 'chartist-js',
  pipes: [],
  providers: [ChartistJsService],
  encapsulation: ViewEncapsulation.None,
  styles: [require('./chartistJs.scss')],
  directives: [BaCard],
  template: require('./chartistJs.html'),
})
export class ChartistJs {



  constructor(private _chartistJsService:ChartistJsService) {
  }
}
