import {Component, ViewEncapsulation} from '@angular/core';

import {AppState} from '../../../app.state';
import {BaProfilePicturePipe} from '../../pipes';
import {BaMsgCenter} from '../../components/baMsgCenter';
import {BaScrollPosition} from '../../directives';

@Component({
  selector: 'page-top',
  styles: [require('./pageTop.scss')],
  template: require('./pageTop.html'),
  directives: [BaMsgCenter, BaScrollPosition],
  pipes: [BaProfilePicturePipe],
  encapsulation: ViewEncapsulation.None
})
export class PageTop {

  isScrolled:Boolean = false;
  isMenuCollapsed:boolean = false;

  constructor(private _state:AppState) {
    this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
      this.isMenuCollapsed = isCollapsed;
    });
  }

  toggleMenu() {
    this.isMenuCollapsed = !this.isMenuCollapsed;
    this._state.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);
  }

  scrolledChanged(isScrolled) {
    this.isScrolled = isScrolled;
  }
}
