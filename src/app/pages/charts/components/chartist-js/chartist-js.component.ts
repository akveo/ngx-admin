import { Component, OnInit } from '@angular/core';

import { ChartistJsService } from './chartist-js.service';
import 'style-loader!./chartist-js.component.scss';

@Component({
  selector: 'chartist-js',
  templateUrl: './chartist-js.component.html',
})
export class ChartistJsComponent implements OnInit {

  data: any;

  constructor(private _chartistJsService: ChartistJsService) { }

  ngOnInit(): void {
    this.data = this._chartistJsService.getAll();
  }

  getResponsive(padding: number, offset: number): Array<any> {
    return this._chartistJsService.getResponsive(padding, offset);
  }
}
