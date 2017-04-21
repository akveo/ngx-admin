/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit } from '@angular/core';
import { List } from 'immutable';

import { NgaMenuService } from '../../framework/theme/components/menu/menu.service';
import { NgaMenuItem } from '../../framework/theme/components/menu/menu.options';

@Component({
  selector: 'nga-menu-item1',
  template: `
    <h1>Menu Item #1</h1>
  `,
})

export class NgaMenuItem1Component implements OnInit {
  constructor() { }

  ngOnInit() { }
}

@Component({
  selector: 'nga-menu-item2',
  template: `
    <h1>Menu Item #2</h1>
  `,
})

export class NgaMenuItem2Component implements OnInit {
  constructor() { }

  ngOnInit() { }
}

@Component({
  selector: 'nga-menu-item3',
  template: `
    <router-outlet></router-outlet>
  `,
})
export class NgaMenuItem3Component implements OnInit {
  constructor() { }

  ngOnInit() { }
}

@Component({
  selector: 'nga-menu-item31',
  template: `
    <h1>Menu Item #3.1</h1>
  `,
})
export class NgaMenuItem31Component implements OnInit {
  constructor() { }

  ngOnInit() { }
}

@Component({
  selector: 'nga-menu-item32',
  template: `
    <h1>Menu Item #3.2</h1>
  `,
})
export class NgaMenuItem32Component implements OnInit {
  constructor() { }

  ngOnInit() { }
}

@Component({
  selector: 'nga-menu-item33',
  template: `
    <router-outlet></router-outlet>
  `,
})
export class NgaMenuItem33Component implements OnInit {
  constructor() { }

  ngOnInit() { }
}

@Component({
  selector: 'nga-menu-item331',
  template: `
    <h1>Menu Item #3.3.1</h1>
  `,
})
export class NgaMenuItem331Component implements OnInit {
  constructor() { }

  ngOnInit() { }
}

@Component({
  selector: 'nga-menu-item332',
  template: `
    <h1>Menu Item #3.3.2</h1>
  `,
})
export class NgaMenuItem332Component implements OnInit {
  constructor() { }

  ngOnInit() { }
}

@Component({
  selector: 'nga-menu-item4',
  template: `
    <h1>Menu Item #4</h1>
  `,
})
export class NgaMenuItem4Component implements OnInit {
  constructor() { }

  ngOnInit() { }
}

@Component({
  selector: 'nga-menu-test',
  template: `
    <nga-layout>
      <nga-layout-column>
        <nga-menu tag="firstMenu"></nga-menu>
        <router-outlet></router-outlet>
        <button class="btn btn-primary" id="addBtn" (click)="addMenuItem()">Add</button>
        <button class="btn btn-primary" id="homeBtn" (click)="goToHome()">Home</button>
      </nga-layout-column>
    </nga-layout>
  `,
})
export class NgaMenuTestComponent implements OnInit {

  constructor(private menuService: NgaMenuService) { }

  ngOnInit() {
    this.menuService.itemClickChanges
      .subscribe((data: { tag: string, item: NgaMenuItem }) => console.info(data));
  }

  addMenuItem() {
    this.menuService.addMenuItems(List<NgaMenuItem>([{ title: 'New Menu Item' }]), 'firstMenu');
  }

  goToHome() {
    this.menuService.goToHome();
  }

}
