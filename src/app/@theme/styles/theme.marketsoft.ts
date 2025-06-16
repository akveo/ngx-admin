import { NbJSThemeOptions, DEFAULT_THEME as baseTheme } from '@nebular/theme';

const baseThemeVariables = baseTheme.variables;

export const MARKETSOFT_THEME = {
  name: 'marketsoft',
  base: 'default',
  variables: {
    // Based on the Marketsoft brand colors from the provided brand guide
    // Primary color - Marketsoft red
    temperature: {
      arcFill: ['#D6001C', '#D6001C', '#D6001C', '#D6001C', '#D6001C'],
      arcEmpty: baseThemeVariables.bg2,
      thumbBg: '#FFFFFF',
      thumbBorder: '#D6001C',
    },

    // Override with Marketsoft brand colors
    primary: '#D6001C',  // Marketsoft red
    success: '#2a2e40',  // Marketsoft blue
    info: '#2a2e40',     // Marketsoft blue
    warning: '#D6001C',  // Marketsoft red
    danger: '#D6001C',   // Marketsoft red

    // Background colors
    bg3: '#f7f9fc',
    bg4: '#edf1f7',

    solar: {
      gradientLeft: '#D6001C',
      gradientRight: '#D6001C',
      shadowColor: 'rgba(0, 0, 0, 0)',
      secondSeriesFill: baseThemeVariables.bg2,
      radius: ['70%', '90%'],
    },

    traffic: {
      tooltipBg: baseThemeVariables.bg,
      tooltipBorderColor: baseThemeVariables.border2,
      tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
      tooltipTextColor: baseThemeVariables.fgText,
      tooltipFontWeight: 'normal',

      yAxisSplitLine: baseThemeVariables.separator,

      lineBg: '#D6001C',
      lineShadowBlur: '0',
      itemColor: '#D6001C',
      itemBorderColor: '#D6001C',
      itemEmphasisBorderColor: '#D6001C',
      shadowLineDarkBg: 'rgba(0, 0, 0, 0)',
      shadowLineShadow: 'rgba(0, 0, 0, 0)',
      gradFrom: baseThemeVariables.bg,
      gradTo: baseThemeVariables.bg,
    },

    electricity: {
      tooltipBg: baseThemeVariables.bg,
      tooltipLineColor: baseThemeVariables.fgText,
      tooltipLineWidth: '0',
      tooltipBorderColor: baseThemeVariables.border2,
      tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
      tooltipTextColor: baseThemeVariables.fgText,
      tooltipFontWeight: 'normal',

      axisLineColor: baseThemeVariables.border3,
      xAxisTextColor: baseThemeVariables.fg,
      yAxisSplitLine: baseThemeVariables.separator,

      itemBorderColor: '#D6001C',
      lineStyle: 'solid',
      lineWidth: '4',
      lineGradFrom: '#D6001C',
      lineGradTo: '#D6001C',
      lineShadow: 'rgba(0, 0, 0, 0)',

      areaGradFrom: 'rgba(214, 0, 28, 0.2)',
      areaGradTo: 'rgba(214, 0, 28, 0)',
      shadowLineDarkBg: 'rgba(0, 0, 0, 0)',
    },

    bubbleMap: {
      titleColor: baseThemeVariables.fgText,
      areaColor: baseThemeVariables.bg4,
      areaHoverColor: baseThemeVariables.fgHighlight,
      areaBorderColor: baseThemeVariables.border5,
    },

    echarts: {
      bg: baseThemeVariables.bg,
      textColor: baseThemeVariables.fgText,
      axisLineColor: baseThemeVariables.fgText,
      splitLineColor: baseThemeVariables.separator,
      itemHoverShadowColor: 'rgba(0, 0, 0, 0.5)',
      tooltipBackgroundColor: '#D6001C',
      areaOpacity: '0.7',
    },

    chartjs: {
      axisLineColor: baseThemeVariables.separator,
      textColor: baseThemeVariables.fgText,
    },

    // Additional styling for specific components
    orders: {
      tooltipBg: baseThemeVariables.bg,
      tooltipLineColor: 'rgba(0, 0, 0, 0)',
      tooltipLineWidth: '0',
      tooltipBorderColor: baseThemeVariables.border2,
      tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
      tooltipTextColor: baseThemeVariables.fgText,
      tooltipFontWeight: 'normal',
      tooltipFontSize: '20',

      axisLineColor: baseThemeVariables.border4,
      axisFontSize: '16',
      axisTextColor: baseThemeVariables.fg,
      yAxisSplitLine: baseThemeVariables.separator,

      itemBorderColor: '#D6001C',
      lineStyle: 'solid',
      lineWidth: '4',

      // first line
      firstAreaGradFrom: 'rgba(42, 46, 64, 0.2)',
      firstAreaGradTo: 'rgba(42, 46, 64, 0)',
      firstShadowLineDarkBg: 'rgba(0, 0, 0, 0)',

      // second line
      secondLineGradFrom: '#D6001C',
      secondLineGradTo: '#D6001C',

      secondAreaGradFrom: 'rgba(214, 0, 28, 0.2)',
      secondAreaGradTo: 'rgba(214, 0, 28, 0)',
      secondShadowLineDarkBg: 'rgba(0, 0, 0, 0)',

      // third line
      thirdLineGradFrom: '#2a2e40',
      thirdLineGradTo: '#2a2e40',

      thirdAreaGradFrom: 'rgba(42, 46, 64, 0.2)',
      thirdAreaGradTo: 'rgba(42, 46, 64, 0)',
      thirdShadowLineDarkBg: 'rgba(0, 0, 0, 0)',
    },

    // Setting up the Marketsoft specific colors for visuals
    visitorsPieLegend: {
      firstSection: '#D6001C',
      secondSection: '#2a2e40',
    },

    earningPie: {
      radius: ['65%', '100%'],
      center: ['50%', '50%'],

      fontSize: '22',

      firstPieGradientLeft: '#D6001C',
      firstPieGradientRight: '#D6001C',
      firstPieShadowColor: 'rgba(0, 0, 0, 0)',

      secondPieGradientLeft: '#2a2e40',
      secondPieGradientRight: '#2a2e40',
      secondPieShadowColor: 'rgba(0, 0, 0, 0)',

      thirdPieGradientLeft: '#ffffff',
      thirdPieGradientRight: '#ffffff',
      thirdPieShadowColor: 'rgba(0, 0, 0, 0)',
    },
  },
} as NbJSThemeOptions;