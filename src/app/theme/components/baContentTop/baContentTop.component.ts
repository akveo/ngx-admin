import { Component } from '@angular/core';

import { GlobalState } from '../../../global.state';

@Component({
  selector: 'ba-content-top',
  styleUrls: ['./baContentTop.scss'],
  templateUrl: './baContentTop.html',
})
export class BaContentTop {

  public activePageTitle:string = '';
  public activeItem: any;

  constructor(private _state: GlobalState) {
    this._state.subscribe('menu.activeLink', (activeItem) => {
      if (activeItem) {
        this.activeItem = activeItem;
      }
    });
  }
}
