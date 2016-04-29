import {Component, ElementRef, HostListener, ViewEncapsulation, Input} from 'angular2/core';
import {Router} from 'angular2/router';

import {layoutSizes} from '../theme.constants';
import {SidebarService} from './sidebar.service';
import {SidebarStateService} from './sidebarState.service';

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

  @Input('routes') routes;

  menuItems:Array<any>;
  menuHeight:number;
  isMenuCollapsed:boolean;

  showHoverElem:boolean;
  hoverElemHeight:number;
  hoverElemTop:number;

  outOfArea:number = -200;

  isMenuShouldCollapsed:boolean = false;

  constructor(private elementRef:ElementRef,
              private router:Router,
              private _sidebarService:SidebarService,
              private _sidebarStateService:SidebarStateService) {
  }

  ngOnInit() {
    this.menuItems = this._sidebarService.getMenuItems(this.routes);
    this.selectMenuItem();
  }

  // TODO: is it really the best event for this kind of things?
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
    this._sidebarStateService.stateChanged(this.isMenuCollapsed);
  }

  hoverItem($event) {
    this.showHoverElem = true;
    this.hoverElemHeight = $event.currentTarget.clientHeight;
    // TODO: get rid of magic 66 constant
    this.hoverElemTop = $event.currentTarget.getBoundingClientRect().top - 66;
  }

  updateSidebarHeight() {
    // TODO: get rid of magic 84 constant
    this.menuHeight = this.elementRef.nativeElement.childNodes[0].clientHeight - 84;
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

  private selectMenuItem() {
    let isCurrent = (instruction) => (instruction ? this.router.isRouteActive(this.router.generate([instruction])) : false);

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
