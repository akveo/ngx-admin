import {Component} from '@angular/core';

import {BubbleMapsService} from './bubbleMaps.service';

@Component({
  selector: 'bubble-maps',
  templateUrl: './bubbleMaps.html',
  styleUrls: ['./bubbleMaps.scss']
})
export class BubbleMaps {

  chartData:Object;

  constructor(private _bubbleMapsService:BubbleMapsService) {
  }

  ngOnInit() {
    this.chartData = this._bubbleMapsService.getData();
  }
}
