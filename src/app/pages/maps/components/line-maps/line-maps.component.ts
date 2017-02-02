import { Component, OnInit } from '@angular/core';

import { LineMapsService } from './line-maps.service';
import 'style-loader!./line-maps.component.scss';

@Component({
  selector: 'line-maps',
  templateUrl: './line-maps.component.html'
})
export class LineMapsComponent implements OnInit {

  chartData: any;

  constructor(private _lineMapsService: LineMapsService) { }

  ngOnInit(): void {
    this.chartData = this._lineMapsService.getData();
  }

}
