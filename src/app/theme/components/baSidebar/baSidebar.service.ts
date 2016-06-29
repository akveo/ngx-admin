import {Injectable} from '@angular/core';
import {menuItems} from '../../../app.menu';

@Injectable()
export class BaSidebarService {

  private _router;

  public getMenuItems():Array<Object> {
    return menuItems;
  }

  public setRouter(router): BaSidebarService {
    this._router = router;
    return this;
  }

  public selectMenuItem(items:Array<any>) {
    let currentMenu;

    let assignCurrent = (menu) => (menu.selected ? currentMenu = menu : null);

    items.forEach((menu: any) => {

      this._selectItem([menu.component], menu);
      assignCurrent(menu);

      if (menu.subMenu) {
        menu.subMenu.forEach((subMenu) => {
          this._selectItem([menu.component, subMenu.component], subMenu, menu);
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

  private _isCurrent(route) {
    return route ? this._router.isRouteActive(route) : false;
  }

  private _generateRoute(instructions) {
    return instructions.filter(i => typeof i !== 'undefined').length > 0 ? this._router.generate(instructions) : null;
  }
}
