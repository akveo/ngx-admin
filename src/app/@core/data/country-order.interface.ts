import { Observable } from 'rxjs';

export abstract class CountryOrderData {
  abstract getCountriesCategories(): Observable<string[]>;
  abstract getCountriesCategoriesData(country: string): Observable<number[]>;
}
