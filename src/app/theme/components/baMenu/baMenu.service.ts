import {Injectable} from '@angular/core';
import {Router, UrlTree, RouterConfig} from '@angular/router';

@Injectable()
export class BaMenuService {

  protected _currentMenuItem = {};

  constructor(private _router:Router) {
  }

  public convertAppRoutes(routes:RouterConfig):any[] {
    return this._convertArrayToItems(routes)
  }

  public convertRoutesToMenus(appRoutes:any[]):any[] {
    return this._skipEmpty(appRoutes);
  }

  public getCurrentItem():any {
    return this._currentMenuItem;
  }

  public selectMenuItem(menuItems:any[]):any[] {
    return this.selectActiveItem(menuItems);
  }

  public selectActivePage(routerItems:any[]):any[] {
    return this.selectActiveItem(routerItems);
  }

  protected selectActiveItem(routerItems:any[]):any[] {
    let items = [];
    routerItems.forEach((item) => {
      this._selectItem(item);

      if (item.selected) {
        this._currentMenuItem = item;
      }

      if (item.children && item.children.length > 0) {
        item.children = this.selectActiveItem(item.children);
      }
      items.push(item);
    });
    return items;
  }

  protected _skipEmpty(items:any[]):any[] {
    let menu = [];
    items.forEach((item) => {
      let menuItem;
      if (item.skip) {
        if (item.children && item.children.length > 0) {
          let subItems = this._skipEmpty(item.children);
          if (subItems.length > 0){
            menuItem = subItems;
          }
        }
      } else {
        menuItem = item;
      }

      if (menuItem) {
        menu.push(menuItem);
      }
    });

    return [].concat.apply([], menu);
  }

  protected _convertArrayToItems(routes:any[], parent?:any):any[] {
    let items = [];
    routes.forEach((route) => {
      items.push(this._convertObjectToItem(route, parent));
    });
    return items;
  }

  protected _convertObjectToItem(object, parent?:any):any {
    let item:any = {};
    if (object.data && object.data.menu) {
      // this is a menu object
      item = object.data.menu;
      item.route = object;
    } else {
      item.route = object;
      item.skip = true;
    }

    item.pageTitle = null;
    if (object.data && object.data.page_title && object.data.page_title != ''){
      item.pageTitle = object.data.page_title;
    }

    item.breadcrumb = [];
    if (object.data && object.data.breadcrumb) {
      if (!Array.isArray(object.data.breadcrumb)){
        object.data.breadcrumb = [object.data.breadcrumb];
      }

      item.breadcrumb = object.data.breadcrumb;
    }


    item.permissions = null;
    if (object.data && object.data.permissions){
      if (Array.isArray(object.data.permissions)){
        item.permissions = object.data.permissions;
      }
      else{
        item.permissions = [object.data.permissions];
      }
    }

    // we have to collect all paths to correctly build the url then
    item.route.paths = parent && parent.route && parent.route.paths ? parent.route.paths.slice(0) : [];
    item.route.paths.push(item.route.path);

    if (object.children && object.children.length > 0) {
      item.children = this._convertArrayToItems(object.children, item);
    }

    let prepared = this._prepareItem(item);

    // if current item is selected or expanded - then parent is expanded too
    if ((prepared.selected || prepared.expanded) && parent) {
      parent.expanded = true;
    }

    return prepared;
  }

  protected _prepareItem(object:any):any {
    let itemUrl = this._router.serializeUrl(this._router.createUrlTree(object.route.paths));
    object.url = object.url ? object.url : '/#' + itemUrl;

    object.target = object.target || '';
    return this._selectItem(object);
  }

  protected _selectItem(object:any):any {
    object.selected = object.url == ('/#' + this._router.url);
    return object;
  }
}
