import {Component, ElementRef, HostListener, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router-deprecated';

import {AppState} from '../../../app.state';
import {layoutSizes} from '../../../theme';
import {SidebarService} from './sidebar.service';

@Component({
  selector: 'sidebar',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./sidebar.scss')],
  template: require('./sidebar.html'),
  providers: [SidebarService],
  directives: [],
  pipes: []
})
export class Sidebar {

  menuItems:Array<any>;
  menuHeight:number;
  isMenuCollapsed:boolean;

  showHoverElem:boolean;
  hoverElemHeight:number;
  hoverElemTop:number;

  outOfArea:number = -200;

  isMenuShouldCollapsed:boolean = false;

  constructor(private _elementRef:ElementRef,
              private _router:Router,
              private _sidebarService:SidebarService,
              private _state:AppState) {

    this.menuItems = this._sidebarService.getMenuItems();
    this._router.root.subscribe((path) => this._selectMenuItem(path));
  }

  ngAfterViewInit() {
    this.updateSidebarHeight();
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize($event) {

    var isMenuShouldCollapsed = $event.target.innerWidth <= layoutSizes.resWidthCollapseSidebar;

    if (this.isMenuShouldCollapsed !== isMenuShouldCollapsed) {
      this.menuCollapseStateChange(isMenuShouldCollapsed);
    }
    this.isMenuShouldCollapsed = isMenuShouldCollapsed;
    this.updateSidebarHeight();
  }

  menuExpand() {
    this.menuCollapseStateChange(false);
  }

  menuCollapse() {
    this.menuCollapseStateChange(true);
  }

  menuCollapseStateChange(isCollapsed) {
    this.isMenuCollapsed = isCollapsed;
    this._state.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);
  }

  hoverItem($event) {
    this.showHoverElem = true;
    this.hoverElemHeight = $event.currentTarget.clientHeight;
    // TODO: get rid of magic 66 constant
    this.hoverElemTop = $event.currentTarget.getBoundingClientRect().top - 66;
  }

  updateSidebarHeight() {
    // TODO: get rid of magic 84 constant
    this.menuHeight = this._elementRef.nativeElement.childNodes[0].clientHeight - 84;
  }

  toggleSubMenu($event, item) {
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

  private _selectMenuItem(currentPath = null) {

    let currentMenu = this._sidebarService.selectMenuItem(this._router, this.menuItems, currentPath);
    this._state.notifyDataChanged('menu.activeLink', currentMenu);
  }
}
