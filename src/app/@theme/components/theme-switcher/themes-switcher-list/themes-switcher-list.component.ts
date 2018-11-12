import {Component, Input} from '@angular/core';
import { NbThemeService, NbPopoverDirective } from '@nebular/theme';
import { AnalyticsService } from '../../../../@core/utils/analytics.service';
import { NbJSThemeOptions } from '@nebular/theme/services/js-themes/theme.options';

@Component({
  selector: 'ngx-theme-switcher-list',
  template: `
    <ul class="themes-switcher-list">
      <li class="themes-switcher-item"
          *ngFor="let theme of themes"
          (click)="onToggleTheme(theme.key)">
        <i class="nb-drop" [ngClass]="'drop-icon-' + theme.key"></i>
        <span>{{ theme.title }}</span>
      </li>
    </ul>
  `,
  styleUrls: ['./theme-switcher-list.component.scss'],
})
export class ThemeSwitcherListComponent {

  @Input() popover: NbPopoverDirective;

  theme: NbJSThemeOptions;

  themes = [
    {
      title: 'Light',
      key: 'default',
    },
    {
      title: 'Cosmic',
      key: 'cosmic',
    },
    {
      title: 'Corporate',
      key: 'corporate',
    },
  ];

  constructor(
    private themeService: NbThemeService,
    private analyticsService: AnalyticsService,
  ) {}

  onToggleTheme(themeKey: string) {
    this.themeService.changeTheme(themeKey);
    this.analyticsService.trackEvent('switchTheme');
    this.popover.hide();
  }
}
