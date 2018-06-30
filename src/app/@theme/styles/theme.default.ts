export const DEFAULT_THEME = {
  name: 'default',
  base: null,
  variables: {

    // Safari fix
    temperature: [
      '#42db7d',
      '#42db7d',
      '#42db7d',
      '#42db7d',
      '#42db7d',
    ],

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
      tooltipTextColor: '#2a2a2a',
      tooltipFontWeight: 'bolder',

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
      tooltipTextColor: '#2a2a2a',
      tooltipFontWeight: 'bolder',

      axisLineColor: 'rgba(0, 0, 0, 0)',
      xAxisTextColor: '#2a2a2a',
      yAxisSplitLine: '#ebeef2',

      itemBorderColor: '#42db7d',
      lineStyle: 'solid',
      lineWidth: '4',
      lineGradFrom: '#42db7d',
      lineGradTo: '#42db7d',
      lineShadow: 'rgba(0, 0, 0, 0)',

      areaGradFrom: 'rgba(235, 238, 242, 0.5)',
      areaGradTo: 'rgba(235, 238, 242, 0.5)',
      shadowLineDarkBg: 'rgba(0, 0, 0, 0)',
    },

    bubbleMap: {
      titleColor: '#484848',
      areaColor: '#dddddd',
      areaHoverColor: '#cccccc',
      areaBorderColor: '#ebeef2',
    },

    profitBarEchart: {
      gradientFrom: '#00d977',
      gradientTo: '#00d9bf',
      shadow: '#00bb85',
    },

    trafficBarEchart: {
      gradientFrom: '#fc0',
      gradientTo: '#ffa100',
      shadow: '#ffb600',
      textColor: '#484848',

      tooltipBg: '#ffffff',
      tooltipBorderColor: '#c0c8d1',
      tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
      tooltipTextColor: '#2a2a2a',
      tooltipFontWeight: 'bolder',

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

    // TODO: need design for default theme
    orders: {
      tooltipBg: 'rgba(0, 255, 170, 0.35)',
      tooltipLineColor: 'rgba(255, 255, 255, 0.1)',
      tooltipLineWidth: '1',
      tooltipBorderColor: '#00d977',
      tooltipExtraCss: 'box-shadow: 0px 2px 46px 0 rgba(0, 255, 170, 0.35); border-radius: 10px; padding: 8px 24px;',
      tooltipTextColor: '#ffffff',
      tooltipFontWeight: 'normal',

      axisLineColor: 'rgba(161, 161 ,229, 0.3)',
      xAxisTextColor: '#a1a1e5',
      yAxisSplitLine: 'rgba(161, 161 ,229, 0.2)',

      itemBorderColor: '#ffffff',
      lineStyle: 'solid',
      lineWidth: '6',

      // green line
      greenLineGradFrom: '#00bece',
      greenLineGradTo: '#00da78',
      greenLineShadow: 'rgba(14, 16, 48, 0.4)',

      greenAreaGradFrom: 'rgba(31 ,106, 124, 0.5)',
      greenAreaGradTo: 'rgba(4, 126, 230, 0)',
      greenShadowLineDarkBg: '#2c5a85',

      // purple line
      purpleLineGradFrom: '#8069ff',
      purpleLineGradTo: '#8357ff',
      purpleLineShadow: 'rgba(14, 16, 48, 0.4)',

      purpleAreaGradFrom: 'rgba(188, 92, 255, 0.5)',
      purpleAreaGradTo: 'rgba(188, 92, 255, 0)',
      purpleShadowLineDarkBg: '#a695ff',

      // blue line
      blueLineGradFrom: '#3bb0ff',
      blueLineGradTo: '#0089ff',
      blueLineShadow: 'rgba(14, 16, 48, 0.4)',

      blueAreaGradFrom: 'rgba(4, 126, 230, 1)',
      blueAreaGradTo: 'rgba(4, 126, 230, 0)',
      blueShadowLineDarkBg: '#018dff',
    },

    // TODO: need design for default theme
    visitors: {
      tooltipBg: 'rgba(0, 255, 170, 0.35)',
      tooltipLineColor: 'rgba(255, 255, 255, 0.1)',
      tooltipLineWidth: '1',
      tooltipBorderColor: '#00d977',
      tooltipExtraCss: 'box-shadow: 0px 2px 46px 0 rgba(0, 255, 170, 0.35); border-radius: 10px; padding: 8px 24px;',
      tooltipTextColor: '#ffffff',
      tooltipFontWeight: 'normal',

      axisLineColor: 'rgba(161, 161 ,229, 0.3)',
      xAxisTextColor: '#a1a1e5',
      yAxisSplitLine: 'rgba(161, 161 ,229, 0.2)',

      itemBorderColor: '#ffffff',
      lineStyle: 'dotted',
      lineWidth: '6',
      lineGradFrom: '#ffffff',
      lineGradTo: '#ffffff',
      lineShadow: 'rgba(14, 16, 48, 0.4)',

      areaGradFrom: 'rgba(188, 92, 255, 1)',
      areaGradTo: 'rgba(188, 92, 255, 0.5)',
      shadowLineDarkBg: '#a695ff',

      innerLineStyle: 'solid',
      innerLineWidth: '1',

      innerAreaGradFrom: 'rgba(59, 165, 243, 1)',
      innerAreaGradTo: 'rgba(4, 133, 243 , 1)',
    },

    // TODO: need design for default theme
    visitorsPie: {
      firstPieGradientLeft: '#7bff24',
      firstPieGradientRight: '#2ec7fe',
      firstPieShadowColor: '#19977E',
      firstPieRadius: ['70%', '90%'],

      secondPieGradientLeft: '#ff894a',
      secondPieGradientRight: '#ffcc10',
      secondPieShadowColor: '#cf7c1c',
      secondPieRadius: ['60%', '95%'],
    },
  },
};
