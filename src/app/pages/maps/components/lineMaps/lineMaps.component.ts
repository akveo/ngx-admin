import {Component} from '@angular/core';

import {LineMapsService} from './lineMaps.service';

@Component({
  selector: 'line-maps',
  templateUrl: './lineMaps.html',
  styleUrls: ['./lineMaps.scss']
})
export class LineMaps {

  chartData:Object;

  constructor(private _lineMapsService:LineMapsService) {
    this.chartData = this._lineMapsService.getData();
  }
}
