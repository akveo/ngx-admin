import { Component } from '@angular/core';

import { GlobalState } from '../../../global.state';

@Component({
  selector: 'ba-content-top',
  styleUrls: ['./ba-content-top.component.scss'],
  templateUrl: './ba-content-top.component.html',
})
export class BaContentTop {

  public activePageTitle: string = '';

  constructor(private _state: GlobalState) {
    this._state.subscribe('menu.activeLink', (activeLink) => {
      if (activeLink) {
        this.activePageTitle = activeLink.title;
      }
    });
  }
}
