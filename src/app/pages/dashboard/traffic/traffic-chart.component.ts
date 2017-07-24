import { Component } from '@angular/core';
import { NgaThemeService } from '@akveo/nga-theme';

declare const echarts: any;

const points = [300, 520, 435, 530, 730, 620, 660, 860];

@Component({
  selector: 'ngx-traffic-chart',
  styleUrls: ['./traffic.component.scss'],
  template: `
    <div echarts [options]="option" class="echart"></div>
  `,
})
export class TrafficChartComponent {

  type: string = 'month';
  types = ['week', 'month', 'year'];
  option: any = {};

  constructor(private theme: NgaThemeService) {
    this.theme.getJsTheme().subscribe(config => {

      this.option = Object.assign({}, {
        grid: {
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: points,
        },
        yAxis: {
          boundaryGap: [0, '5%'],
          axisLine: {
            show: false,
          },
          axisLabel: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: config.trafficColorBlack,
              opacity: 0.06,
              width: '1',
            },
          },
        },
        tooltip: {
          axisPointer: {
            type: 'shadow',
          },
          position: 'top',
          backgroundColor: config.trafficTooltipBg,
          borderColor: config.colorSuccess,
          borderWidth: 3,
          formatter: '{c0} MB',
          extraCssText: `box-shadow: 0px 2px 46px 0 ${config.trafficTooltipBg};border-radius: 10px;padding: 5px 20px;`,
        },
        series: [
          {
            type: 'line',
            symbol: 'circle',
            symbolSize: 8,
            sampling: 'average',
            silent: true,
            itemStyle: {
              normal: {
                color: config.trafficLineBg,
              },
              emphasis: {
                color: 'rgba(0,0,0,0)',
                borderColor: 'rgba(0,0,0,0)',
                borderWidth: 0,
              },
            },
            lineStyle: {
              normal: {
                width: 2,
                color: config.trafficLineBg,
              },
            },
            data: points.map(p => p - 15),
          },
          {
            type: 'line',
            symbol: 'circle',
            symbolSize: 6,
            sampling: 'average',
            itemStyle: {
              normal: {
                color: config.trafficShadowLineBg,
                borderColor: 'white',
                borderWidth: 2,
                shadowColor: config.trafficShadowLineShadow,
                shadowOffsetX: 0,
                shadowOffsetY: -3,
                shadowBlur: 10,
              },
              emphasis: {
                color: 'white',
                borderColor: 'rgba(0,0,0,0)',
                borderWidth: 5,
              },
            },
            lineStyle: {
              normal: {
                width: 2,
                color: config.trafficLineBg,
                shadowColor: config.trafficShadowLineDarkBg,
                shadowBlur: 14,
              },
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: config.trafficGradFrom,
                }, {
                  offset: 1,
                  color: config.trafficGradTo,
                }]),
              },
            },
            data: points,
          },
        ],
      });
    });
  }
}
