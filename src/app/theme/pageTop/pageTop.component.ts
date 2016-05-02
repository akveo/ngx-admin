import {Component, ViewEncapsulation} from 'angular2/core';

import {MsgCenter} from '../msgCenter';
import {ProfilePicturePipe} from '../pipes/image/profile-picture.pipe';
import {ScrollPosition} from '../directives/scrollPosition.directive';
import {ThemeGlobal} from "../theme.global";

@Component({
  selector: 'page-top',
  styles: [require('./pageTop.scss')],
  template: require('./pageTop.html'),
  directives: [MsgCenter, ScrollPosition],
  pipes: [ProfilePicturePipe]
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
