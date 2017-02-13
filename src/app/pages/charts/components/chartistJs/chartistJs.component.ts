import {Component} from '@angular/core';

import {ChartistJsService} from './chartistJs.service';
import 'style-loader!./chartistJs.scss';

@Component({
  selector: 'chartist-js',
  templateUrl: './chartistJs.html',
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
