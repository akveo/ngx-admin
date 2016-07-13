import {Injectable} from '@angular/core';
import {Router, UrlTree, RouterConfig} from '@angular/router';

@Injectable()
export class BaMenuService {

  constructor(private _router:Router) {
  }

  public convertRoutesToMenus(routes:RouterConfig):any[] {
    let items = this._convertArrayToItems(routes);
    return this._skipEmpty(items);
  }

  public selectMenuItem(menuItems:any[]):any[] {
    let items = [];
    menuItems.forEach((item) => {
      this._selectItem(item);

      if (item.children && item.children.length > 0) {
        item.children = this.selectMenuItem(item.children);
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
          menuItem = item.children;
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
      delete item.route.data.menu;
    } else {
      item.route = object;
      item.skip = true;
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
    if (!object.skip) {

      let itemUrl = this._router.serializeUrl(this._router.createUrlTree(object.route.paths));
      object.url = object.url ? object.url : '/#' + itemUrl;

      object.target = object.target || '';
      return this._selectItem(object);
    }

    return object;
  }

  protected _selectItem(object:any):any {
    object.selected = object.url == ('/#' + this._router.url);
    return object;
  }
}
