import { NgModule } from '@angular/core';

import { NgaMenuModule, NgaSidebarModule, NgaThemeModule } from '@nga/theme';

import { menuItems } from './pages-menu';

import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';

const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    // TODO: why here? review the modules structure
    NgaThemeModule.forRoot({ name: 'cosmic' }),
    NgaSidebarModule.forRoot(),
    NgaMenuModule.forRoot({ items: menuItems }),
    PagesRoutingModule,
    ThemeModule,
    DashboardModule,
  ],
  declarations: [
    ...PAGES_COMPONENTS,
  ],
})
export class PagesModule {
}
