import {Component, ElementRef} from 'angular2/core';

import {SidebarService} from './sidebar.service';
import {Router} from 'angular2/router';

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
  router: Router;

  menuItems: Array<any>;
  menuHeight: number;
  isMenuCollapsed: boolean;

  constructor(el: ElementRef, router: Router, private _sidebarService: SidebarService) {
    this.elementRef = el;
    this.router = router;
    this.menuItems = this._sidebarService.getMenuItems();
  }

  ngOnInit() {
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

  private isActive(instruction: any[]): boolean {
    return ;
  }

  private selectMenuItem() {
    let isCurrent = (instruction) => (this.router.isRouteActive(this.router.generate([instruction])));

    this.menuItems.forEach(function (menu) {

      menu.selected = isCurrent(menu.name);
      menu.expanded = menu.expanded || menu.selected;

      if (menu.subMenu) {
        menu.subMenu.forEach(function (subMenu) {
          subMenu.selected = isCurrent(subMenu.name) && !subMenu.disabled;
        });
      }
    });
  }
}
