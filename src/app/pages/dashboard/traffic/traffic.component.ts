import { Component, Input } from '@angular/core';
import { NgaThemeService } from '@akveo/nga-theme';

declare const echarts: any;

const points = [300, 520, 435, 530, 730, 620, 660, 860];

const data = points.map((p, index) => ({
  label: (index % 3 === 1) ? '${index}' : '',
  value: p,
}));

@Component({
  selector: 'ngx-traffic',
  styleUrls: ['./traffic.component.scss'],
  template: `
    <div echarts [options]="option" class="echart">
    </div>
  `,
})
export class TrafficComponent {

  option = {
    grid: {
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: data.map(i => i.label),
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
          color: '#000000',
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
      backgroundColor: 'rgba(0, 255, 170, 0.35)',
      borderColor: '#00f9a6',
      borderWidth: 3,
      formatter: '{c0} MB',
      extraCssText: 'box-shadow: 0px 2px 46px 0 rgba(0, 255, 170, 0.35); border-radius: 10px;padding: 5px 20px;',
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
            color: 'rgba(146, 141, 255, 0.5)',
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
            color: 'rgba(146, 141, 255, 0.5)',
          },
        },
        data: data.map(i => i.value - 15),
      },
      {
        type: 'line',
        symbol: 'circle',
        symbolSize: 6,
        sampling: 'average',
        itemStyle: {
          normal: {
            color: '#bdbaff',
            borderColor: 'white',
            borderWidth: 2,
            shadowColor: 'rgba(33, 7, 77, 0.5)',
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
            color: '#bdbaff',
            shadowColor: 'rgb(166, 149, 255)',
            shadowBlur: 14,
          },
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: 'rgba(118, 89, 255, 0.4)',
            }, {
              offset: 1,
              color: 'rgba(164, 84, 255, 0.5)',
            }]),
          },
        },
        data: data.map(i => i.value),
      },
    ],
  };

  constructor(private theme: NgaThemeService) {
    this.theme.getConfig().subscribe(config => {

      // const option = Object.assign({}, this.option);
      //
      // option.series[0].data[1].itemStyle.normal.color = config.layoutBg;
      // option.series[0].data[0].label.normal.textStyle.color = config.colorFgHeading;
      // option.series[0].data[0].label.normal.textStyle.fontFamily = config.fontSecondary;
      //
      // this.option = option;
    });
  }
}
