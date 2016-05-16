export const IMAGES_ROOT = 'assets/img/';

export let shade = (color, weight) => {
  return mix('#000000', color, weight);
};

export let tint = (color, weight) => {
  return mix('#ffffff', color, weight);
};

//SASS mix function
export let mix = (color1, color2, weight) => {
  // convert a decimal value to hex
  function d2h(d) {
    return d.toString(16);
  }
  // convert a hex value to decimal
  function h2d(h) {
    return parseInt(h, 16);
  }

  let result = "#";
  for(let i = 1; i < 7; i += 2) {
    let color1Part = h2d(color1.substr(i, 2));
    let color2Part = h2d(color2.substr(i, 2));
    let resultPart = d2h(Math.floor(color2Part + (color1Part - color2Part) * (weight / 100.0)));
    result += ('0' + resultPart).slice(-2);
  }
  return result;
};

export let hexToRgbA = (hex, alpha) => {
  var c;
  if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
    c= hex.substring(1).split('');
    if(c.length== 3){
      c= [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c= '0x'+c.join('');
    return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+',' + alpha + ')';
  }
  throw new Error('Bad Hex');
};

export const layoutSizes = {
  resWidthCollapseSidebar: 1200,
  resWidthHideSidebar: 500
};

export const colorScheme = {
  primary: '#209e91',
  info: '#2dacd1',
  success: '#90b900',
  warning: '#dfb81c',
  danger: '#e85656',
};

export const bgColorPalette = {
  blueStone: '#005562',
  surfieGreen: '#0e8174',
  silverTree: '#6eba8c',
  gossip: '#b9f2a1',
  white: '#10c4b5',
};

export const layoutColors = {
  primary: colorScheme.primary,
  info: colorScheme.info,
  success: colorScheme.success,
  warning: colorScheme.warning,
  danger: colorScheme.danger,

  primaryLight: tint(colorScheme.primary, 30),
  infoLight: tint(colorScheme.info, 30),
  successLight: tint(colorScheme.success, 30),
  warningLight: tint(colorScheme.warning, 30),
  dangerLight: tint(colorScheme.danger, 30),

  primaryDark: shade(colorScheme.primary, 15),
  infoDark: shade(colorScheme.info, 15),
  successDark: shade(colorScheme.success, 15),
  warningDark: shade(colorScheme.warning, 15),
  dangerDark: shade(colorScheme.danger, 15),

  primaryBg: tint(colorScheme.primary, 20),
  infoBg: tint(colorScheme.info, 20),
  successBg: tint(colorScheme.success, 20),
  warningBg: tint(colorScheme.warning, 20),
  dangerBg: tint(colorScheme.danger, 20),

  default: '#ffffff',
  defaultText: '#666666',
  border: '#dddddd',

  bgColorPalette: {
    blueStone: bgColorPalette.blueStone,
    surfieGreen: bgColorPalette.surfieGreen,
    silverTree: bgColorPalette.silverTree,
    gossip: bgColorPalette.gossip,
    white: bgColorPalette.white,

    blueStoneDark: shade(bgColorPalette.blueStone, 15),
    surfieGreenDark: shade(bgColorPalette.surfieGreen, 15),
    silverTreeDark: shade(bgColorPalette.silverTree, 15),
    gossipDark: shade(bgColorPalette.gossip, 15),
    whiteDark: shade(bgColorPalette.white, 5),
  }
};

let _chartColors = [];
let _colorsForChart = [ layoutColors.primary, layoutColors.danger, layoutColors.warning, layoutColors.success, layoutColors.info, layoutColors.default, layoutColors.primaryDark, layoutColors.successDark, layoutColors.warningLight, layoutColors.successLight, layoutColors.successBg];

_colorsForChart.forEach((color) => {
  _chartColors.push({
    fillColor: hexToRgbA(color, 0.2),
    strokeColor: hexToRgbA(color, 1),
    pointColor: hexToRgbA(color, 1),
    pointStrokeColor: color,
    pointHighlightFill: color,
    pointHighlightStroke: hexToRgbA(color, 0.8),
    color: hexToRgbA(color, 1),
    highlight: hexToRgbA(color, 0.8)
  });
});
export const chartColors = _chartColors;

export const layoutPaths = {
  images: {
    root: IMAGES_ROOT,
    profile: IMAGES_ROOT + 'app/profile/',
    amMap: 'assets/img/theme/vendor/ammap/',
    amChart: 'assets/img/theme/vendor/amcharts/dist/amcharts/images/'
  }
};
