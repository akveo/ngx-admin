import { Component } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'ngx-hero-buttons',
  styleUrls: ['./hero-buttons.component.scss'],
  templateUrl: './hero-buttons.component.html',
})
export class HeroButtonComponent {

  themeName: string = 'default';
  settings: Array<any>;

  constructor(private themeService: NbThemeService) {
    this.themeService.getJsTheme().subscribe(theme => {
      this.themeName = theme.name;
      this.init(theme.variables);
    });
  }

  init(theme: any) {
    this.settings = [{
      class: 'btn-hero-primary',
      container: 'primary-container',
      title: 'Primary Button',
      buttonTitle: 'Primary',
      default: {
        gradientLeft: `adjust-hue(${theme.colorPrimary}, 20deg)`,
        gradientRight: theme.colorPrimary,
      },
      cosmic: {
        gradientLeft: `adjust-hue(${theme.colorPrimary}, 20deg)`,
        gradientRight: theme.colorPrimary,
        bevel: `shade(${theme.colorPrimary}, 14%)`,
        shadow: 'rgba (6, 7, 64, 0.5)',
        glow: `adjust-hue(${theme.colorPrimary}, 10deg)`,
      },
    }, {
      class: 'btn-hero-warning',
      container: 'warning-container',
      title: 'Warning Button',
      buttonTitle: 'Warning',
      default: {
        gradientLeft: `adjust-hue(${theme.colorWarning}, 10deg)`,
        gradientRight: theme.colorWarning,
      },
      cosmic: {
        gradientLeft: `adjust-hue(${theme.colorWarning}, 10deg)`,
        gradientRight: theme.colorWarning,
        bevel: `shade(${theme.colorWarning}, 14%)`,
        shadow: 'rgba (33, 7, 77, 0.5)',
        glow: `adjust-hue(${theme.colorWarning}, 5deg)`,
      },
    }, {
      class: 'btn-hero-success',
      container: 'success-container',
      title: 'Success Button',
      buttonTitle: 'Success',
      default: {
        gradientLeft: `adjust-hue(${theme.colorSuccess}, 20deg)`,
        gradientRight: theme.colorSuccess,
      },
      cosmic: {
        gradientLeft: `adjust-hue(${theme.colorSuccess}, 20deg)`,
        gradientRight: theme.colorSuccess,
        bevel: `shade(${theme.colorSuccess}, 14%)`,
        shadow: 'rgba (33, 7, 77, 0.5)',
        glow: `adjust-hue(${theme.colorSuccess}, 10deg)`,
      },
    }, {
      class: 'btn-hero-info',
      container: 'info-container',
      title: 'Info Button',
      buttonTitle: 'Info',
      default: {
        gradientLeft: `adjust-hue(${theme.colorInfo}, -10deg)`,
        gradientRight: theme.colorInfo,
      },
      cosmic: {
        gradientLeft: `adjust-hue(${theme.colorInfo}, -10deg)`,
        gradientRight: theme.colorInfo,
        bevel: `shade(${theme.colorInfo}, 14%)`,
        shadow: 'rgba (33, 7, 77, 0.5)',
        glow: `adjust-hue(${theme.colorInfo}, -5deg)`,
      },
    }, {
      class: 'btn-hero-danger',
      container: 'danger-container',
      title: 'Danger Button',
      buttonTitle: 'Danger',
      default: {
        gradientLeft: `adjust-hue(${theme.colorDanger}, -20deg)`,
        gradientRight: theme.colorDanger,
      },
      cosmic: {
        gradientLeft: `adjust-hue(${theme.colorDanger}, -20deg)`,
        gradientRight: theme.colorDanger,
        bevel: `shade(${theme.colorDanger}, 14%)`,
        shadow: 'rgba (33, 7, 77, 0.5)',
        glow: `adjust-hue(${theme.colorDanger}, -10deg)`,
      },
    }, {
      class: 'btn-hero-secondary',
      container: 'secondary-container',
      title: 'Ghost Button',
      buttonTitle: 'Ghost',
      default: {
        border: '#dadfe6',
      },
      cosmic: {
        border: theme.colorPrimary,
        bevel: '#665ebd',
        shadow: 'rgba (33, 7, 77, 0.5)',
        glow: 'rgba (146, 141, 255, 1)',
      },
    }];
  }
}
