/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Routes } from '@angular/router';

import { NgaCardTestComponent } from './card-test/card-test.component';
import { NgaLayoutTestComponent } from './layout-test/layout-test.component';
import { NgaLayoutHeaderTestComponent } from './layout-test/layout-header-test.component';
import { NgaLayoutFooterTestComponent } from './layout-test/layout-footer-test.component';
import { NgaTabsetTestComponent } from './tabset-test/tabset-test.component';
import { NgaSidebarTestComponent } from './sidebar-test/sidebar-test.component';
import { NgaSidebarTestOneComponent } from './sidebar-test/sidebar-test-one.component';
import { NgaSidebarTestTwoComponent } from './sidebar-test/sidebar-test-two.component';
import { NgaSidebarTestThreeComponent } from './sidebar-test/sidebar-test-three.component';
import { NgaThemeChangeTestComponent } from './layout-test/theme-change-test.component';
import {
  NgaRouteTabsetTestComponent,
  NgaRouteTabsetTestChild1Component,
  NgaRouteTabsetTestChild2Component,
} from './route-tabset-test/route-tabset-test.component';
import {
  NgaMenuTestComponent,
  NgaMenuItem1Component,
  NgaMenuItem2Component,
  NgaMenuItem3Component,
  NgaMenuItem31Component,
  NgaMenuItem32Component,
  NgaMenuItem33Component,
  NgaMenuItem331Component,
  NgaMenuItem332Component,
  NgaMenuItem4Component,
} from './menu-test/menu-test.component';
import { NgaUserTestComponent } from './user-test/user-test.component';

export const routes: Routes = [
  {
    path: '',
    component: NgaCardTestComponent,
  },
  {
    path: 'layout',
    component: NgaLayoutTestComponent,
  },
  {
    path: 'layout/header',
    component: NgaLayoutHeaderTestComponent,
  },
  {
    path: 'layout/footer',
    component: NgaLayoutFooterTestComponent,
  },
  {
    path: 'layout/change-theme',
    component: NgaThemeChangeTestComponent,
  },
  {
    path: 'tabset',
    component: NgaTabsetTestComponent,
  },
  {
    path: 'tabset/:tab',
    component: NgaTabsetTestComponent,
  },
  {
    path: 'sidebar',
    component: NgaSidebarTestComponent,
  },
  {
    path: 'sidebar/one',
    component: NgaSidebarTestOneComponent,
  },
  {
    path: 'sidebar/two',
    component: NgaSidebarTestTwoComponent,
  },
  {
    path: 'sidebar/three',
    component: NgaSidebarTestThreeComponent,
  },
  {
    path: 'route-tabset',
    component: NgaRouteTabsetTestComponent,
    children: [
      {
        path: '',
        redirectTo: 'tab1',
        pathMatch: 'full',
      },
      {
        path: 'tab1',
        component: NgaRouteTabsetTestChild1Component,
      },
      {
        path: 'tab2',
        component: NgaRouteTabsetTestChild2Component,
      },
    ],
  },
  {
    path: 'menu',
    component: NgaMenuTestComponent,
    children: [
      {
        path: '',
        redirectTo: '1',
        pathMatch: 'full',
      },
      {
        path: '1',
        component: NgaMenuItem1Component,
      },
      {
        path: '2',
        component: NgaMenuItem2Component,
      },
      {
        path: '3',
        component: NgaMenuItem3Component,
        children: [
          {
            path: '',
            redirectTo: '1',
            pathMatch: 'full',
          },
          {
            path: '1',
            component: NgaMenuItem31Component,
          },
          {
            path: '2',
            component: NgaMenuItem32Component,
          },
          {
            path: '3',
            component: NgaMenuItem33Component,
            children: [
              {
                path: '',
                redirectTo: '1',
                pathMatch: 'full',
              },
              {
                path: '1',
                component: NgaMenuItem331Component,
              },
              {
                path: '2',
                component: NgaMenuItem332Component,
              },
            ],
          },
        ],
      },
      {
        path: '4',
        component: NgaMenuItem4Component,
      },
    ],
  },
  {
    path: 'user',
    component: NgaUserTestComponent,
  },
  {
    path: 'auth',
    loadChildren: 'framework/auth/auth.module#NgaAuthModule',
  },
  {
    path: '**',
    component: NgaCardTestComponent,
  },
];
