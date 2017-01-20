import {Component} from '@angular/core';

import {LineMapsService} from './lineMaps.service';
import 'style-loader!./lineMaps.scss';

@Component({
  selector: 'line-maps',
  templateUrl: './lineMaps.html'
})
export class LineMaps {

  chartData:Object;

  constructor(private _lineMapsService:LineMapsService) {
    this.chartData = this._lineMapsService.getData();
  }
}
