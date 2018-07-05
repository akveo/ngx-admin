import { Component, Input } from '@angular/core';

import { NgdLEgendItemColor } from './enum.legend-item-color';

@Component({
  selector: 'ngx-legend-chart',
  styleUrls: ['./legend-chart.component.scss'],
  templateUrl: './legend-chart.component.html',
})
export class EcLegendChartComponent {

  /**
   * Take an array of legend items
   * Available iconColor: 'green', 'purple', 'blue', 'yellow'
   * @type {{iconColor: string; title: string}[]}
   */
  @Input()
  legendItems: {iconColor: NgdLEgendItemColor; title: string}[];
}
