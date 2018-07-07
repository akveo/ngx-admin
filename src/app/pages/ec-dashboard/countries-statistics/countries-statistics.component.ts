import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-countries-statistics',
  styleUrls: ['./countries-statistics.component.scss'],
  template: `
    <nb-card size="medium">
      <nb-card-header>Countries Statistics</nb-card-header>
      <nb-card-body>
        <ngx-ec-map (select)="selectCountryById($event)"
                    countryId="USA"></ngx-ec-map>
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

  countryName: string;
  countryData;

  countriesData = [{
    id: 'USA',
    categories: ['Sofas', 'Furniture', 'Lighting', 'Tables', 'Textiles'],
    data: [15, 11, 10, 13, 18],
  }, {
    id: 'CAN',
    categories: ['Sofas', 'Furniture', 'Lighting', 'Tables', 'Textiles'],
    data: [11, 18, 13, 10, 15],
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
      categories: ['Sofas', 'Furniture', 'Lighting', 'Tables', 'Textiles'],
      data: [0, 0, 0, 0, 0],
    }
  }

  ngOnInit(): void {
    this.countryData = this.countriesData[0];
    this.countryName = '';
  }
}
