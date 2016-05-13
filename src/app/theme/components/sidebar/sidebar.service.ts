import {Injectable} from '@angular/core';
import {menuItems} from '../../../app.menu';

@Injectable()
export class SidebarService {

  getMenuItems() {
    return menuItems;
  }

  selectMenuItem(router, items:Array<any>, currentPath:string) {
    let currentMenu;

    let assignCurrent = (menu) => (menu.selected ? currentMenu = menu : null);

    items.forEach((menu: any) => {

      menu.selected = this._isCurrent(router, this._generateRoute(router, [menu.component]));
      menu.expanded = menu.expanded || menu.selected;
      assignCurrent(menu);

      if (menu.subMenu) {
        menu.subMenu.forEach((subMenu) => {
          let route = this._generateRoute(router, [menu.component, subMenu.component]);
          subMenu.selected = !subMenu.disabled && this._isCurrent(router, route) && this._resolvePath(route, '') == currentPath;
          assignCurrent(menu);
        });
      }
    });
    return currentMenu;
  }

  private _isCurrent(router, route) {
    return route ? router.isRouteActive(route) : false;
  }

  private _generateRoute(router, instructions) {
    return instructions.filter(i => typeof i !== 'undefined').length > 0 ? router.generate(instructions) : null;
  }

  private _resolvePath(instruction, collected) {
    if (instruction !== null) {
      collected += instruction.urlPath + '/';
      return this._resolvePath(instruction.child, collected)
    } else {
      return collected.slice(0, -1);
    }
  }
}
