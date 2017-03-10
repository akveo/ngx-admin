import { Routes } from '@angular/router';

import { NgaCardTestComponent } from './card-test/card-test.component';
import { NgaLayoutTestComponent } from './layout-test/layout-test.component';

export const routes: Routes = [
  {
    path: '',
    component: NgaCardTestComponent,
  },
  {
    path: 'nga-layout',
    component: NgaLayoutTestComponent,
  },
  {
    path: '**',
    component: NgaCardTestComponent,
  },
];
