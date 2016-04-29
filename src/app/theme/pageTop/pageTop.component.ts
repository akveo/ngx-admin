import {Component, ViewEncapsulation} from 'angular2/core';
import {Subscription} from 'rxjs/Subscription';

import {MsgCenter} from '../msgCenter';
import {ProfilePicturePipe} from '../pipes/image/profile-picture.pipe';
import {ScrollPosition} from '../directives/scrollPosition.directive';
import {SidebarStateService} from '../sidebar/sidebarState.service'

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

  private _sidebarStateSubscription:Subscription;

  constructor(private _sidebarStateService:SidebarStateService) {
    this._sidebarStateSubscription = this._sidebarStateService.getStateStream().subscribe((isCollapsed) => this.isMenuCollapsed = isCollapsed);
  }

  toggleMenu() {
    this.isMenuCollapsed = !this.isMenuCollapsed;
    this._sidebarStateService.stateChanged(this.isMenuCollapsed);
  }

  scrolledChanged(isScrolled) {
    this.isScrolled = isScrolled;
  }
}
