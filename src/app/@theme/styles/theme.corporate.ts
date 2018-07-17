export const CORPORATE_THEME = {
  name: 'corporate',
  base: 'default',
  variables: {
    temperature: [
      '#ffa36b',
      '#ffa36b',
      '#ff9e7a',
      '#ff9888',
      '#ff8ea0',
    ],

    solar: {
      gradientLeft: '#ff8ea0',
      gradientRight: '#ffa36b',
      shadowColor: 'rgba(0, 0, 0, 0)',
      radius: ['80%', '90%'],
    },

    traffic: {
      colorBlack: '#000000',
      tooltipBg: '#eef2f5',
      tooltipBorderColor: '#eef2f5',
      tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
      tooltipTextColor: '#2a2a2a',
      tooltipFontWeight: '400',

      lineBg: '#c0c8d1',
      lineShadowBlur: '0',
      itemColor: '#bcc3cc',
      itemBorderColor: '#bcc3cc',
      itemEmphasisBorderColor: '#74a2ff',
      shadowLineDarkBg: 'rgba(0, 0, 0, 0)',
      shadowLineShadow: 'rgba(0, 0, 0, 0)',
      gradFrom: '#ffffff',
      gradTo: '#ffffff',
    },

    electricity: {
      tooltipBg: '#edf0f4',
      tooltipLineColor: '#bdc4cd',
      tooltipLineWidth: '0',
      tooltipBorderColor: '#ebeef2',
      tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
      tooltipTextColor: '#2a2a2a',
      tooltipFontWeight: 'bolder',

      axisLineColor: 'rgba(0, 0, 0, 0)',
      xAxisTextColor: '#2a2a2a',
      yAxisSplitLine: '#ebeef2',

      itemBorderColor: '#73a1ff',
      lineStyle: 'solid',
      lineWidth: '4',
      lineGradFrom: '#bdc4cd',
      lineGradTo: '#c0c8d1',
      lineShadow: 'rgba(0, 0, 0, 0)',

      areaGradFrom: 'rgba(255, 255, 255, 0)',
      areaGradTo: 'rgba(255, 255, 255, 0)',
      shadowLineDarkBg: 'rgba(255, 255, 255, 0)',
    },

    bubbleMap: {
      titleColor: '#484848',
      areaColor: '#dddddd',
      areaHoverColor: '#cccccc',
      areaBorderColor: '#ebeef2',
    },

    trafficBarEchart: {
      gradientFrom: '#bdc4cd',
      gradientTo: '#c0c8d1',
      shadow: 'rgba(0, 0, 0, 0)',
      textColor: '#2a2a2a',

      axisTextColor: '#2a2a2a',
      axisFontSize: '12',

      tooltipBg: '#edf0f4',
      tooltipBorderColor: '#ebeef2',
      tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
      tooltipTextColor: '#2a2a2a',
      tooltipFontWeight: 'bolder',
    },

    countryOrders: {
      countryBorderColor: '#40dc7e',
      countryFillColor: '#ffffff',
      countryBorderWidth: '1',
      hoveredCountryBorderColor: '#40dc7e',
      hoveredCountryFillColor: '#c7f4d9',
      hoveredCountryBorderWidth: '3',

      chartAxisLineColor: 'rgba(0, 0, 0, 0)',
      chartAxisTextColor: '#b2bac2',
      chartAxisFontSize: '16',
      chartGradientTo: '#3edd81',
      chartGradientFrom: '#3bddaf',
      chartAxisSplitLine: '#ebeef2',
      chartShadowLineColor: '#2f296b',

      chartLineBottomShadowColor: '#eceff4',

      chartInnerLineColor: '#eceff4',
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

    // TODO: need design for corporate theme
    orders: {
      tooltipBg: '#ffffff',
      tooltipLineColor: 'rgba(0, 0, 0, 0)',
      tooltipLineWidth: '0',
      tooltipBorderColor: '#ebeef2',
      tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
      tooltipTextColor: '#2a2a2a',
      tooltipFontWeight: 'bolder',
      tooltipFontSize: '20',

      axisLineColor: 'rgba(161, 161 ,229, 0.3)',
      axisFontSize: '16',
      axisTextColor: '#b2bac2',
      yAxisSplitLine: 'rgba(161, 161 ,229, 0.2)',

      itemBorderColor: '#42db7d',
      lineStyle: 'solid',
      lineWidth: '4',

      // first line
      firstLineGradFrom: 'rgba(55, 220, 136, 1)',
      firstLineGradTo: 'rgba(55, 220, 136, 1)',
      firstLineShadow: 'rgba(0, 0, 0, 0)',

      firstAreaGradFrom: 'rgba(31 ,106, 124, 0.1)',
      firstAreaGradTo: 'rgba(4, 126, 230, 0)',
      firstShadowLineDarkBg: 'rgba(0, 0, 0, 0)',

      // second line
      secondLineGradFrom: 'rgba(164, 123, 255, 1)',
      secondLineGradTo: 'rgba(164, 123, 255, 1)',
      secondLineShadow: 'rgba(0, 0, 0, 0)',

      secondAreaGradFrom: 'rgba(188, 92, 255, 0.1)',
      secondAreaGradTo: 'rgba(188, 92, 255, 0)',
      secondShadowLineDarkBg: 'rgba(0, 0, 0, 0)',

      // third line
      thirdLineGradFrom: 'rgba(67, 190, 255, 1)',
      thirdLineGradTo: 'rgba(67, 190, 255, 1)',
      thirdLineShadow: 'rgba(0, 0, 0, 0)',

      thirdAreaGradFrom: 'rgba(4, 126, 230, 0.1)',
      thirdAreaGradTo: 'rgba(4, 126, 230, 0)',
      thirdShadowLineDarkBg: 'rgba(0, 0, 0, 0)',
    },

    // TODO: need design for default theme
    profit: {
      bg: '#ffffff',
      textColor: '#ffffff',
      axisLineColor: 'rgba(161, 161 ,229, 0.3)',
      splitLineColor: 'rgba(161, 161 ,229, 0.2)',
      areaOpacity: '1',

      axisFontSize: '16',
      axisTextColor: '#b2bac2',

      // green bar
      greenLineGradFrom: '#00bece',
      greenLineGradTo: '#00da78',
      greenLineShadow: 'rgba(14, 16, 48, 0.4)',

      // purple bar
      purpleLineGradFrom: '#8069ff',
      purpleLineGradTo: '#8357ff',
      purpleLineShadow: 'rgba(14, 16, 48, 0.4)',

      // blue bar
      blueLineGradFrom: '#3bb0ff',
      blueLineGradTo: '#0089ff',
      blueLineShadow: 'rgba(14, 16, 48, 0.4)',
    },

    // TODO: need design for default theme
    visitors: {
      tooltipBg: '#ffffff',
      tooltipLineColor: 'rgba(0, 0, 0, 0)',
      tooltipLineWidth: '0',
      tooltipBorderColor: '#ebeef2',
      tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
      tooltipTextColor: '#2a2a2a',
      tooltipFontWeight: 'bolder',
      tooltipFontSize: '20',

      axisLineColor: 'rgba(161, 161 ,229, 0.3)',
      axisFontSize: '16',
      axisTextColor: '#b2bac2',
      yAxisSplitLine: 'rgba(161, 161 ,229, 0.2)',

      itemBorderColor: '#42db7d',
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

      innerAreaGradFrom: 'rgba(60, 221, 156, 1)',
      innerAreaGradTo: 'rgba(60, 221, 156, 1)',
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
