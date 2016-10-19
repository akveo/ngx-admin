import {Component, ViewEncapsulation} from '@angular/core';

import {BubbleMapsService} from './bubbleMaps.service';

@Component({
  selector: 'bubble-maps',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./bubbleMaps.scss')],
  template: require('./bubbleMaps.html'),
})
export class BubbleMaps {

  chartData:Object;

  constructor(private _bubbleMapsService:BubbleMapsService) {
  }

  ngOnInit() {
    this.chartData = this._bubbleMapsService.getData();
  }
}
