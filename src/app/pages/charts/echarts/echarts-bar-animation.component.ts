import { Component } from '@angular/core';
import { NgaThemeService } from '@akveo/nga-theme';

@Component({
  selector: 'ngx-echarts-bar-animation',
  template: `
    <div echarts [options]="options" class="echart"></div>
  `,
})
export class EchartsBarAnimationComponent {
  options: any;

  constructor(private theme: NgaThemeService) {
    this.theme.getJsTheme().subscribe(config => {
      const xAxisData = [];
      const data1 = [];
      const data2 = [];

      this.options = {
        backgroundColor: config.echartsBackgroundColor,
        color: [config.echartsBarAnimationColor1, config.echartsBarAnimationColor2],
        legend: {
          data: ['bar', 'bar2'],
          align: 'left',
          textStyle: {
            color: config.echartsBarAnimationLegendTextColor,
          },
        },
        xAxis: {
          data: xAxisData,
          silent: false,
          splitLine: {
            show: false,
          },
          axisLine: {
            lineStyle: {
              color: config.echartsBarAnimationXAxisLineColor,
            },
          },
        },
        yAxis: {
          axisLine: {
            lineStyle: {
              color: config.echartsBarAnimationYAxisLineColor,
            },
          },
        },
        series: [
          {
            name: 'bar',
            type: 'bar',
            data: data1,
            animationDelay: function(idx) {
              return idx * 10;
            },
          },
          {
            name: 'bar2',
            type: 'bar',
            data: data2,
            animationDelay: function(idx) {
              return idx * 10 + 100;
            },
          },
        ],
        animationEasing: 'elasticOut',
        animationDelayUpdate: function(idx) {
          return idx * 5;
        },
      };

      for (let i = 0; i < 100; i++) {
        xAxisData.push('Category ' + i);
        data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
        data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
      }
    });
  }
}
