import { Component, OnInit } from '@angular/core';

import { BubbleMapsService } from './bubble-maps.service';
import 'style-loader!./bubble-maps.component.scss';

@Component({
  selector: 'bubble-maps',
  templateUrl: './bubble-maps.component.html',
})
export class BubbleMapsComponent implements OnInit {

  chartData: any;

  constructor(private _bubbleMapsService: BubbleMapsService) { }

  ngOnInit(): void {
    this.chartData = this._bubbleMapsService.getData();
  }

}
