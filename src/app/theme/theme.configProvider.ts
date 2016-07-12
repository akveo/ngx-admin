import {Injectable} from '@angular/core';
import {colorHelper} from './theme.constants';
import * as _ from 'lodash';

@Injectable()
export class BaThemeConfigProvider {

  basic = {
    default: '#ffffff',
    defaultText: '#ffffff',
    border: '#dddddd',
    borderDark: '#aaaaaa',
  };

  // main functional color scheme
  colorScheme = {
    primary: '#00abff',
    info: '#40daf1',
    success: '#8bd22f',
    warning: '#e7ba08',
    danger: '#f95372',
  };

  // dashboard colors for charts
  dashboardColors = {
    blueStone: '#40daf1',
    surfieGreen: '#00abff',
    silverTree: '#1b70ef',
    gossip: '#3c4eb9',
    white: '#ffffff',
  };

  conf = {
    theme: {
      name: 'ng2',
    },
    colors: {
      default: this.basic.default,
      defaultText: this.basic.defaultText,
      border: this.basic.border,
      borderDark: this.basic.borderDark,

      primary: this.colorScheme.primary,
      info: this.colorScheme.info,
      success: this.colorScheme.success,
      warning: this.colorScheme.warning,
      danger: this.colorScheme.danger,

      primaryLight: colorHelper.tint(this.colorScheme.primary, 30),
      infoLight: colorHelper.tint(this.colorScheme.info, 30),
      successLight: colorHelper.tint(this.colorScheme.success, 30),
      warningLight: colorHelper.tint(this.colorScheme.warning, 30),
      dangerLight: colorHelper.tint(this.colorScheme.danger, 30),

      primaryDark: colorHelper.shade(this.colorScheme.primary, 15),
      infoDark: colorHelper.shade(this.colorScheme.info, 15),
      successDark: colorHelper.shade(this.colorScheme.success, 15),
      warningDark: colorHelper.shade(this.colorScheme.warning, 15),
      dangerDark: colorHelper.shade(this.colorScheme.danger, 15),

      dashboard: {
        blueStone: this.dashboardColors.blueStone,
        surfieGreen: this.dashboardColors.surfieGreen,
        silverTree: this.dashboardColors.silverTree,
        gossip: this.dashboardColors.gossip,
        white: this.dashboardColors.white,
      },

      custom: {
        dashboardLineChart: this.basic.defaultText,
        dashboardPieChart: colorHelper.hexToRgbA(this.basic.defaultText, 0.8)
      }
    }
  };

  get() {
    return this.conf;
  }

  changeTheme (theme) {
    _.merge(this.get().theme, theme);
  }

  changeColors (colors) {
    _.merge(this.get().colors, colors);
  }
}
