import { NbJSThemeOptions } from '@nebular/theme';

const palette = {
  primary: '#3366ff',
  success: '#00d68f',
  info: '#0095ff',
  warning: '#ffaa00',
  danger: '#ff3d71',
};

const theme = {
  fontMain: 'Open Sans, sans-serif',
  fontSecondary: 'Raleway, sans-serif',

  bg: '#222b45',
  bg2: '#1a2138',
  bg3: '#151a30',
  bg4: '#101426',

  border: '#222b45',
  border2: '#1a2138',
  border3: '#151a30',
  border4: '#101426',
  border5: '#101426',

  fg: '#8f9bb3',
  fgHeading: '#ffffff',
  fgText: '#ffffff',
  fgHighlight: palette.primary,
  layoutBg: '#1b1b38',
  separator: '#1b1b38',

  primary: palette.primary,
  success: palette.success,
  info: palette.info,
  warning: palette.warning,
  danger: palette.danger,

  primaryLight: '#598bff',
  successLight: '#2ce69b',
  infoLight: '#42aaff',
  warningLight: '#ffc94d',
  dangerLight: '#ff708d',
};

export const DARK_THEME = {
  name: 'dark',
  variables: {
    ...theme,

    temperature: {
      arcFill: [ theme.primary, theme.primary, theme.primary, theme.primary, theme.primary ],
      arcEmpty: theme.bg2,
      thumbBg: theme.bg2,
      thumbBorder: theme.primary,
    },

    solar: {
      gradientLeft: theme.primary,
      gradientRight: theme.primary,
      shadowColor: 'rgba(0, 0, 0, 0)',
      secondSeriesFill: theme.bg2,
      radius: ['80%', '90%'],
    },

    traffic: {
      tooltipBg: theme.bg,
      tooltipBorderColor: theme.border2,
      tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
      tooltipTextColor: theme.fgText,
      tooltipFontWeight: 'normal',

      yAxisSplitLine: theme.separator,

      lineBg: theme.border4,
      lineShadowBlur: '1',
      itemColor: theme.border4,
      itemBorderColor: theme.border4,
      itemEmphasisBorderColor: theme.primary,
      shadowLineDarkBg: 'rgba(0, 0, 0, 0)',
      shadowLineShadow: 'rgba(0, 0, 0, 0)',
      gradFrom: theme.bg2,
      gradTo: theme.bg2,
    },

    electricity: {
      tooltipBg: theme.bg,
      tooltipLineColor: theme.fgText,
      tooltipLineWidth: '0',
      tooltipBorderColor: theme.border2,
      tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
      tooltipTextColor: theme.fgText,
      tooltipFontWeight: 'normal',

      axisLineColor: theme.border3,
      xAxisTextColor: theme.fg,
      yAxisSplitLine: theme.separator,

      itemBorderColor: theme.primary,
      lineStyle: 'solid',
      lineWidth: '4',
      lineGradFrom: theme.primary,
      lineGradTo: theme.primary,
      lineShadow: 'rgba(0, 0, 0, 0)',

      areaGradFrom: theme.bg2,
      areaGradTo: theme.bg2,
      shadowLineDarkBg: 'rgba(0, 0, 0, 0)',
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
      splitLineStyleColor: theme.separator,

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
      shadowBlur: '0',

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
      areaOpacity: '0.7',
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
      firstAreaGradFrom: theme.bg3,
      firstAreaGradTo: theme.bg3,
      firstShadowLineDarkBg: 'rgba(0, 0, 0, 0)',

      // second line
      secondLineGradFrom: theme.primary,
      secondLineGradTo: theme.primary,

      secondAreaGradFrom: 'rgba(51, 102, 255, 0.2)',
      secondAreaGradTo: 'rgba(51, 102, 255, 0)',
      secondShadowLineDarkBg: 'rgba(0, 0, 0, 0)',

      // third line
      thirdLineGradFrom: theme.success,
      thirdLineGradTo: theme.successLight,

      thirdAreaGradFrom: 'rgba(0, 214, 143, 0.2)',
      thirdAreaGradTo: 'rgba(0, 214, 143, 0)',
      thirdShadowLineDarkBg: 'rgba(0, 0, 0, 0)',
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
      firstLineGradFrom: theme.bg3,
      firstLineGradTo: theme.bg3,
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
      thirdItem: theme.bg3,
    },

    visitors: {
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
      firstPieGradientRight: theme.success,
      firstPieShadowColor: 'rgba(0, 0, 0, 0)',
      firstPieRadius: ['70%', '90%'],

      secondPieGradientLeft: theme.warning,
      secondPieGradientRight: theme.warningLight,
      secondPieShadowColor: 'rgba(0, 0, 0, 0)',
      secondPieRadius: ['60%', '97%'],
      shadowOffsetX: '0',
      shadowOffsetY: '0',
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
