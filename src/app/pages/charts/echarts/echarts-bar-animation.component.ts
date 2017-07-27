import { Component } from '@angular/core';

@Component({
  selector: 'ngx-echarts-bar-animation',
  template: `
    <div echarts [options]="options" class="echart"></div>
  `,
})
export class EchartsBarAnimationComponent {
  xAxisData = [];
  data1 = [];
  data2 = [];

  options = {
    title: {
      text: '柱状图动画延迟',
    },
    legend: {
      data: ['bar', 'bar2'],
      align: 'left',
    },
    toolbox: {
      // y: 'bottom',
      feature: {
        magicType: {
          type: ['stack', 'tiled'],
        },
        dataView: {},
        saveAsImage: {
          pixelRatio: 2,
        },
      },
    },
    tooltip: {},
    xAxis: {
      data: this.xAxisData,
      silent: false,
      splitLine: {
        show: false,
      },
    },
    yAxis: {},
    series: [
      {
        name: 'bar',
        type: 'bar',
        data: this.data1,
        animationDelay: function(idx) {
          return idx * 10;
        },
      },
      {
        name: 'bar2',
        type: 'bar',
        data: this.data2,
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

  constructor() {
    for (let i = 0; i < 100; i++) {
      this.xAxisData.push('类目' + i);
      this.data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
      this.data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
    }
  }
}
