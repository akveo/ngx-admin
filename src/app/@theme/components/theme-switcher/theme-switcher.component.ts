import { Component, OnInit, Input } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { NbJSThemeOptions } from '@nebular/theme/services/js-themes/theme.options';
import { AnalyticsService } from '../../../@core/utils/analytics.service';

@Component({
  selector: 'ngx-theme-switcher',
  template: `
    <ngx-switcher
      [firstValue]="false"
      [secondValue]="true"
      [firstValueLabel]="'Light'"
      [secondValueLabel]="'Cosmic'"
      [value]="currentBoolTheme()"
      (valueChange)="toggleTheme($event)"
      [vertical]="vertical"
    >
    </ngx-switcher>
  `,
})
export class ThemeSwitcherComponent implements OnInit {
  theme: NbJSThemeOptions;

  firstTheme = 'default';
  secondTheme = 'cosmic';

  @Input() vertical: boolean = false;

  constructor(
    private themeService: NbThemeService,
    private analyticsService: AnalyticsService,
  ) {}

  ngOnInit() {
    this.themeService.getJsTheme()
      .subscribe((theme: NbJSThemeOptions) => this.theme = theme);
  }

  toggleTheme(theme: boolean) {
    const themeName = this.boolToTheme(theme);
    this.themeService.changeTheme(themeName);

    this.analyticsService.trackEvent('switchTheme');
  }

  currentBoolTheme() {
    return this.themeToBool(this.theme);
  }

  private themeToBool(theme: NbJSThemeOptions) {
    return theme.name === this.secondTheme;
  }

  private boolToTheme(theme: boolean) {
    return theme ? this.secondTheme : this.firstTheme;
  }
}
