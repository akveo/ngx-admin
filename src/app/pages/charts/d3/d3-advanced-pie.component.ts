import { Component } from '@angular/core';

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
  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
  };
}
