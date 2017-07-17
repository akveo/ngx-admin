import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-electricity-chart',
  styleUrls: ['./electricity-chart.component.scss'],
  template: `
    <div echarts [options]='options' class='echart'></div>
  `,
})
export class ElectricityChartComponent implements OnInit {

  options: any;

  ngOnInit() {
    const points = [490, 490, 495, 500, 505, 510, 520, 530, 550, 580, 630,
      720, 800, 840, 860, 870, 870, 860, 840, 800, 720, 200, 145, 130, 130,
      145, 200, 570, 635, 660, 670, 670, 660, 630, 580, 460, 380, 350, 340,
      340, 340, 340, 340, 340, 340, 340, 340];

    const data = points.map((p, index) => ({
      label: (index % 5 === 3) ? `${Math.round(index / 5)}` : '',
      value: p,
    }));

    this.options = {
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
        backgroundColor: 'rgba(0, 255, 170, 0.35)',
        borderColor: '#00f9a6',
        borderWidth: 3,
        formatter: '{c0} kWh',
        extraCssText: 'box-shadow: 0px 2px 46px 0 rgba(0, 255, 170, 0.35); border-radius: 10px;padding: 5px 20px;',
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
            color: '#a1a1e5',
            fontSize: 18,
          },
        },
        axisLine: {
          lineStyle: {
            color: '#a1a1e5',
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
            color: '#a1a1e5',
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
                color: '#00ffaa',
              }, {
                offset: 1,
                color: '#fff835 ',
              }]),
              shadowColor: 'rgba(14, 16, 48, 0.4)',
              shadowBlur: 6,
              shadowOffsetY: 12,
            },
          },
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(188, 92, 255, 0.5)',
              }, {
                offset: 1,
                color: 'rgba(188, 92, 255, 0)',
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
                color: '#00ffaa',
              }, {
                offset: 1,
                color: '#fff835 ',
              }]),
              shadowColor: 'rgb(166, 149, 255)',
              shadowBlur: 14,
            },
          },
          data: data.map(i => i.value),
        },
      ],
    };
  }
}
