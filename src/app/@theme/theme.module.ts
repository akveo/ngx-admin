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
} from '@nga/theme';

import { SearchInputComponent, BaseHeaderComponent, BaseFooterComponent } from './components';
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
];

const COMPONENTS = [
  BaseHeaderComponent,
  BaseFooterComponent,
  SearchInputComponent,
];

const LAYOUTS = [
  OneColumnLayoutComponent,
  BaseHeaderComponent,
  BaseFooterComponent,
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
