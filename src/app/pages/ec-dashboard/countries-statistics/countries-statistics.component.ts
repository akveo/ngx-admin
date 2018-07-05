import { Component } from '@angular/core';

@Component({
  selector: 'ngx-countries-statistics',
  styleUrls: ['./countries-statistics.component.scss'],
  template: `
    <nb-card size="medium">
      <nb-card-header>Countries Statistics</nb-card-header>
      <nb-card-body>
        <ngx-ec-map></ngx-ec-map>
        <ngx-ec-map-chart></ngx-ec-map-chart>
      </nb-card-body>
    </nb-card>
  `,
})
export class CountriesStatisticsComponent {
}
