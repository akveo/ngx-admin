import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  NgaCardModule,
  NgaLayoutModule,
  NgaTabsetModule,
  NgaRouteTabsetModule,
  NgaSidebarModule,
  NgaMenuModule,
  NgaUserModule,
  NgaActionsModule,
} from '@nga/theme';

import { SearchInputComponent, HeaderComponent, FooterComponent } from './components';
import { OneColumnLayoutComponent } from './layouts';

const BASE_MODULES = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
];

const NGA_MODULES = [
  NgaCardModule,
  NgaLayoutModule,
  NgaTabsetModule,
  NgaRouteTabsetModule,
  NgaMenuModule,
  NgaUserModule,
  NgaActionsModule,
];

const COMPONENTS = [
  HeaderComponent,
  FooterComponent,
  SearchInputComponent,
];

const LAYOUTS = [
  OneColumnLayoutComponent,
  HeaderComponent,
  FooterComponent,
];

@NgModule({
  imports: [
    ...BASE_MODULES,
    ...NGA_MODULES,
    NgaSidebarModule.forRoot(),
  ],
  exports: [
    ...BASE_MODULES,
    ...NGA_MODULES,
    ...COMPONENTS,
    ...LAYOUTS,
  ],
  declarations: [
    ...COMPONENTS,
    ...LAYOUTS,
  ],
})
export class ThemeModule {
}
