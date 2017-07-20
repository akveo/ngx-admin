import { Component, OnInit } from '@angular/core';
import { NgaThemeService } from '@akveo/nga-theme';

declare const echarts: any;

@Component({
  selector: 'ngx-electricity-chart',
  styleUrls: ['./electricity-chart.component.scss'],
  template: `
    <div echarts [options]="option" class="echart"></div>
  `,
})
export class ElectricityChartComponent {

  option: any;

  constructor(private theme: NgaThemeService) {

    const points = [490, 490, 495, 500, 505, 510, 520, 530, 550, 580, 630,
      720, 800, 840, 860, 870, 870, 860, 840, 800, 720, 200, 145, 130, 130,
      145, 200, 570, 635, 660, 670, 670, 660, 630, 580, 460, 380, 350, 340,
      340, 340, 340, 340, 340, 340, 340, 340];

    const data = points.map((p, index) => ({
      label: (index % 5 === 3) ? `${Math.round(index / 5)}` : '',
      value: p,
    }));

    this.theme.getJsTheme().subscribe(config => {
      this.option = {
        grid: {
          left: 0,
          top: 0,
          right: 0,
          bottom: 80,
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'line',
            lineStyle: {
              color: 'rgba(255, 255, 255, 0.1)',
            },
          },
          position: 'top',
          backgroundColor: config.trafficTooltipBg,
          borderColor: config.colorSuccess,
          borderWidth: 3,
          formatter: '{c0} kWh',
          extraCssText: `box-shadow: 0px 2px 46px 0 ${config.trafficTooltipBg};border-radius: 10px;padding: 5px 20px;`,
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          offset: 25,
          data: data.map(i => i.label),
          axisTick: {
            show: false,
          },
          axisLabel: {
            textStyle: {
              color: config.electricityAxisColor,
              fontSize: 18,
            },
          },
          axisLine: {
            lineStyle: {
              color: config.electricityAxisColor,
              opacity: 0.3,
              width: '2',
            },
          },
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
              color: config.electricityAxisColor,
              opacity: 0.2,
              width: '1',
            },
          },
        },
        series: [
          {
            type: 'line',
            smooth: true,
            symbolSize: 20,
            itemStyle: {
              normal: {
                opacity: 0,
              },
              emphasis: {
                color: 'white',
                borderWidth: 0,
                opacity: 1,
              },
            },
            lineStyle: {
              normal: {
                width: 6,
                type: 'dotted',
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: config.electricityLineGradFrom,
                }, {
                  offset: 1,
                  color: config.electricityLineGradTo,
                }]),
                shadowColor: config.electricityLineShadow,
                shadowBlur: 6,
                shadowOffsetY: 12,
              },
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: config.electricityAreaGradFrom,
                }, {
                  offset: 1,
                  color: config.electricityAreaGradTo,
                }]),
              },
            },
            data: data.map(i => i.value),
          },

          {
            type: 'line',
            smooth: true,
            symbol: 'none',
            lineStyle: {
              normal: {
                width: 6,
                type: 'dotted',
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: config.electricityLineGradFrom,
                }, {
                  offset: 1,
                  color: config.electricityLineGradTo,
                }]),
                shadowColor: config.trafficShadowLineDarkBg,
                shadowBlur: 14,
              },
            },
            data: data.map(i => i.value),
          },
        ],
      };
    });
  }
}
