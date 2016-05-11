import {Component} from '@angular/core';
import {Subscription} from "rxjs/Subscription";

import {ThemeGlobal} from "../../../theme";

@Component({
  selector: 'content-top',
  styles: [require('./contentTop.scss')],
  template: require('./contentTop.html'),
})
export class ContentTop {
  activePageTitle = '';
  private _themeGlobalSubscription:Subscription;

  constructor(private _themeGlobal:ThemeGlobal) {
    this._themeGlobalSubscription = this._themeGlobal.getDataStream().subscribe((data) => {
      this.activePageTitle = data['menu.activeLink'] != null ? data['menu.activeLink'].title : this.activePageTitle;
    });
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this._themeGlobalSubscription.unsubscribe();
  }
}
