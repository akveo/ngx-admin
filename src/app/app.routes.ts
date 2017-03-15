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
    path: 'layout-header',
    component: NgaLayoutHeaderTestComponent,
  },
  {
    path: 'layout-footer',
    component: NgaLayoutFooterTestComponent,
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
    path: '**',
    component: NgaCardTestComponent,
  },
];
