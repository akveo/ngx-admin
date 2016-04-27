import {Component, ElementRef} from 'angular2/core';

import {SidebarService} from './sidebar.service';

@Component({
    selector: 'sidebar',
    styles: [ require('./sidebar.scss') ],
    template: require('./sidebar.html'),
    providers: [SidebarService],
    directives: [],
    pipes: []
})
export class Sidebar {
  menuItems = [];
  menuHeight = 0;

  constructor(el: ElementRef, private _sidebarService: SidebarService) {
    this.menuItems = this._sidebarService.getMenuItems();
    // this.menuHeight = el.nativeElement.childNodes[0].clientHeight - 84;
    
  }
}
