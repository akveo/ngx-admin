import {Component, ElementRef, HostListener, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router-deprecated';

import {AppState} from '../../../app.state';
import {layoutSizes} from '../../../theme';
import {BaSidebarService} from './baSidebar.service';

@Component({
  selector: 'ba-sidebar',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./sidebar.scss')],
  template: require('./sidebar.html'),
  providers: [BaSidebarService]
})
export class BaSidebar {

  public menuItems:Array<any>;
  public menuHeight:number;
  public isMenuCollapsed:boolean;

  public showHoverElem:boolean;
  public hoverElemHeight:number;
  public hoverElemTop:number;

  public outOfArea:number = -200;

  public isMenuShouldCollapsed:boolean = false;

  constructor(private _elementRef:ElementRef,
              private _router:Router,
              private _sidebarService:BaSidebarService,
              private _state:AppState) {

    this.menuItems = this._sidebarService.getMenuItems();
    this._router.root.subscribe((path) => this._selectMenuItem(path));
  }

  public ngOnInit():void {
    if (this._shouldMenuCollapse()) {
      this.menuCollapse();
    }
  }

  public ngAfterViewInit():void {
    this.updateSidebarHeight();
  }

  @HostListener('window:resize')
  public onWindowResize():void {

    var isMenuShouldCollapsed = this._shouldMenuCollapse();

    if (this.isMenuShouldCollapsed !== isMenuShouldCollapsed) {
      this.menuCollapseStateChange(isMenuShouldCollapsed);
    }
    this.isMenuShouldCollapsed = isMenuShouldCollapsed;
    this.updateSidebarHeight();
  }

  public menuExpand():void {
    this.menuCollapseStateChange(false);
  }

  public menuCollapse():void {
    this.menuCollapseStateChange(true);
  }

  public menuCollapseStateChange(isCollapsed):void {
    this.isMenuCollapsed = isCollapsed;
    this._state.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);
  }

  public hoverItem($event):void {
    this.showHoverElem = true;
    this.hoverElemHeight = $event.currentTarget.clientHeight;
    // TODO: get rid of magic 66 constant
    this.hoverElemTop = $event.currentTarget.getBoundingClientRect().top - 66;
  }

  public updateSidebarHeight():void {
    // TODO: get rid of magic 84 constant
    this.menuHeight = this._elementRef.nativeElement.childNodes[0].clientHeight - 84;
  }

  public toggleSubMenu($event, item):boolean {
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

  private _shouldMenuCollapse():boolean {
    return window.innerWidth <= layoutSizes.resWidthCollapseSidebar;
  }

  private _selectMenuItem(currentPath = null):void {

    let currentMenu = this._sidebarService.setRouter(this._router).selectMenuItem(this.menuItems, currentPath);
    this._state.notifyDataChanged('menu.activeLink', currentMenu);
  }
}
