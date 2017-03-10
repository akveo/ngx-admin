import { Routes } from '@angular/router';

import { NgaCardTestComponent } from './card-test/card-test.component';
import { NgaLayoutHeaderTestComponent } from './layout-test/layout-header-test.component';
import { NgaLayoutFooterTestComponent } from './layout-test/layout-footer-test.component';

export const routes: Routes = [
  {
    path: '',
    component: NgaCardTestComponent,
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
    path: '**',
    component: NgaCardTestComponent,
  },
];
