import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-country-orders',
  styleUrls: ['./country-orders.component.scss'],
  template: `
    <nb-card size="medium">
      <nb-card-header>Country Orders Statistics</nb-card-header>
      <nb-card-body>
        <ngx-country-orders-map (select)="selectCountryById($event)"
                                countryId="USA"></ngx-country-orders-map>
        <ngx-country-orders-chart [countryName]="countryName"
                                  [data]="countryData"
                                  [labels]="countriesCategories"
                                  maxValue="20">
        </ngx-country-orders-chart>
      </nb-card-body>
    </nb-card>
  `,
})
export class CountryOrdersComponent implements OnInit {

  private defaultCountryData = [15, 11, 10, 13, 18];

  countryName: string;
  countryData: number[];

  countriesCategories = ['Sofas', 'Furniture', 'Lighting', 'Tables', 'Textiles'];

  private getRandomData(nPoints: number): number[] {
    return Array.from(Array(nPoints)).map(() => {
      return Math.round(Math.random() * 20);
    });
  }

  selectCountryById(countryName: string) {
    const nPoint = this.countryData.length;

    this.countryName = countryName;
    this.countryData = this.getRandomData(nPoint);
  }

  ngOnInit(): void {
    this.countryData = this.defaultCountryData;
    this.countryName = '';
  }
}
