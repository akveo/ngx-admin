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
      axisLineColor: theme.separator,
      textColor: theme.fgText,
    },

    orders: {
      tooltipBg: theme.bg,
      tooltipLineColor: 'rgba(0, 0, 0, 0)',
      tooltipLineWidth: '0',
      tooltipBorderColor: theme.border2,
      tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
      tooltipTextColor: theme.fgText,
      tooltipFontWeight: 'normal',
      tooltipFontSize: '20',

      axisLineColor: theme.border4,
      axisFontSize: '16',
      axisTextColor: theme.fg,
      yAxisSplitLine: theme.separator,

      itemBorderColor: theme.primary,
      lineStyle: 'solid',
      lineWidth: '4',

      // first line
      firstAreaGradFrom: theme.bg2,
      firstAreaGradTo: theme.bg2,
      firstShadowLineDarkBg: theme.bg2,

      // second line
      secondLineGradFrom: theme.primary,
      secondLineGradTo: theme.primary,

      secondAreaGradFrom: 'rgba(161, 110, 255, 0.8)',
      secondAreaGradTo: 'rgba(161, 110, 255, 0.5)',
      secondShadowLineDarkBg: theme.primary,

      // third line
      thirdLineGradFrom: theme.success,
      thirdLineGradTo: theme.successLight,

      thirdAreaGradFrom: 'rgba(0, 214, 143, 0.7)',
      thirdAreaGradTo: 'rgba(0, 214, 143, 0.4)',
      thirdShadowLineDarkBg: theme.success,
    },

    profit: {
      bg: theme.bg,
      textColor: theme.fgText,
      axisLineColor: theme.border4,
      splitLineColor: theme.separator,
      areaOpacity: '1',

      axisFontSize: '16',
      axisTextColor: theme.fg,

      // first bar
      firstLineGradFrom: theme.bg2,
      firstLineGradTo: theme.bg2,
      firstLineShadow: 'rgba(0, 0, 0, 0)',

      // second bar
      secondLineGradFrom: theme.primary,
      secondLineGradTo: theme.primary,
      secondLineShadow: 'rgba(0, 0, 0, 0)',

      // third bar
      thirdLineGradFrom: theme.success,
      thirdLineGradTo: theme.successLight,
      thirdLineShadow: 'rgba(0, 0, 0, 0)',
    },

    orderProfitLegend: {
      firstItem: theme.success,
      secondItem: theme.primary,
      thirdItem: theme.bg2,
    },

    visitors: {
      tooltipBg: theme.bg,
      tooltipLineColor: 'rgba(0, 0, 0, 0)',
      tooltipLineWidth: '1',
      tooltipBorderColor: theme.border2,
      tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
      tooltipTextColor: theme.fgText,
      tooltipFontWeight: 'normal',
      tooltipFontSize: '20',

      axisLineColor: theme.border4,
      axisFontSize: '16',
      axisTextColor: theme.fg,
      yAxisSplitLine: theme.separator,

      itemBorderColor: theme.primary,
      lineStyle: 'dotted',
      lineWidth: '6',
      lineGradFrom: '#ffffff',
      lineGradTo: '#ffffff',
      lineShadow: 'rgba(0, 0, 0, 0)',

      areaGradFrom: theme.primary,
      areaGradTo: theme.primaryLight,

      innerLineStyle: 'solid',
      innerLineWidth: '1',

      innerAreaGradFrom: theme.success,
      innerAreaGradTo: theme.success,
    },

    visitorsLegend: {
      firstIcon: theme.success,
      secondIcon: theme.primary,
    },

    visitorsPie: {
      firstPieGradientLeft: theme.success,
      firstPieGradientRight: theme.successLight,
      firstPieShadowColor: 'rgba(0, 0, 0, 0)',
      firstPieRadius: ['70%', '90%'],

      secondPieGradientLeft: theme.warning,
      secondPieGradientRight: theme.warningLight,
      secondPieShadowColor: 'rgba(0, 0, 0, 0)',
      secondPieRadius: ['60%', '95%'],
      shadowOffsetX: '0',
      shadowOffsetY: '3',
    },

    visitorsPieLegend: {
      firstSection: theme.warning,
      secondSection: theme.success,
    },

    earningPie: {
      radius: ['65%', '100%'],
      center: ['50%', '50%'],

      fontSize: '22',

      firstPieGradientLeft: theme.success,
      firstPieGradientRight: theme.success,
      firstPieShadowColor: 'rgba(0, 0, 0, 0)',

      secondPieGradientLeft: theme.primary,
      secondPieGradientRight: theme.primary,
      secondPieShadowColor: 'rgba(0, 0, 0, 0)',

      thirdPieGradientLeft: theme.warning,
      thirdPieGradientRight: theme.warning,
      thirdPieShadowColor: 'rgba(0, 0, 0, 0)',
    },

    earningLine: {
      gradFrom: theme.primary,
      gradTo: theme.primary,

      tooltipTextColor: theme.fgText,
      tooltipFontWeight: 'normal',
      tooltipFontSize: '16',
      tooltipBg: theme.bg,
      tooltipBorderColor: theme.border2,
      tooltipBorderWidth: '1',
      tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
    },
  },
} as NbJSThemeOptions;
