import {Component, ViewEncapsulation, Input, Output, EventEmitter} from '@angular/core';
import {Router, RouterConfig, NavigationEnd} from '@angular/router';
import {Subscription} from 'rxjs/Rx';

import {BaSlimScroll} from '../../../theme/directives';
import {BaMenuService} from './baMenu.service';
import {BaMenuItem} from './components/baMenuItem';
import {AppState} from '../../../app.state';

@Component({
  selector: 'ba-menu',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./baMenu.scss')],
  template: require('./baMenu.html'),
  providers: [BaMenuService],
  directives: [BaMenuItem, BaSlimScroll]
})
export class BaMenu {

  @Input() appRoutes:RouterConfig = [];
  @Input() sidebarCollapsed:boolean = false;
  @Input() menuHeight:number;

  @Output() expandMenu = new EventEmitter<any>();

  public routerItems:any[];
  public menuItems:any[];
  public showHoverElem:boolean;
  public hoverElemHeight:number;
  public hoverElemTop:number;
  protected _onRouteChange:Subscription;
  public outOfArea:number = -200;

  constructor(private _router:Router, private _service:BaMenuService, private _state:AppState) {

    this._onRouteChange = this._router.events.subscribe((event) => {

      if (event instanceof NavigationEnd) {
        if (this.menuItems) {
          this.selectActiveRouteAndNotify();
        } else {
          // on page load we have to wait as event is fired before menu elements are prepared
          setTimeout(() => this.selectActiveRouteAndNotify());
        }
      }
    });
  }

  public selectActiveRouteAndNotify():void {
    if (this.routerItems) {
      this.menuItems = this._service.selectMenuItem(this.menuItems);
      this.routerItems = this._service.selectActivePage(this.routerItems);
      this._state.notifyDataChanged('menu.activeLink', this._service.getCurrentItem());
    }
  }

  public ngOnInit():void {
    this.routerItems = this._service.convertAppRoutes(this.appRoutes);
    this.menuItems = this._service.convertRoutesToMenus(this.routerItems);
  }

  public ngOnDestroy():void {
    this._onRouteChange.unsubscribe();
  }

  public hoverItem($event):void {
    this.showHoverElem = true;
    this.hoverElemHeight = $event.currentTarget.clientHeight;
    // TODO: get rid of magic 66 constant
    this.hoverElemTop = $event.currentTarget.getBoundingClientRect().top - 66;
  }

  public toggleSubMenu($event):boolean {
    var submenu = jQuery($event.currentTarget).next();

    if (this.sidebarCollapsed) {
      this.expandMenu.emit(null);
      if (!$event.item.expanded) {
        $event.item.expanded = true;
      }
    } else {
      $event.item.expanded = !$event.item.expanded;
      submenu.slideToggle();
    }

    return false;
  }
}
