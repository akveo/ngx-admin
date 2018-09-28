import { Component, OnDestroy } from '@angular/core';
import { NbMediaBreakpoint, NbMediaBreakpointsService, NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'ngx-country-orders',
  styleUrls: ['./country-orders.component.scss'],
  template: `
    <nb-card [size]="breakpoint.width >= breakpoints.md ? 'medium' : 'xxlarge'">
      <nb-card-header>Country Orders Statistics</nb-card-header>
      <nb-card-body>
        <ngx-country-orders-map (select)="selectCountryById($event)"
                                countryId="USA">
        </ngx-country-orders-map>
        <ngx-country-orders-chart [countryName]="countryName"
                                  [data]="countryData"
                                  [labels]="countriesCategories"
                                  maxValue="20">
        </ngx-country-orders-chart>
      </nb-card-body>
    </nb-card>
  `,
})
export class CountryOrdersComponent implements OnDestroy {

  private alive = true;

  private getRandomData(nPoints: number): number[] {
    return Array.from(Array(nPoints)).map(() => {
      return Math.round(Math.random() * 20);
    });
  }

  countryName = '';
  countryData = [];
  countriesCategories = ['Sofas', 'Furniture', 'Lighting', 'Tables', 'Textiles'];
  breakpoint: NbMediaBreakpoint = { name: '', width: 0 };
  breakpoints: any;

  constructor(private themeService: NbThemeService,
              private breakpointService: NbMediaBreakpointsService) {
    this.breakpoints = this.breakpointService.getBreakpointsMap();
    this.themeService.onMediaQueryChange()
      .pipe(takeWhile(() => this.alive))
      .subscribe(([oldValue, newValue]) => {
        this.breakpoint = newValue;
      });
  }

  selectCountryById(countryName: string) {
    const nPoint = this.countriesCategories.length;

    this.countryName = countryName;
    this.countryData = this.getRandomData(nPoint);
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
