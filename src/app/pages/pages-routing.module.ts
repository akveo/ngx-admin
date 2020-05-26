import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {PagesComponent} from './pages.component';
import {NotFoundComponent} from './miscellaneous/not-found/not-found.component';
import {PromotionComponent} from './promotion/promotion.component';
import { PartnerPriceComponent } from './partner-price/partner-price.component';
import { LoginComponent } from './auth/login.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'promotion',
      component: PromotionComponent,
    },
    {
      path: 'partner-price',
      component: PartnerPriceComponent,
    },
    {
      path: 'service-agreement',
      component: NotFoundComponent,
    },
    {
      path: 'partner-branch',
      component: NotFoundComponent,
    },
    {
      path: 'billing',
      component: NotFoundComponent,
    },
    {
      path: 'auth',
      component: LoginComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
