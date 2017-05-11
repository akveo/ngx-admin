import { Component } from '@angular/core';

@Component({
  selector: 'ngx-d3',
  templateUrl: './d3.component.html',
})
export class D3Component {

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
