import { Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'ngx-hero-buttons',
  styleUrls: ['./hero-buttons.component.scss'],
  templateUrl: './hero-buttons.component.html',
})
export class HeroButtonComponent implements OnDestroy {

  themeName = 'default';
  settings: Array<any>;
  themeSubscription: any;

  constructor(private themeService: NbThemeService) {
    this.themeSubscription = this.themeService.getJsTheme().subscribe(theme => {
      this.themeName = theme.name;
      this.init(theme.variables);
    });
  }

  init(colors: any) {
    this.settings = [{
      class: 'btn-hero-primary',
      container: 'primary-container',
      title: 'Primary Button',
      buttonTitle: 'Primary',
      default: {
        gradientLeft: `adjust-hue(${colors.primary}, 20deg)`,
        gradientRight: colors.primary,
      },
      cosmic: {
        gradientLeft: `adjust-hue(${colors.primary}, 20deg)`,
        gradientRight: colors.primary,
        bevel: `shade(${colors.primary}, 14%)`,
        shadow: 'rgba (6, 7, 64, 0.5)',
        glow: `adjust-hue(${colors.primary}, 10deg)`,
      },
    }, {
      class: 'btn-hero-warning',
      container: 'warning-container',
      title: 'Warning Button',
      buttonTitle: 'Warning',
      default: {
        gradientLeft: `adjust-hue(${colors.warning}, 10deg)`,
        gradientRight: colors.warning,
      },
      cosmic: {
        gradientLeft: `adjust-hue(${colors.warning}, 10deg)`,
        gradientRight: colors.warning,
        bevel: `shade(${colors.warning}, 14%)`,
        shadow: 'rgba (33, 7, 77, 0.5)',
        glow: `adjust-hue(${colors.warning}, 5deg)`,
      },
    }, {
      class: 'btn-hero-success',
      container: 'success-container',
      title: 'Success Button',
      buttonTitle: 'Success',
      default: {
        gradientLeft: `adjust-hue(${colors.success}, 20deg)`,
        gradientRight: colors.success,
      },
      cosmic: {
        gradientLeft: `adjust-hue(${colors.success}, 20deg)`,
        gradientRight: colors.success,
        bevel: `shade(${colors.success}, 14%)`,
        shadow: 'rgba (33, 7, 77, 0.5)',
        glow: `adjust-hue(${colors.success}, 10deg)`,
      },
    }, {
      class: 'btn-hero-info',
      container: 'info-container',
      title: 'Info Button',
      buttonTitle: 'Info',
      default: {
        gradientLeft: `adjust-hue(${colors.info}, -10deg)`,
        gradientRight: colors.info,
      },
      cosmic: {
        gradientLeft: `adjust-hue(${colors.info}, -10deg)`,
        gradientRight: colors.info,
        bevel: `shade(${colors.info}, 14%)`,
        shadow: 'rgba (33, 7, 77, 0.5)',
        glow: `adjust-hue(${colors.info}, -5deg)`,
      },
    }, {
      class: 'btn-hero-danger',
      container: 'danger-container',
      title: 'Danger Button',
      buttonTitle: 'Danger',
      default: {
        gradientLeft: `adjust-hue(${colors.danger}, -20deg)`,
        gradientRight: colors.danger,
      },
      cosmic: {
        gradientLeft: `adjust-hue(${colors.danger}, -20deg)`,
        gradientRight: colors.danger,
        bevel: `shade(${colors.danger}, 14%)`,
        shadow: 'rgba (33, 7, 77, 0.5)',
        glow: `adjust-hue(${colors.danger}, -10deg)`,
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
        border: colors.primary,
        bevel: '#665ebd',
        shadow: 'rgba (33, 7, 77, 0.5)',
        glow: 'rgba (146, 141, 255, 1)',
      },
    }];
  }

  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }
}
