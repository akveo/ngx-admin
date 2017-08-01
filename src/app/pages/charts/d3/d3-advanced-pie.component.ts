import { Component } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'ngx-d3-advanced-pie',
  template: `
    <ngx-charts-advanced-pie-chart
      [view]="view"
      [scheme]="colorScheme"
      [results]="single">
    </ngx-charts-advanced-pie-chart>
  `,
})
export class D3AdvancedPieComponent {
  single = [
    {
      name: 'Germany',
      value: 8940000,
    },
    {
      name: 'USA',
      value: 5000000,
    },
    {
      name: 'France',
      value: 7200000,
    },
  ];
  view: any[] = [700, 400];
  colorScheme: any;

  constructor(private theme: NbThemeService) {
    this.theme.getJsTheme().subscribe(config => {
      this.colorScheme = {
        domain: (<any>config.variables.d3).advancedPie,
      };
    });
  }
}
