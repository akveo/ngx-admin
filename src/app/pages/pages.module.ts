import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule
  ],
  declarations: [
    PagesComponent,
    DashboardComponent
  ]
})
export class PagesModule {
}
