export const COSMIC_THEME = {
  name: 'cosmic',
  base: 'default',
  variables: {

    temperature: [
      '#2ec7fe',
      '#31ffad',
      '#7bff24',
      '#fff024',
      '#f7bd59',
    ],

    solar: {
      gradientLeft: '#7bff24',
      gradientRight: '#2ec7fe',
      shadowColor: '#19977E',
      radius: ['70%', '90%'],
    },

    traffic: {
      colorBlack: '#000000',
      tooltipBg: 'rgba(0, 255, 170, 0.35)',
      tooltipBorderColor: '#00d977',
      tooltipExtraCss: 'box-shadow: 0px 2px 46px 0 rgba(0, 255, 170, 0.35); border-radius: 10px; padding: 4px 16px;',
      tooltipTextColor: '#ffffff',
      tooltipFontWeight: 'normal',

      lineBg: '#d1d1ff',
      lineShadowBlur: '14',
      itemColor: '#BEBBFF',
      itemBorderColor: '#ffffff',
      itemEmphasisBorderColor: '#ffffff',
      shadowLineDarkBg: '#655ABD',
      shadowLineShadow: 'rgba(33, 7, 77, 0.5)',
      gradFrom: 'rgba(118, 89, 255, 0.4)',
      gradTo: 'rgba(164, 84, 255, 0.5)',
    },

    electricity: {
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
      lineGradFrom: '#00ffaa',
      lineGradTo: '#fff835',
      lineShadow: 'rgba(14, 16, 48, 0.4)',

      areaGradFrom: 'rgba(188, 92, 255, 0.5)',
      areaGradTo: 'rgba(188, 92, 255, 0)',
      shadowLineDarkBg: '#a695ff',
    },

    bubbleMap: {
      titleColor: '#ffffff',
      areaColor: '#2c2961',
      areaHoverColor: '#a1a1e5',
      areaBorderColor: '#654ddb',
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
      textColor: '#ffffff',

      tooltipBg: 'rgba(0, 255, 170, 0.35)',
      tooltipBorderColor: '#00d977',
      tooltipExtraCss: 'box-shadow: 0px 2px 46px 0 rgba(0, 255, 170, 0.35); border-radius: 10px; padding: 4px 16px;',
      tooltipTextColor: '#ffffff',
      tooltipFontWeight: 'normal',
    },

    countryOrders: {
      countryBorderColor: '#525dbd',
      countryFillColor: '#4f41a6',
      hoveredCountryBorderColor: '#00f9a6',
      hoveredCountryFillColor: '#377aa7',

      chartAxisLineColor: 'rgba(161, 161 ,229, 0.3)',
      chartAxisTextColor: '#a1a1e5',
      chartGradientTo: '#00c7c7',
      chartGradientFrom: '#00d977',
      chartAxisSplitLine: 'rgba(161, 161 ,229, 0.2)',
      chartShadowBarColor: '#2f296b',

      chartLineBottomShadowColor: '#00977e',

      chartInnerLineColor: '#2f296b',
    },

    echarts: {
      bg: '#3d3780',
      textColor: '#ffffff',
      axisLineColor: '#a1a1e5',
      splitLineColor: '#342e73',
      itemHoverShadowColor: 'rgba(0, 0, 0, 0.5)',
      tooltipBackgroundColor: '#6a7985',
      areaOpacity: '1',
    },

    chartjs: {
      axisLineColor: '#a1a1e5',
      textColor: '#ffffff',
    },

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
      lineWidth: '4',

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

    profit: {
      bg: '#3d3780',
      textColor: '#ffffff',
      axisLineColor: '#a1a1e5',
      splitLineColor: '#342e73',
      areaOpacity: '1',

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
