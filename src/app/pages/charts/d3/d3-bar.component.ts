import { Component } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'ngx-d3-bar',
  template: `
    <ngx-charts-bar-vertical
      [view]="view"
      [scheme]="colorScheme"
      [results]="single"
      [xAxis]="showXAxis"
      [yAxis]="showYAxis"
      [legend]="showLegend"
      [showXAxisLabel]="showXAxisLabel"
      [showYAxisLabel]="showYAxisLabel"
      [xAxisLabel]="xAxisLabel"
      [yAxisLabel]="yAxisLabel">
    </ngx-charts-bar-vertical>
  `,
})
export class D3BarComponent {
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
  showLegend = true;
  showXAxis = true;
  showYAxis = true;
  showLabels = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';
  colorScheme: any;

  constructor(private theme: NbThemeService) {
    this.theme.getJsTheme().subscribe(config => {
      this.colorScheme = {
        domain: (<any>config.variables.d3).bar,
      };
    });
  }
}
