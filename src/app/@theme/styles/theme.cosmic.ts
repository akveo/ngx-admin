import { NbJSThemeOptions } from '@nebular/theme';

const palette = {
  primary: '#a16eff',
  success: '#00d68f',
  info: '#0095ff',
  warning: '#ffaa00',
  danger: '#ff3d71',
};

const theme = {
  fontMain: 'Open Sans, sans-serif',
  fontSecondary: 'Raleway, sans-serif',

  bg: '#323259',
  bg2: '#252547',
  bg3: '#1b1b38',
  bg4: '#13132b',

  border: '#323259',
  border2: '#252547',
  border3: '#1b1b38',
  border4: '#13132b',
  border5: '#13132b',

  fg: '#b4b4db',
  fgHeading: '#ffffff',
  fgText: '#ffffff',
  fgHighlight: palette.primary,
  layoutBg: '#151a30',
  separator: '#151a30',

  primary: palette.primary,
  success: palette.success,
  info: palette.info,
  warning: palette.warning,
  danger: palette.danger,

  primaryLight: '#b18aff',
  successLight: '#2ce69b',
  infoLight: '#42aaff',
  warningLight: '#ffc94d',
  dangerLight: '#ff708d',
};

export const COSMIC_THEME = {
  name: 'cosmic',
  variables: {
    ...theme,

    temperature: {
      arcFill: [ '#2ec7fe', '#31ffad', '#7bff24', '#fff024', '#f7bd59' ],
      arcEmpty: theme.bg2,
      thumbBg: '#ffffff',
      thumbBorder: '#ffffff',
    },

    solar: {
      gradientLeft: theme.primary,
      gradientRight: theme.primary,
      shadowColor: 'rgba(0, 0, 0, 0)',
      secondSeriesFill: theme.bg2,
      radius: ['70%', '90%'],
    },

    traffic: {
      tooltipBg: theme.bg,
      tooltipBorderColor: theme.border2,
      tooltipExtraCss: 'box-shadow: 0px 2px 46px 0 rgba(50, 50, 89); border-radius: 10px; padding: 4px 16px;',
      tooltipTextColor: theme.fgText,
      tooltipFontWeight: 'normal',

      yAxisSplitLine: theme.separator,

      lineBg: theme.border2,
      lineShadowBlur: '14',
      itemColor: theme.border2,
      itemBorderColor: theme.border2,
      itemEmphasisBorderColor: theme.primary,
      shadowLineDarkBg: theme.border3,
      shadowLineShadow: theme.border3,
      gradFrom: theme.bg,
      gradTo: theme.bg2,
    },

    electricity: {
      tooltipBg: theme.bg,
      tooltipLineColor: theme.fgText,
      tooltipLineWidth: '0',
      tooltipBorderColor: theme.border2,
      tooltipExtraCss: 'box-shadow: 0px 2px 46px 0 rgba(0, 255, 170, 0.35); border-radius: 10px; padding: 8px 24px;',
      tooltipTextColor: theme.fgText,
      tooltipFontWeight: 'normal',

      axisLineColor: theme.border3,
      xAxisTextColor: theme.fg,
      yAxisSplitLine: theme.separator,

      itemBorderColor: theme.border2,
      lineStyle: 'dotted',
      lineWidth: '6',
      lineGradFrom: theme.success,
      lineGradTo: theme.warning,
      lineShadow: theme.bg4,

      areaGradFrom: theme.bg2,
      areaGradTo: theme.bg3,
      shadowLineDarkBg: theme.bg3,
    },

    bubbleMap: {
      titleColor: theme.fgText,
      areaColor: theme.bg4,
      areaHoverColor: theme.fgHighlight,
      areaBorderColor: theme.border5,
    },

    profitBarAnimationEchart: {
      textColor: theme.fgText,

      firstAnimationBarColor: theme.primary,
      secondAnimationBarColor: theme.success,

      splitLineStyleOpacity: '1',
      splitLineStyleWidth: '1',
      splitLineStyleColor: theme.border2,

      tooltipTextColor: theme.fgText,
      tooltipFontWeight: 'normal',
      tooltipFontSize: '16',
      tooltipBg: theme.bg,
      tooltipBorderColor: theme.border2,
      tooltipBorderWidth: '1',
      tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
    },

    trafficBarEchart: {
      gradientFrom: theme.warningLight,
      gradientTo: theme.warning,
      shadow: theme.warningLight,
      shadowBlur: '5',

      axisTextColor: theme.fgText,
      axisFontSize: '12',

      tooltipBg: theme.bg,
      tooltipBorderColor: theme.border2,
      tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
      tooltipTextColor: theme.fgText,
      tooltipFontWeight: 'normal',
    },

    countryOrders: {
      countryBorderColor: theme.border4,
      countryFillColor: theme.bg3,
      countryBorderWidth: '1',
      hoveredCountryBorderColor: theme.primary,
      hoveredCountryFillColor: theme.primaryLight,
      hoveredCountryBorderWidth: '1',

      chartAxisLineColor: theme.border4,
      chartAxisTextColor: theme.fg,
      chartAxisFontSize: '16',
      chartGradientTo: theme.primary,
      chartGradientFrom: theme.primaryLight,
      chartAxisSplitLine: theme.separator,
      chartShadowLineColor: theme.primaryLight,

      chartLineBottomShadowColor: theme.primary,

      chartInnerLineColor: theme.bg2,
    },

    echarts: {
      bg: theme.bg,
      textColor: theme.fgText,
      axisLineColor: theme.fgText,
      splitLineColor: theme.separator,
      itemHoverShadowColor: 'rgba(0, 0, 0, 0.5)',
      tooltipBackgroundColor: theme.primary,
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
      tooltipFontSize: '20',

      axisLineColor: 'rgba(161, 161 ,229, 0.3)',
      axisFontSize: '16',
      axisTextColor: '#a1a1e5',
      yAxisSplitLine: 'rgba(161, 161 ,229, 0.2)',

      itemBorderColor: '#ffffff',
      lineStyle: 'solid',
      lineWidth: '4',

      // first line
      firstAreaGradFrom: 'rgba(78, 64, 164, 1)',
      firstAreaGradTo: 'rgba(78, 64, 164, 1)',
      firstShadowLineDarkBg: '#018dff',

      // second line
      secondLineGradFrom: '#00bece',
      secondLineGradTo: '#00da78',

      secondAreaGradFrom: 'rgba(38, 139, 145, 0.8)',
      secondAreaGradTo: 'rgba(38, 139, 145, 0.5)',
      secondShadowLineDarkBg: '#2c5a85',

      // third line
      thirdLineGradFrom: '#8069ff',
      thirdLineGradTo: '#8357ff',

      thirdAreaGradFrom: 'rgba(118, 73, 208, 0.7)',
      thirdAreaGradTo: 'rgba(188, 92, 255, 0.4)',
      thirdShadowLineDarkBg: '#a695ff',
    },

    profit: {
      bg: '#3d3780',
      textColor: '#ffffff',
      axisLineColor: '#a1a1e5',
      splitLineColor: '#342e73',
      areaOpacity: '1',

      axisFontSize: '16',
      axisTextColor: '#a1a1e5',

      // first bar
      firstLineGradFrom: '#00bece',
      firstLineGradTo: '#00da78',
      firstLineShadow: 'rgba(14, 16, 48, 0.4)',

      // second bar
      secondLineGradFrom: '#8069ff',
      secondLineGradTo: '#8357ff',
      secondLineShadow: 'rgba(14, 16, 48, 0.4)',

      // third bar
      thirdLineGradFrom: '#4e40a4',
      thirdLineGradTo: '#4e40a4',
      thirdLineShadow: 'rgba(14, 16, 48, 0.4)',
    },

    orderProfitLegend: {
      firstItem: 'linear-gradient(90deg, #00c7c7 0%, #00d977 100%)',
      secondItem: 'linear-gradient(90deg, #a454ff 0%, #7659ff 100%)',
      thirdItem: '#4e40a4',
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
      axisFontSize: '16',
      axisTextColor: '#a1a1e5',
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

    visitorsLegend: {
      firstIcon: 'linear-gradient(90deg, #0088ff 0%, #3dafff 100%)',
      secondIcon: 'linear-gradient(90deg, #a454ff 0%, #7659ff 100%)',
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
      shadowOffsetX: '0',
      shadowOffsetY: '3',
    },

    visitorsPieLegend: {
      firstSection: 'linear-gradient(90deg, #ffcb17 0%, #ff874c 100%)',
      secondSection: 'linear-gradient(90deg, #00c7c7 0%, #00d977 100%)',
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
      gradFrom: 'rgba(118, 89, 255, 0.4)',
      gradTo: 'rgba(164, 84, 255, 0.5)',

      tooltipTextColor: '#ffffff',
      tooltipFontWeight: 'normal',
      tooltipFontSize: '16',
      tooltipBg: 'rgba(0, 255, 170, 0.35)',
      tooltipBorderColor: '#00d977',
      tooltipBorderWidth: '3',
      tooltipExtraCss: 'box-shadow: 0px 2px 46px 0 rgba(0, 255, 170, 0.35); border-radius: 10px; padding: 4px 16px;',
    },
  },
} as NbJSThemeOptions;
