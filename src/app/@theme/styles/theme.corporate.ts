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
      colorBlack: '#ffffff',
      tooltipBg: '#eef2f5',
      tooltipBorderColor: '#eef2f5',
      tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
      tooltipTextColor: '#2a2a2a',
      tooltipFontWeight: '400',

      lineBg: '#cae6f3',
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

    profitBarAnimationEchart: {
      textColor: '#b2bac2',

      firstAnimationBarColor: '#719efc',
      secondAnimationBarColor: '#5dcfe3',

      splitLineStyleOpacity: '0.06',
      splitLineStyleWidth: '1',
      splitLineStyleColor: '#000000',

      tooltipTextColor: '#2a2a2a',
      tooltipFontWeight: '400',
      tooltipFontSize: '16',
      tooltipBg: '#eef2f5',
      tooltipBorderColor: '#eef2f5',
      tooltipBorderWidth: '3',
      tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
    },

    trafficBarEchart: {
      gradientFrom: '#ff8ea0',
      gradientTo: '#ffa36b',
      shadow: 'rgba(0, 0, 0, 0)',
      shadowBlur: '0',

      axisTextColor: '#b2bac2',
      axisFontSize: '12',

      tooltipBg: '#edf0f4',
      tooltipBorderColor: '#ebeef2',
      tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
      tooltipTextColor: '#2a2a2a',
      tooltipFontWeight: 'bolder',
    },

    countryOrders: {
      countryBorderColor: 'rgba(255, 255, 255, 1)',
      countryFillColor: 'rgba(236, 242, 245, 1)',
      countryBorderWidth: '1',
      hoveredCountryBorderColor: 'rgba(113, 158, 252, 1)',
      hoveredCountryFillColor: 'rgba(199, 216, 247, 1)',
      hoveredCountryBorderWidth: '3',

      chartAxisLineColor: 'rgba(0, 0, 0, 0)',
      chartAxisTextColor: '#b2bac2',
      chartAxisFontSize: '16',
      chartGradientTo: 'rgba(113, 158, 252, 1)',
      chartGradientFrom: 'rgba(113, 158, 252, 1)',
      chartAxisSplitLine: '#ebeef2',
      chartShadowLineColor: '#2f296b',

      chartLineBottomShadowColor: 'rgba(113, 158, 252, 1)',

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

      itemBorderColor: '#73a1ff',
      lineStyle: 'solid',
      lineWidth: '4',

      // first line
      firstAreaGradFrom: 'rgba(227, 236, 254, 0.7)',
      firstAreaGradTo: 'rgba(227, 236, 254, 0.7)',
      firstShadowLineDarkBg: 'rgba(0, 0, 0, 0)',

      // second line
      secondLineGradFrom: 'rgba(93, 207, 227, 1)',
      secondLineGradTo: 'rgba(93, 207, 227, 1)',

      secondAreaGradFrom: 'rgba(0, 0, 0, 0)',
      secondAreaGradTo: 'rgba(0, 0, 0, 0)',
      secondShadowLineDarkBg: 'rgba(0, 0, 0, 0)',

      // third line
      thirdLineGradFrom: 'rgba(113, 158, 252, 1)',
      thirdLineGradTo: 'rgba(113, 158, 252, 1)',

      thirdAreaGradFrom: 'rgba(0, 0, 0, 0)',
      thirdAreaGradTo: 'rgba(0, 0, 0, 0)',
      thirdShadowLineDarkBg: 'rgba(0, 0, 0, 0)',
    },

    profit: {
      bg: '#ffffff',
      textColor: '#ffffff',
      axisLineColor: 'rgba(161, 161 ,229, 0.3)',
      splitLineColor: 'rgba(161, 161 ,229, 0.2)',
      areaOpacity: '1',

      axisFontSize: '16',
      axisTextColor: '#b2bac2',

      // first bar
      firstLineGradFrom: '#719efc',
      firstLineGradTo: '#719efc',
      firstLineShadow: 'rgba(14, 16, 48, 0.4)',

      // second bar
      secondLineGradFrom: '#5dcfe3',
      secondLineGradTo: '#5dcfe3',
      secondLineShadow: 'rgba(14, 16, 48, 0.4)',

      // third bar
      thirdLineGradFrom: '#e3ecfe',
      thirdLineGradTo: '#e3ecfe',
      thirdLineShadow: 'rgba(14, 16, 48, 0.4)',
    },

    orderProfitLegend: {
      firstItem: '#719efc',
      secondItem: '#5dcfe3',
      thirdItem: '#e3ecfe',
    },

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

      itemBorderColor: '#73a1ff',
      lineStyle: 'dotted',
      lineWidth: '6',
      lineGradFrom: '#73a1ff',
      lineGradTo: '#73a1ff',
      lineShadow: 'rgba(0, 0, 0, 0)',

      areaGradFrom: 'rgba(146, 181, 252, 1)',
      areaGradTo: 'rgba(146, 181, 252, 1)',
      shadowLineDarkBg: '#a695ff',

      innerLineStyle: 'solid',
      innerLineWidth: '1',

      innerAreaGradFrom: 'rgba(227, 236, 254, 1)',
      innerAreaGradTo: 'rgba(227, 236, 254, 1)',
    },

    visitorsLegend: {
      firstIcon: '#e3ecfe',
      secondIcon: '#719efc',
    },

    visitorsPie: {
      firstPieGradientLeft: '#94e2ed',
      firstPieGradientRight: '#94e2ed',
      firstPieShadowColor: 'rgba(0, 0, 0, 0)',
      firstPieRadius: ['65%', '90%'],

      secondPieGradientLeft: '#719efc',
      secondPieGradientRight: '#719efc',
      secondPieShadowColor: '#b2cafb',
      secondPieRadius: ['63%', '92%'],
      shadowOffsetX: '-4',
      shadowOffsetY: '-4',
    },

    visitorsPieLegend: {
      firstSection: '#719efc',
      secondSection: '#99e5ee',
    },

    earningPie: {
      radius: ['65%', '100%'],
      center: ['50%', '50%'],

      fontSize: '22',

      firstPieGradientLeft: '#719efc',
      firstPieGradientRight: '#719efc',
      firstPieShadowColor: 'rgba(0, 0, 0, 0)',

      secondPieGradientLeft: '#ff9f6f',
      secondPieGradientRight: '#ff9f6f',
      secondPieShadowColor: 'rgba(0, 0, 0, 0)',

      thirdPieGradientLeft: '#ff5e83',
      thirdPieGradientRight: '#ff5e83',
      thirdPieShadowColor: 'rgba(0, 0, 0, 0)',
    },

    earningLine: {
      gradFrom: '#e3ecfe',
      gradTo: '#e3ecfe',

      tooltipTextColor: '#2a2a2a',
      tooltipFontWeight: '400',
      tooltipFontSize: '16',
      tooltipBg: '#eef2f5',
      tooltipBorderColor: '#eef2f5',
      tooltipBorderWidth: '3',
      tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
    },
  },
};
