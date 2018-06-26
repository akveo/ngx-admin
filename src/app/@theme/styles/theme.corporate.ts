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
  },
};
