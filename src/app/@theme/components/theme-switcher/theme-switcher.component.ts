import { Component, Input, ViewChild } from '@angular/core';
import { NbPopoverDirective } from '@nebular/theme';
import { NbJSThemeOptions } from '@nebular/theme/services/js-themes/theme.options';

import { ThemeSwitcherListComponent } from './themes-switcher-list/themes-switcher-list.component';

@Component({
  selector: 'ngx-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.scss'],
})
export class ThemeSwitcherComponent {
  @ViewChild(NbPopoverDirective) popover: NbPopoverDirective;

  @Input() showTitle: boolean = true;

  switcherListComponent = ThemeSwitcherListComponent;
  theme: NbJSThemeOptions;
}
