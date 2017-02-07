import { Routes } from '@angular/router';

import { NgaCardTestComponent } from './nga-card-test/nga-card-test.component';

export const routes: Routes = [
  {
    path: '',
    component: NgaCardTestComponent,
  },
  {
    path: '**',
    component: NgaCardTestComponent,
  },
];
