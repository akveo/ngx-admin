/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'nga-route-tabset-test-child1',
  template: `<h1>Child 1</h1>`,
})
export class NgaRouteTabsetTestChild1Component {
}

@Component({
  selector: 'nga-route-tabset-test-child2',
  template: `<h1>Child 2</h1>`,
})
export class NgaRouteTabsetTestChild2Component {
}

@Component({
  selector: 'nga-route-tabset-test',
  template: `
    <nga-route-tabset [tabs]="tabs"></nga-route-tabset>
    <nga-route-tabset [tabs]="tabs" fullWidth></nga-route-tabset>
  `,
})
export class NgaRouteTabsetTestComponent {
  tabs: any[] = [
    {
      title: 'Tab #1',
      route: '/route-tabset/tab1',
    },
    {
      title: 'Tab #2',
      route: '/route-tabset/tab2',
    },
  ];
}
