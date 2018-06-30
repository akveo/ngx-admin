import {Component} from '@angular/core';

import {NgdLEgendItemColor} from '../legend-chart/enum.legend-item-color';

@Component({
  selector: 'ngx-ec-visitors-analytics',
  styleUrls: ['./visitors-analytics.component.scss'],
  templateUrl: './visitors-analytics.component.html',
})
export class EcVisitorsAnalyticsComponent {
  chartLegend = [
    {
      iconColor: NgdLEgendItemColor.BLUE,
      title: 'Unique Visitors',
    },
    {
      iconColor: NgdLEgendItemColor.PURPLE,
      title: 'Page Views',
    },
  ];
}
