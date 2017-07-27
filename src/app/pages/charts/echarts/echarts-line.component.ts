import { Component } from '@angular/core';
import { NgaThemeService } from '@akveo/nga-theme';

@Component({
  selector: 'ngx-echarts-line',
  template: `
    <div echarts [options]="options" class="echart"></div>
  `,
})
export class EchartsLineComponent {
  options: any;

  constructor(private theme: NgaThemeService) {
    this.theme.getJsTheme().subscribe(config => {
      this.options = {
        backgroundColor: config.echartsBackgroundColor,
        color: [config.echartsLineColor1, config.echartsLineColor2, config.echartsLineColor3],
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c}',
        },
        legend: {
          left: 'left',
          data: ['Line 1', 'Line 2', 'Line 3'],
          textStyle: {
            color: config.echartsLineLegendTextColor,
          },
        },
        xAxis: {
          type: 'category',
          name: 'x',
          splitLine: { show: false },
          data: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
          axisLine: {
            lineStyle: {
              color: config.echartsLineXAxisLineColor,
            },
          },
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        yAxis: {
          type: 'log',
          name: 'y',
          axisLine: {
            lineStyle: {
              color: config.echartsLineYAxisLineColor,
            },
          },
        },
        series: [
          {
            name: 'Line 1',
            type: 'line',
            data: [1, 3, 9, 27, 81, 247, 741, 2223, 6669],
          },
          {
            name: 'Line 2',
            type: 'line',
            data: [1, 2, 4, 8, 16, 32, 64, 128, 256],
          },
          {
            name: 'Line 3',
            type: 'line',
            data: [1 / 2, 1 / 4, 1 / 8, 1 / 16, 1 / 32, 1 / 64, 1 / 128, 1 / 256, 1 / 512],
          },
        ],
      };
    });
  }
}
