import {Component} from '@angular/core';

import {AppState} from "../../../app.state";

@Component({
  selector: 'content-top',
  styles: [require('./contentTop.scss')],
  template: require('./contentTop.html'),
})
export class ContentTop {
  activePageTitle = '';

  constructor(private _state:AppState) {
    this._state.subscribe('menu.activeLink', (activeLink) => {
      if (activeLink) {
        this.activePageTitle = activeLink.title;
      }
    });
  }
}
