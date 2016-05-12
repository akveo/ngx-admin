import {Component, ViewEncapsulation} from '@angular/core';

import {ThemeGlobal} from '../../../theme';
import {ProfilePicturePipe} from '../../pipes';
import {MsgCenter} from '../../components/msgCenter';
import {ScrollPosition} from '../../directives';

@Component({
  selector: 'page-top',
  styles: [require('./pageTop.scss')],
  template: require('./pageTop.html'),
  directives: [MsgCenter, ScrollPosition],
  pipes: [ProfilePicturePipe],
  encapsulation: ViewEncapsulation.None
})
export class PageTop {
  isScrolled:Boolean = false;
  isMenuCollapsed:boolean = false;


  constructor(private _themeGlobal:ThemeGlobal) {
  }

  toggleMenu() {
    this.isMenuCollapsed = !this.isMenuCollapsed;
    this._themeGlobal.setData('menu.isCollapsed', this.isMenuCollapsed);
  }

  scrolledChanged(isScrolled) {
    this.isScrolled = isScrolled;
  }
}
