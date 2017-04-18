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
  NgaUserModule
} from '@nga/theme';

import { SearchInputComponent } from './search-input/search-input.component';
import { OneCollLayoutComponent, BaseHeaderComponent } from './layouts';

const BASE_MODULES = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule
];

const NGA_MODULES = [
  NgaCardModule,
  NgaLayoutModule,
  NgaTabsetModule,
  NgaRouteTabsetModule,
  NgaMenuModule,
  NgaUserModule
];

const LAYOUTS = [
  OneCollLayoutComponent,
  BaseHeaderComponent
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
    ...LAYOUTS,
    SearchInputComponent
  ],
  declarations: [
    ...LAYOUTS,
    SearchInputComponent
  ]
})
export class ThemeModule {
}
