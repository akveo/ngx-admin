import { Injectable } from '@angular/core';
import { of as observableOf, Observable } from 'rxjs';

@Injectable()
export class CountryOrderService {

  private countriesCategories = [
    'Sofas',
    'Furniture',
    'Lighting',
    'Tables',
    'Textiles',
  ];
  private countriesCategoriesLength = this.countriesCategories.length;
  private generateRandomData(nPoints: number): number[] {
    return Array.from(Array(nPoints)).map(() => {
      return Math.round(Math.random() * 20);
    });
  }

  getCountriesCategories(): Observable<string[]> {
    return observableOf(this.countriesCategories);
  }

  getCountriesCategoriesData(): Observable<number[]> {
    return observableOf(this.generateRandomData(this.countriesCategoriesLength));
  }
}
