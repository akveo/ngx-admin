import { Routes } from '@angular/router';

import { NgaCardTestComponent } from './nga-card-test/nga-card-test.component';
import { NgaLayoutHeaderTestComponent } from './nga-layout-test/nga-layout-header-test.component';

export const routes: Routes = [
  {
    path: '',
    component: NgaCardTestComponent,
  },
  {
    path: 'nga-layout-header',
    component: NgaLayoutHeaderTestComponent,
  },
  {
    path: '**',
    component: NgaCardTestComponent,
  },
];
