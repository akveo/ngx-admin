import { Component } from '@angular/core';

@Component({
  selector: 'ngx-echarts',
  styleUrls: ['./echarts.component.scss'],
  templateUrl: './echarts.component.html',
})
export class EchartsComponent {

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

  barChartOptions = {

    color: ['#3398DB'],

    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },

    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },

    xAxis: [{
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      axisTick: {
        alignWithLabel: true,
      },
      axisLine: {
        lineStyle: {
          color: 'white',
        },
      },
    }],

    yAxis: [{
      type: 'value',
      axisLine: {
        lineStyle: {
          color: 'white',
        },
      },
    }],

    series: [{
      name: 'Score',
      type: 'bar',
      barWidth: '60%',
      data: [10, 52, 200, 334, 390, 330, 220],
    }],
  };

  lineChartOptions = {

    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c}',
    },

    legend: {
      left: 'left',
      data: ['Line 1', 'Line 2', 'Line 3'],
      textStyle: {
        color: 'white',
      },
    },

    xAxis: {
      type: 'category',
      name: 'x',
      splitLine: { show: false },
      data: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
      axisLine: {
        lineStyle: {
          color: 'white',
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
          color: 'white',
        },
      },
    },

    series: [{
      name: 'Line 1',
      type: 'line',
      data: [1, 3, 9, 27, 81, 247, 741, 2223, 6669],
    }, {
      name: 'Line 2',
      type: 'line',
      data: [1, 2, 4, 8, 16, 32, 64, 128, 256],
    }, {
      name: 'Line 3',
      type: 'line',
      data: [1 / 2, 1 / 4, 1 / 8, 1 / 16, 1 / 32, 1 / 64, 1 / 128, 1 / 256, 1 / 512],
    }],
  };

}
