import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NbMenuModule, NbCardModule, NbSpinnerModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { ProductsComponent } from './products/products/products.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    ThemeModule,
    FormsModule,
    NbMenuModule,
    NbCardModule,
    NbSpinnerModule,
    SharedModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
  ],
  declarations: [
    PagesComponent,
    ProductsComponent,
  ],
})
export class PagesModule {
}
