import { NgModule } from '@angular/core';

import {
  NgaSidebarModule,
  NgaMenuModule
} from '@nga/theme';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';

@NgModule({
  imports: [
    NgaSidebarModule.forRoot(),
    NgaMenuModule.forRoot(),
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
