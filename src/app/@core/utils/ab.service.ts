import { Injectable } from '@angular/core';

import { NbThemeService } from '@nebular/theme';
import { fromEvent as observableFromEvent } from 'rxjs/observable/fromEvent';

@Injectable()
export class AbService {

  private static readonly THEME_CHANGE = 'variant-load'; // TODO: rename next time
  private static readonly THEME_CHANGE_ENABLED = false;

  constructor(private themeService: NbThemeService) {

    if (AbService.THEME_CHANGE_ENABLED) {
      this.abThemeChange();
    }
  }

  abThemeChange() {
    observableFromEvent(document, AbService.THEME_CHANGE)
      .subscribe(() => {
        this.themeService.changeTheme('default');
      });
  }
}
