import { Component, OnInit } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { MenuItem } from './menu-item';
import { MENU_ITEMS } from './pages-menu';
import { HttpErrorResponse } from '@angular/common/http';
import { MenuService } from '../@core/data/menu.service';

@Component({
  selector: 'ngx-pages',
  template: `
    <ngx-sample-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-sample-layout>
  `,
})

export class PagesComponent implements OnInit {

  public menu = [];
  public results = [];
  object: MenuItem;
  hijo: MenuItem;
  hijo2: MenuItem;

  constructor(private translate: TranslateService, private menu_ws: MenuService) { }

  ngOnInit() {
    this.menu_ws.get('Menu%20campus/campus').subscribe(
      data => {
        for (let i = 0; i < data.length; i++) {
          if (!data[i].Opciones) {
            this.object = {
              title: '',
              icon: '',
              link: '',
              home: false,
              key: '',
            };
            this.object.title = data[i].Nombre;
            this.object.key = data[i].Nombre;
            this.object.link = data[i].Url;
            if (i === 0) {
              this.object.title = 'Dashboard';
              this.object.icon = 'nb-home';
              this.object.home = true;
            }
          } else {
            this.object = {
              title: '',
              icon: '',
              link: '',
              home: false,
              key: '',
              children: [],
            };
            this.object.title = data[i].Nombre;
            this.object.key = data[i].Nombre;
            this.object.link = data[i].Url;
            if (i === 0) {
              this.object.title = 'Dashboard';
              this.object.icon = 'nb-home';
              this.object.home = true;
            }
            for (let j = 0; j < data[i].Opciones.length; j++) {
              if (!data[i].Opciones[j].Opciones) {
                this.hijo = {
                  title: '',
                  icon: '',
                  link: '',
                  home: false,
                  key: '',
                };
                this.hijo.title = data[i].Opciones[j].Nombre;
                this.hijo.key = data[i].Opciones[j].Nombre;
                this.hijo.link = data[i].Opciones[j].Url;
              }
              this.object.children.push(this.hijo);
              // console.log('hijo: ' + data[i].Opciones[j]);
            }
          }
          this.results.push(this.object);
          // console.log(data[i]);
        }
         this.menu = MENU_ITEMS;
        // this.menu = this.results;
        this.translateMenu();
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          // console.log('El error ocurrió en el lado del cliente.');
        } else {
          // console.log('El error ocurrió en el lado del servidor.');
        }
        this.menu = MENU_ITEMS;
        this.translateMenu();
      },
    );
    this.translateMenu();
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => { // Live reload
      this.translateMenu();
    });
  }

  private translateMenu(): void {
    this.menu.forEach((menuItem: MenuItem) => {
      this.translateMenuTitle(menuItem);
    });
  }

  /**
   * Translates one root menu item and every nested children
   * @param menuItem
   * @param prefix
   */
  private translateMenuTitle(menuItem: MenuItem, prefix: string = ''): void {
    let key = '';
    try {
      key = (prefix !== '')
        ? PagesComponent.getMenuItemKey(menuItem, prefix)
        : PagesComponent.getMenuItemKey(menuItem);
    } catch (e) {
      // Key not found, don't change the menu item
      return;
    }

    this.translate.get(key).subscribe((translation: string) => {
      menuItem.title = translation;
    });
    if (menuItem.children != null) {
      // apply same on every child
      menuItem.children.forEach((childMenuItem: MenuItem) => {
        // We remove the nested key and then use it as prefix for every child
        this.translateMenuTitle(childMenuItem, PagesComponent.trimLastSelector(key));
      });
    }
  }

  /**
   * Resolves the translation key for a menu item. The prefix must be supplied for every child menu item
   * @param menuItem
   * @param prefix
   * @returns {string}
   */
  private static getMenuItemKey(menuItem: MenuItem, prefix: string = 'MENU'): string {
    if (menuItem.key == null) {
      throw new Error('Key not found');
    }

    const key = menuItem.key.toLowerCase();
    if (menuItem.children != null) {
      return prefix + '.' + key + '.' + key; // Translation is nested
    }
    return prefix + '.' + key;
  }

  /**
   * Used to remove the nested key for translations
   * @param key
   * @returns {string}
   */
  private static trimLastSelector(key: string): string {
    const keyParts = key.split('.');
    keyParts.pop();
    return keyParts.join('.');
  }
}
