import { Component } from '@angular/core';

@Component({
  selector: 'ngx-echarts-pie',
  template: `
    <div echarts [options]="pieChartOptions" class="echart"></div>|
  `,
})
export class EchartsPieComponent {

  pieChartOptions = {

    color: ['rgb(168, 56, 93)', 'rgb(122, 163, 229)', 'rgb(170, 227, 245)', 'rgb(173, 205, 237)', 'rgb(162, 126, 168)'],

    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)',
    },

    legend: {
      orient: 'vertical',
      left: 'left',
      data: ['USA', 'Germany', 'France', 'Canada', 'Russia'],
      textStyle: {
        color: 'white',
      },
    },

    series: [{
      name: 'Countries',
      type: 'pie',
      radius: '55%',
      center: ['50%', '60%'],
      data: [{
        value: 335,
        name: 'Germany',
      }, {
        value: 310,
        name: 'France',
      }, {
        value: 234,
        name: 'Canada',
      }, {
        value: 135,
        name: 'Russia',
      }, {
        value: 1548,
        name: 'USA',
      }],

      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
        },
      },
    }],
  };

}
