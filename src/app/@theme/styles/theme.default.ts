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

      axisLineColor: 'rgba(0, 0, 0, 0)',
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
      bg: '#ffffff',
      textColor: '#484848',
      axisLineColor: '#bbbbbb',
      splitLineColor: '#ebeef2',
      itemHoverShadowColor: 'rgba(0, 0, 0, 0.5)',
      tooltipBackgroundColor: '#6a7985',
      areaOpacity: '0.7',
    },

    chartjs: {
      axisLineColor: '#cccccc',
      textColor: '#484848',
    },
  },
};
