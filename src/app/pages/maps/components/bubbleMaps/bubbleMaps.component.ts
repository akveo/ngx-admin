import {Component} from '@angular/core';

import {BubbleMapsService} from './bubbleMaps.service';
import 'style-loader!./bubbleMaps.scss';

@Component({
  selector: 'bubble-maps',
  templateUrl: './bubbleMaps.html',
})
export class BubbleMaps {

  chartData:Object;

  constructor(private _bubbleMapsService:BubbleMapsService) {
  }

  ngOnInit() {
    this.chartData = this._bubbleMapsService.getData();
  }
}
