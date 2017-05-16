import { Component } from '@angular/core';

@Component({
  selector: 'ngx-d3-line',
  template: `
    <ngx-charts-line-chart
      [view]="view"
      [scheme]="colorScheme"
      [results]="multi"
      [xAxis]="showXAxis"
      [yAxis]="showYAxis"
      [legend]="showLegend"
      [showXAxisLabel]="showXAxisLabel"
      [showYAxisLabel]="showYAxisLabel"
      [xAxisLabel]="xAxisLabel"
      [yAxisLabel]="yAxisLabel">
    </ngx-charts-line-chart>
  `,
})
export class D3LineComponent {

  multi = [{
    name: 'Germany',
    series: [{
      name: '2010',
      value: 7300000,
    }, {
      name: '2011',
      value: 8940000,
    }],
  }, {
    name: 'USA',
    series: [{
      name: '2010',
      value: 7870000,
    }, {
      name: '2011',
      value: 8270000,
    }],
  }, {
    name: 'France',
    series: [{
      name: '2010',
      value: 5000002,
    }, {
      name: '2011',
      value: 5800000,
    }],
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
