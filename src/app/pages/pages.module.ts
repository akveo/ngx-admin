import { NgModule } from '@angular/core';

import { NgaMenuModule, NgaSidebarModule, NgaThemeModule } from '@nga/theme';

import { menuItems } from './pages-menu';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { ComponentsComponent } from './components/components.component';

const PAGES_COMPONENTS = [
  PagesComponent,
  DashboardComponent,
  ComponentsComponent,
];

@NgModule({
  imports: [
    NgaThemeModule.forRoot({ name: 'cosmic' }),
    NgaSidebarModule.forRoot(),
    NgaMenuModule.forRoot({ items: menuItems }),
    PagesRoutingModule,
    ThemeModule,
  ],
  declarations: [
    ...PAGES_COMPONENTS,
  ],
})
export class PagesModule {
}
