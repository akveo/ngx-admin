/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { Component, OnInit, OnDestroy } from '@angular/core';
import { List } from 'immutable';
import { Subscription } from 'rxjs/Subscription';

import { NgaMenuService } from '../../framework/theme/components/menu/menu.service';
import { NgaMenuItem } from '../../framework/theme/components/menu/menu.options';

@Component({
  selector: 'nga-menu-item1',
  template: `
    <h1>Menu Item #1</h1>
  `,
})

export class NgaMenuItem1Component {
}

@Component({
  selector: 'nga-menu-item2',
  template: `
    <h1>Menu Item #2</h1>
  `,
})

export class NgaMenuItem2Component {
}

@Component({
  selector: 'nga-menu-item3',
  template: `
    <router-outlet></router-outlet>
  `,
})
export class NgaMenuItem3Component {
}

@Component({
  selector: 'nga-menu-item31',
  template: `
    <h1>Menu Item #3.1</h1>
  `,
})
export class NgaMenuItem31Component {
}

@Component({
  selector: 'nga-menu-item32',
  template: `
    <h1>Menu Item #3.2</h1>
  `,
})
export class NgaMenuItem32Component {
}

@Component({
  selector: 'nga-menu-item33',
  template: `
    <router-outlet></router-outlet>
  `,
})
export class NgaMenuItem33Component {
}

@Component({
  selector: 'nga-menu-item331',
  template: `
    <h1>Menu Item #3.3.1</h1>
  `,
})
export class NgaMenuItem331Component {
}

@Component({
  selector: 'nga-menu-item332',
  template: `
    <h1>Menu Item #3.3.2</h1>
  `,
})
export class NgaMenuItem332Component {
}

@Component({
  selector: 'nga-menu-item4',
  template: `
    <h1>Menu Item #4</h1>
  `,
})
export class NgaMenuItem4Component {
}

@Component({
  selector: 'nga-menu-test',
  template: `
    <nga-layout>
      <nga-layout-column>
        <nga-menu tag="firstMenu" [items]="menuItems"></nga-menu>
        <router-outlet></router-outlet>
        <button class="btn btn-primary" id="addBtn" (click)="addMenuItem()">Add</button>
        <button class="btn btn-primary" id="homeBtn" (click)="navigateHome()">Home</button>
      </nga-layout-column>
    </nga-layout>
  `,
})
export class NgaMenuTestComponent implements OnInit, OnDestroy {

  menuItems = List<NgaMenuItem>([{
    title: 'Menu Items',
    group: true,
    icon: 'ion ion-heart',
  }, {
    title: 'Menu #1',
    link: '/menu/1',
  }, {
    title: 'Menu #2',
    link: '/menu/2',
    icon: 'ion ion-ionic',
  }]);

  private itemClickSubscription: Subscription;

  constructor(private menuService: NgaMenuService) { }

  ngOnInit() {
    this.itemClickSubscription = this.menuService.onItemClick()
      .subscribe((data: { tag: string, item: NgaMenuItem }) => console.info(data));

    this.menuService.addItems(List<NgaMenuItem>([{
      title: 'Menu #3',
      children: List<NgaMenuItem>([{
        title: 'Menu #3.1',
        link: '/menu/3/1',
        icon: 'ion ion-heart',
      }, {
        title: 'Menu #3.2',
        link: '/menu/3/2',
      }, {
        title: 'Menu #3.3',
        icon: 'ion ion-icecream',
        children: List<NgaMenuItem>([{
          title: 'Menu #3.3.1',
          link: '/menu/3/3/1',
        }, {
          title: 'Menu #3.3.2',
          link: '/menu/3/3/2',
          icon: 'ion ion-happy-outline',
          home: true,
        }, {
          title: '@nga/theme',
          target: '_blank',
          url: 'https://github.com/akveo/ng2-admin',
        }]),
      }]),
    }]), 'firstMenu');
  }

  ngOnDestroy() {
    this.itemClickSubscription.unsubscribe();
  }

  addMenuItem() {
    this.menuService.addItems(List<NgaMenuItem>([{ title: 'New Menu Item' }]), 'firstMenu');
  }

  navigateHome() {
    this.menuService.navigateHome('firstMenu');
  }

}
