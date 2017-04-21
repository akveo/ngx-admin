import { NgModule } from '@angular/core';

import { NgaMenuModule, NgaSidebarModule, NgaThemeModule } from '@nga/theme';

import { menuItems } from './pages-menu';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { UiFeaturesComponent } from './ui-features/ui-features.component';
import { MapsComponent } from './maps/maps.component';
import { ComponentsComponent } from './components/components.component';

@NgModule({
  imports: [
    NgaThemeModule.forRoot({ name: 'pure' }),
    NgaSidebarModule.forRoot(),
    NgaMenuModule.forRoot({ items: menuItems }),
    PagesRoutingModule,
    ThemeModule,
  ],
  declarations: [
    PagesComponent,
    DashboardComponent,
    UiFeaturesComponent,
    MapsComponent,
    ComponentsComponent,
  ],
})
export class PagesModule {
}
