import {Component, ElementRef, HostListener} from 'angular2/core';

import {layoutSizes} from '../theme.constants';
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

  showHoverElem: boolean;
  hoverElemHeight: number;
  hoverElemTop: number;

  isMenuShouldCollapsed: boolean = false;

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

  @HostListener('window:resize', ['$event'])
  onWindowResize($event) {

    var isMenuShouldCollapsed = $event.target.innerWidth <= layoutSizes.resWidthCollapseSidebar;
    var scopeApplied = false;

    if (this.isMenuShouldCollapsed !== isMenuShouldCollapsed) {
      this.menuHeight = this.elementRef.nativeElement.childNodes[0].clientHeight - 84;
      this.isMenuCollapsed = isMenuShouldCollapsed;
      scopeApplied = true;
    }
    if (!scopeApplied) {
      this.menuHeight = this.elementRef.nativeElement.childNodes[0].clientHeight - 84;
    }
    this.isMenuShouldCollapsed = isMenuShouldCollapsed;
  }

  menuExpand () {
    this.isMenuCollapsed = false;
  }

  menuCollapse () {
    this.isMenuCollapsed = true;
  }

  hoverItem = function ($event) {
    this.showHoverElem = true;
    this.hoverElemHeight =  $event.currentTarget.clientHeight;
    // TODO: get rid of magic 66 constant
    this.hoverElemTop = $event.currentTarget.getBoundingClientRect().top - 66;
  }

  toggleSubMenu ($event, item) {
    var submenu = $($event.currentTarget).next();

    if (this.isMenuCollapsed) {
      this.menuExpand();
      if (!item.expanded) {
        item.expanded = !item.expanded;
        submenu.slideToggle();
      }
    } else {
      item.expanded = !item.expanded;
      submenu.slideToggle();
    }
    return false;
  }

  private selectMenuItem() {
    let isCurrent = (instruction) => (instruction ? this.router.isRouteActive(this.router.generate([instruction])): false);

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
