import { Component } from '@angular/core';

@Component({
  selector: 'ngx-d3-pie',
  template: `
    <ngx-charts-pie-chart [view]="view" [scheme]="colorScheme" [results]="single" [legend]="showLegend"
                          [labels]="showLabels">
    </ngx-charts-pie-chart>
  `,
})
export class D3PieComponent {

  single = [{
    name: 'Germany',
    value: 8940000,
  }, {
    name: 'USA',
    value: 5000000,
  }, {
    name: 'France',
    value: 7200000,
  }];

  view: any[] = [700, 400];

  showLegend = true;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
  };

  showXAxis = true;

  showYAxis = true;

  showLabels = true;

  showXAxisLabel = true;

  xAxisLabel = 'Country';

  showYAxisLabel = true;

  yAxisLabel = 'Population';

}
