export const DEFAULT_THEME = {
  name: 'default',
  base: null,
  variables: {

    temperature: ['#42db7d'],

    solar: {
      gradientLeft: '#42db7d',
      gradientRight: '#42db7d',
      shadowColor: 'rgba(0, 0, 0, 0)',
      radius: ['80%', '90%'],
    },

    traffic: {
      colorBlack: '#000000',
      tooltipBg: '#ffffff',
      tooltipBorderColor: '#c0c8d1',
      tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
      tooltipTextColor: '#222222',
      lineBg: '#c0c8d1',
      lineShadowBlur: '1',
      itemColor: '#bcc3cc',
      itemBorderColor: '#bcc3cc',
      itemEmphasisBorderColor: '#42db7d',
      shadowLineDarkBg: 'rgba(0, 0, 0, 0)',
      shadowLineShadow: 'rgba(0, 0, 0, 0)',
      gradFrom: '#ebeef2',
      gradTo: '#ebeef2',
    },

    electricity: {
      tooltipBg: '#ffffff',
      tooltipLineColor: 'rgba(0, 0, 0, 0)',
      tooltipLineWidth: '0',
      tooltipBorderColor: '#ebeef2',
      tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
      tooltipTextColor: '#222222',

      xAxisColor: 'rgba(0, 0, 0, 0)',
      xAxisTextColor: '#222222',
      yAxisSplitLine: '#ebeef2',

      itemBorderColor: '#42db7d',
      lineStyle: 'solid',
      lineWidth: '4',
      lineGradFrom: '#42db7d',
      lineGradTo: '#42db7d',
      lineShadow: 'rgba(0, 0, 0, 0)',

      areaGradFrom: '#ebeef2',
      areaGradTo: '#ebeef2',
      shadowLineDarkBg: 'rgba(0, 0, 0, 0)',
    },

    bubbleMap: {
      titleColor: '#ffffff',
      geoColors: ['#e6b045', '#0088ff', '#ff386a', '#00d977', '#7659ff', '#24dec8'],
      areaColor: '#2c2961',
      areaHoverColor: '#a1a1e5',
      areaBorderColor: '#654ddb',
    },

    echarts: {
      bg: '#363175',
      legendTextColor: 'white',
      xAxisLineColor: 'white',
      yAxisLineColor: 'white',

      pie: {
        colors: [
          'rgb(168, 56, 93)',
          'rgb(122, 163, 229)',
          'rgb(170, 227, 245)',
          'rgb(173, 205, 237)',
          'rgb(162, 126, 168)',
        ],
        itemHoverShadowColor: 'rgba(0, 0, 0, 0.5)',
      },

      bar: {
        color: '#3398DB',
      },

      barAnimation: {
        colors: ['red', 'white'],
      },

      line: {
        colors: ['red', 'black', 'white'],
      },

      multipleLine: {
        colors: ['#5793f3', '#d14a61', '#675bba'],
      },

      areaStack: {
        colors: ['red', 'blue', 'purple', 'yellow', 'pink'],
        tooltipBackgroundColor: '#6a7985',
      },

      radar: {
        colors: ['red', 'white'],
        nameTextColor: 'white',
        splitAreaStyleColor: 'transparent',
      },
    },

    chartjs: {
      xAxisColor: 'rgba(148,159,177,1)',
      yAxisColor: 'rgba(148,159,177,1)',
      tickColor: 'white',
      legendTextColor: 'white',

      barHorizontal: {
        colors: ['red', 'blue'],
      },

      radar: {
        colors: ['red', 'blue'],
        scaleGridLinesColor: 'white',
        scaleAngleLinesColor: 'white',
        pointLabelFontColor: 'white',
      },
    },

    d3: {
      pie: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
      bar: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
      line: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
      advancedPie: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
      areaStack: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
      polar: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
    },
  },
};
