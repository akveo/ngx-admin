import { NbJSThemeOptions } from '@nebular/theme';

const palette = {
  primary: '#73a1ff',
  success: '#5dcfe3',
  info: '#ba7fec',
  warning: '#ffa36b',
  danger: '#ff6b83',
};

const theme = {
  fontMain: 'Open Sans, sans-serif',
  fontSecondary: 'Raleway, sans-serif',

  bg: '#ffffff',
  bg2: '#f7f9fc',
  bg3: '#edf1f7',
  bg4: '#e4e9f2',

  border: '#ffffff',
  border2: '#f7f9fc',
  border3: '#edf1f7',
  border4: '#e4e9f2',
  border5: '#c5cee0',

  fg: '#8f9bb3',
  fgHeading: '#1a2138',
  fgText: '#1a2138',
  fgHighlight: palette.primary,
  layoutBg: '#f7f9fc',
  separator: '#edf1f7',

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

export const CORPORATE_THEME = {
  name: 'corporate',
  variables: {
    ...theme,

    temperature: {
      arcFill: [ '#ffa36b', '#ffa36b', '#ff9e7a', '#ff9888', '#ff8ea0' ],
      arcEmpty: theme.bg2,
      thumbBg: theme.bg2,
      thumbBorder: '#ffa36b',
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

      lineBg: theme.primary,
      lineShadowBlur: '0',
      itemColor: theme.border4,
      itemBorderColor: theme.border4,
      itemEmphasisBorderColor: theme.primaryLight,
      shadowLineDarkBg: 'rgba(0, 0, 0, 0)',
      shadowLineShadow: 'rgba(0, 0, 0, 0)',
      gradFrom: theme.bg,
      gradTo: theme.bg,
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

      areaGradFrom: 'rgba(0, 0, 0, 0)',
      areaGradTo: 'rgba(0, 0, 0, 0)',
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
      tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
      tooltipTextColor: theme.fgText,
      tooltipFontWeight: 'normal',
    },

    countryOrders: {
      countryBorderColor: theme.border4,
      countryFillColor: theme.bg4,
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

      secondAreaGradFrom: 'rgba(0, 0, 0, 0)',
      secondAreaGradTo: 'rgba(0, 0, 0, 0)',
      secondShadowLineDarkBg: 'rgba(0, 0, 0, 0)',

      // third line
      thirdLineGradFrom: theme.success,
      thirdLineGradTo: theme.successLight,

      thirdAreaGradFrom: 'rgba(0, 0, 0, 0)',
      thirdAreaGradTo: 'rgba(0, 0, 0, 0)',
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
      thirdLineGradTo: theme.success,
      thirdLineShadow: 'rgba(0, 0, 0, 0)',
    },

    orderProfitLegend: {
      firstItem: theme.success,
      secondItem: theme.primary,
      thirdItem: theme.bg3,
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
} as NbJSThemeOptions;
