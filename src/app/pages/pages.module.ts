import { NgModule } from '@angular/core';

import {
  NgaSidebarModule,
  NgaMenuModule
} from '@nga/theme';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { UiFeaturesComponent } from './ui-features/ui-features.component';
import { MapsComponent } from './maps/maps.component';
import { ComponentsComponent } from './components/components.component';

@NgModule({
  imports: [
    NgaSidebarModule.forRoot(),
    NgaMenuModule.forRoot(),
    PagesRoutingModule,
    ThemeModule
  ],
  declarations: [
    PagesComponent,
    DashboardComponent,
    UiFeaturesComponent,
    MapsComponent,
    ComponentsComponent
  ]
})
export class PagesModule {
}
