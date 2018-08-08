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

    profitBarAnimationEchart: {
      textColor: '#484848',

      firstAnimationBarColor: '#3edd81',
      secondAnimationBarColor: '#8d7fff',

      splitLineStyleOpacity: '0.06',
      splitLineStyleWidth: '1',
      splitLineStyleColor: '#000000',

      tooltipTextColor: '#2a2a2a',
      tooltipFontWeight: 'bolder',
      tooltipFontSize: '16',
      tooltipBg: '#ffffff',
      tooltipBorderColor: '#c0c8d1',
      tooltipBorderWidth: '3',
      tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
    },

    trafficBarEchart: {
      gradientFrom: '#fc0',
      gradientTo: '#ffa100',
      shadow: '#ffb600',
      shadowBlur: '0',

      axisTextColor: '#b2bac2',
      axisFontSize: '12',

      tooltipBg: '#ffffff',
      tooltipBorderColor: '#c0c8d1',
      tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
      tooltipTextColor: '#2a2a2a',
      tooltipFontWeight: 'bolder',
    },

    countryOrders: {
      countryBorderColor: 'rgba(255, 255, 255, 1)',
      countryFillColor: 'rgba(236, 242, 245, 1)',
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
      firstAreaGradFrom: 'rgba(236, 242, 245, 0.8)',
      firstAreaGradTo: 'rgba(236, 242, 245, 0.8)',
      firstShadowLineDarkBg: 'rgba(0, 0, 0, 0)',

      // second line
      secondLineGradFrom: 'rgba(164, 123, 255, 1)',
      secondLineGradTo: 'rgba(164, 123, 255, 1)',

      secondAreaGradFrom: 'rgba(188, 92, 255, 0.2)',
      secondAreaGradTo: 'rgba(188, 92, 255, 0)',
      secondShadowLineDarkBg: 'rgba(0, 0, 0, 0)',

      // third line
      thirdLineGradFrom: 'rgba(55, 220, 136, 1)',
      thirdLineGradTo: 'rgba(55, 220, 136, 1)',

      thirdAreaGradFrom: 'rgba(31 ,106, 124, 0.2)',
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

      // first bar
      firstLineGradFrom: '#00bece',
      firstLineGradTo: '#00da78',
      firstLineShadow: 'rgba(14, 16, 48, 0.4)',

      // second bar
      secondLineGradFrom: '#8069ff',
      secondLineGradTo: '#8357ff',
      secondLineShadow: 'rgba(14, 16, 48, 0.4)',

      // third bar
      thirdLineGradFrom: 'rgba(236, 242, 245, 0.8)',
      thirdLineGradTo: 'rgba(236, 242, 245, 0.8)',
      thirdLineShadow: 'rgba(14, 16, 48, 0.4)',
    },

    orderProfitLegend: {
      firstItem: 'linear-gradient(90deg, #3edd81 0%, #3bddad 100%)',
      secondItem: 'linear-gradient(90deg, #8d7fff 0%, #b17fff 100%)',
      thirdItem: 'rgba(236, 242, 245, 0.8)',
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

      itemBorderColor: '#42db7d',
      lineStyle: 'dotted',
      lineWidth: '6',
      lineGradFrom: '#ffffff',
      lineGradTo: '#ffffff',
      lineShadow: 'rgba(14, 16, 48, 0)',

      areaGradFrom: 'rgba(188, 92, 255, 1)',
      areaGradTo: 'rgba(188, 92, 255, 0.5)',
      shadowLineDarkBg: '#a695ff',

      innerLineStyle: 'solid',
      innerLineWidth: '1',

      innerAreaGradFrom: 'rgba(60, 221, 156, 1)',
      innerAreaGradTo: 'rgba(60, 221, 156, 1)',
    },

    visitorsLegend: {
      firstIcon: 'linear-gradient(90deg, #3edd81 0%, #3bddad 100%)',
      secondIcon: 'linear-gradient(90deg, #8d7fff 0%, #b17fff 100%)',
    },

    visitorsPie: {
      firstPieGradientLeft: '#8defbb',
      firstPieGradientRight: '#8defbb',
      firstPieShadowColor: 'rgba(0, 0, 0, 0)',
      firstPieRadius: ['70%', '90%'],

      secondPieGradientLeft: '#ff894a',
      secondPieGradientRight: '#ffcc10',
      secondPieShadowColor: 'rgba(0, 0, 0, 0)',
      secondPieRadius: ['60%', '97%'],
      shadowOffsetX: '0',
      shadowOffsetY: '0',
    },

    visitorsPieLegend: {
      firstSection: 'linear-gradient(90deg, #ffcb17 0%, #ff874c 100%)',
      secondSection: '#8defbb',
    },

    earningPie: {
      radius: ['65%', '100%'],
      center: ['50%', '50%'],

      fontSize: '22',

      firstPieGradientLeft: '#00d77f',
      firstPieGradientRight: '#00d77f',
      firstPieShadowColor: 'rgba(0, 0, 0, 0)',

      secondPieGradientLeft: '#7756f7',
      secondPieGradientRight: '#7756f7',
      secondPieShadowColor: 'rgba(0, 0, 0, 0)',

      thirdPieGradientLeft: '#ffca00',
      thirdPieGradientRight: '#ffca00',
      thirdPieShadowColor: 'rgba(0, 0, 0, 0)',
    },

    earningLine: {
      gradFrom: 'rgba(188, 92, 255, 0.5)',
      gradTo: 'rgba(188, 92, 255, 0.5)',

      tooltipTextColor: '#2a2a2a',
      tooltipFontWeight: 'bolder',
      tooltipFontSize: '16',
      tooltipBg: '#ffffff',
      tooltipBorderColor: '#c0c8d1',
      tooltipBorderWidth: '3',
      tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
    },
  },
};
