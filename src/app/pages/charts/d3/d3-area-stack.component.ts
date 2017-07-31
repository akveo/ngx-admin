import { Component } from '@angular/core';
import { NgaThemeService } from '@akveo/nga-theme';

@Component({
  selector: 'ngx-d3-area-stack',
  template: `
    <ngx-charts-area-chart
      [view]="view"
      [scheme]="colorScheme"
      [results]="multi"
      [xAxis]="showXAxis"
      [yAxis]="showYAxis"
      [legend]="showLegend"
      [showXAxisLabel]="showXAxisLabel"
      [showYAxisLabel]="showYAxisLabel"
      [xAxisLabel]="xAxisLabel"
      [yAxisLabel]="yAxisLabel"
      [autoScale]="autoScale">
    </ngx-charts-area-chart>
  `,
})
export class D3AreaStackComponent {
  multi = [
    {
      name: 'Germany',
      series: [
        {
          name: '2010',
          value: 7300000,
        },
        {
          name: '2011',
          value: 8940000,
        },
      ],
    },

    {
      name: 'USA',
      series: [
        {
          name: '2010',
          value: 7870000,
        },
        {
          name: '2011',
          value: 8270000,
        },
      ],
    },

    {
      name: 'France',
      series: [
        {
          name: '2010',
          value: 5000002,
        },
        {
          name: '2011',
          value: 5800000,
        },
      ],
    },
  ];
  view: any[] = [700, 400];
  showLegend = true;
  autoScale = true;
  showXAxis = true;
  showYAxis = true;
  showXAxisLabel = true;
  showYAxisLabel = true;
  xAxisLabel = 'Country';
  yAxisLabel = 'Population';
  colorScheme: any;

  constructor(private theme: NgaThemeService) {
    this.theme.getJsTheme().subscribe(config => {
      this.colorScheme = {
        domain: [
          config.d3AreaStackColor1,
          config.d3AreaStackColor2,
          config.d3AreaStackColor3,
          config.d3AreaStackColor4,
        ],
      };
    });
  }
}
