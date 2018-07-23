import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

declare const echarts: any;

@Component({
  selector: 'ngx-stats-bar-chart',
  template: `
    <div echarts [options]="options" class="echart"></div>
  `,
})
export class StatsBarChartComponent implements AfterViewInit, OnDestroy {
  options: any = {};
  themeSubscription: any;

  constructor(private theme: NbThemeService) {
  }

  ngAfterViewInit() {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const profit: any = config.variables.profitBarEchart;

      this.options = {
        backgroundColor: echarts.bg,
        xAxis: [
          {
            show: false,
          },
        ],
        yAxis: [
          {
            show: false,
          },
        ],
        series: [
          {
            type: 'bar',
            barWidth: '80%',
            data: [10, 52],
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: profit.gradientFrom,
                }, {
                  offset: 1,
                  color: profit.gradientTo,
                }]),
                opacity: 1,
                shadowColor: profit.gradientFrom,
                shadowBlur: profit.shadowBlur,
              },
            },
          },
        ],
        grid: {
          left: '20%',
          top: 0,
          right: '20%',
          bottom: '2%',
        },
      };
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
