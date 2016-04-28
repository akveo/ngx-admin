import {Component, ElementRef} from 'angular2/core';

import {SidebarService} from './sidebar.service';
import {Location} from 'angular2/router';

@Component({
    selector: 'sidebar',
    styles: [ require('./sidebar.scss') ],
    template: require('./sidebar.html'),
    providers: [SidebarService],
    directives: [],
    pipes: []
})
export class Sidebar {
  elementRef: ElementRef;
  location: Location;

  menuItems: Array<any>;
  menuHeight: number;
  isMenuCollapsed: boolean;

  constructor(el: ElementRef, location: Location, private _sidebarService: SidebarService) {
    this.elementRef = el;
    this.location = location;
    this.menuItems = this._sidebarService.getMenuItems();

    this.selectMenuItem();
  }

  // TODO: is it really the best event for this kind of things?
  ngAfterViewInit() {
    // TODO: get rid of magic 84 constant
    this.menuHeight = this.elementRef.nativeElement.childNodes[0].clientHeight - 84;
  }

  menuExpand () {
    this.isMenuCollapsed = false;
  }

  menuCollapse () {
    this.isMenuCollapsed = true;
  }

  toggleSubMenu ($event, item) {
    var submenu = $($event.currentTarget).next();

    if (this.isMenuCollapsed) {
      this.menuExpand();
      if (!item.expanded) {
        setTimeout(function () {
          item.expanded = !item.expanded;

          // TODO: incomplete
          // submenu.slideToggle();
        }, 0);
      }
    } else {
      item.expanded = !item.expanded;

      // TODO: incomplete
      // submenu.slideToggle();
    }
    return false;
  }

  private selectMenuItem() {
    let currentPath = this.location.path();
    let isCurrent = (root) => (('#' + currentPath).indexOf(root) == 0);

    this.menuItems.forEach(function (menu) {
      menu.selected = isCurrent(menu.root);
      menu.expanded = menu.expanded || menu.selected;
      console.log(menu);
      if (menu.subMenu) {
        menu.subMenu.forEach(function (subMenu) {
          subMenu.selected = isCurrent(subMenu.root) && !subMenu.disabled;
        });
      }
    });
  }
}
