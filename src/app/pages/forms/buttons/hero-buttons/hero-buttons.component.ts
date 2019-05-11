import { Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ngx-hero-buttons',
  styleUrls: ['./hero-buttons.component.scss'],
  templateUrl: './hero-buttons.component.html',
})
export class HeroButtonComponent implements OnDestroy {

  themeName = 'default';
  settings: Array<any>;
  themeSubscription: Subscription;

  constructor(private themeService: NbThemeService) {
    this.themeSubscription = this.themeService.getJsTheme().subscribe(theme => {
      this.themeName = theme.name;
      this.init(theme.variables);
    });
  }

  init(colors: any) {
    this.settings = [
      {
        status: 'primary',
        container: 'primary-container',
        title: 'Primary Button',
        buttonTitle: 'Primary',
        default: {
          gradientLeft: `adjust-hue(${colors.primary}, 20deg)`,
          gradientRight: colors.primary,
        },
        corporate: {
          color: colors.primary,
          glow: {
            params: '0 0 20px 0',
            color: 'rgba (115, 161, 255, 0.5)',
          },
        },
        cosmic: {
          gradientLeft: `adjust-hue(${colors.primary}, 20deg)`,
          gradientRight: colors.primary,
          bevel: `shade(${colors.primary}, 14%)`,
          shadow: 'rgba (6, 7, 64, 0.5)',
          glow: {
            params: '0 2px 12px 0',
            color: `adjust-hue(${colors.primary}, 10deg)`,
          },
        },
      },
      {
        status: 'warning',
        container: 'warning-container',
        title: 'Warning Button',
        buttonTitle: 'Warning',
        default: {
          gradientLeft: `adjust-hue(${colors.warning}, 10deg)`,
          gradientRight: colors.warning,
        },
        corporate: {
          color: colors.warning,
          glow: {
            params: '0 0 20px 0',
            color: 'rgba (256, 163, 107, 0.5)',
          },
        },
        cosmic: {
          gradientLeft: `adjust-hue(${colors.warning}, 10deg)`,
          gradientRight: colors.warning,
          bevel: `shade(${colors.warning}, 14%)`,
          shadow: 'rgba (33, 7, 77, 0.5)',
          glow: {
            params: '0 2px 12px 0',
            color: `adjust-hue(${colors.warning}, 5deg)`,
          },
        },
      },
      {
        status: 'success',
        container: 'success-container',
        title: 'Success Button',
        buttonTitle: 'Success',
        default: {
          gradientLeft: `adjust-hue(${colors.success}, 20deg)`,
          gradientRight: colors.success,
        },
        corporate: {
          color: colors.success,
          glow: {
            params: '0 0 20px 0',
            color: 'rgba (93, 207, 227, 0.5)',
          },
        },
        cosmic: {
          gradientLeft: `adjust-hue(${colors.success}, 20deg)`,
          gradientRight: colors.success,
          bevel: `shade(${colors.success}, 14%)`,
          shadow: 'rgba (33, 7, 77, 0.5)',
          glow: {
            params: '0 2px 12px 0',
            color: `adjust-hue(${colors.success}, 10deg)`,
          },
        },
      },
      {
        status: 'info',
        container: 'info-container',
        title: 'Info Button',
        buttonTitle: 'Info',
        default: {
          gradientLeft: `adjust-hue(${colors.info}, -10deg)`,
          gradientRight: colors.info,
        },
        corporate: {
          color: colors.info,
          glow: {
            params: '0 0 20px 0',
            color: 'rgba (186, 127, 236, 0.5)',
          },
        },
        cosmic: {
          gradientLeft: `adjust-hue(${colors.info}, -10deg)`,
          gradientRight: colors.info,
          bevel: `shade(${colors.info}, 14%)`,
          shadow: 'rgba (33, 7, 77, 0.5)',
          glow: {
            params: '0 2px 12px 0',
            color: `adjust-hue(${colors.info}, -5deg)`,
          },
        },
      },
      {
        status: 'danger',
        container: 'danger-container',
        title: 'Danger Button',
        buttonTitle: 'Danger',
        default: {
          gradientLeft: `adjust-hue(${colors.danger}, -20deg)`,
          gradientRight: colors.danger,
        },
        corporate: {
          color: colors.danger,
          glow: {
            params: '0 0 20px 0',
            color: 'rgba (255, 107, 131, 0.5)',
          },
        },
        cosmic: {
          gradientLeft: `adjust-hue(${colors.danger}, -20deg)`,
          gradientRight: colors.danger,
          bevel: `shade(${colors.danger}, 14%)`,
          shadow: 'rgba (33, 7, 77, 0.5)',
          glow: {
            params: '0 2px 12px 0',
            color: `adjust-hue(${colors.danger}, -10deg)`,
          },
        },
      },
    ];
  }

  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }
}
