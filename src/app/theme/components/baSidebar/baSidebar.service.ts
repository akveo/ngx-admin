import {Injectable} from '@angular/core';
import {menuItems} from '../../../app.menu';
import {Router, UrlTree} from "@angular/router";

@Injectable()
export class BaSidebarService {

  private _router:Router;

  public getMenuItems():Array<Object> {
    return menuItems;
  }

  public setRouter(router:Router):BaSidebarService {
    this._router = router;
    return this;
  }

  public selectMenuItem(items:Array<any>) {
    let currentMenu;

    let assignCurrent = (menu) => (menu.selected ? currentMenu = menu : null);

    items.forEach((menu:any) => {

      this._selectItem([menu.path], menu);
      assignCurrent(menu);

      if (menu.subMenu) {
        menu.subMenu.forEach((subMenu) => {
          this._selectItem([menu.path, subMenu.path], subMenu, menu);
          assignCurrent(subMenu);
        });
      }
    });
    return currentMenu;
  }

  private _selectItem(instructions, item, parentMenu = null) {
    let route = this._generateRoute(instructions);
    item.selected = !item.disabled && this._isCurrent(route);
    if (parentMenu) {
      parentMenu.expanded = parentMenu.expanded || item.selected;
    }
  }

  private _isCurrent(route:UrlTree):boolean {
    if (!route)
      return false;

    return this._router.url === this._router.serializeUrl(route);
  }

  private _generateRoute(instructions:any[]):UrlTree {
    if (!instructions)
      return null;

    instructions = instructions.filter(item => !!item);

    if (instructions.length === 0)
      return null;

    return this._router.createUrlTree(instructions);
  }
}
