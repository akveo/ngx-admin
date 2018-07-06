import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-countries-statistics',
  styleUrls: ['./countries-statistics.component.scss'],
  template: `
    <nb-card size="medium">
      <nb-card-header>Countries Statistics</nb-card-header>
      <nb-card-body>
        <ngx-ec-map (select)="selectCountryById($event)"></ngx-ec-map>
        <ngx-ec-map-chart [countryName]="countryName"
                          [data]="countryData.data"
                          [labels]="countryData.categories"
                          maxValue="20">
        </ngx-ec-map-chart>
      </nb-card-body>
    </nb-card>
  `,
})
export class CountriesStatisticsComponent implements OnInit {

  countryData;
  countryName: string;

  countriesData = [{
    id: 'USA',
    categories: ['food', 'phones', 'cars', 'games', 'tvs'],
    data: [6, 8, 9, 3, 5]
  }, {
    id: 'CAN',
    categories: ['food', 'phones', 'cars', 'games', 'tvs'],
    data: [2, 6, 7, 6, 8]
  }];

  selectCountryById(country) {
    this.resetCountryData();
    this.countryName = country.name;

    this.countriesData.forEach((c) => {
      if (c.id === country.id) {
        this.countryData = c;
      }
    })
  }

  private resetCountryData() {
    this.countryData = {
      id: '',
      categories: ['food', 'phones', 'cars', 'games', 'tvs'],
      data: [0, 0, 0, 0, 0]
    }
  }

  ngOnInit(): void {
    this.countryData = this.countriesData[0];
    this.countryName = 'CANADA';
  }
}
