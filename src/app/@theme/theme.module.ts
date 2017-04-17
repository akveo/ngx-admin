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

import { OneCollLayoutComponent } from './layouts';

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

const LAYOUT_COMPONENTS = [
  OneCollLayoutComponent
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
    ...LAYOUT_COMPONENTS,
    NgaSidebarModule
  ],
  declarations: [
    ...LAYOUT_COMPONENTS
  ]
})
export class ThemeModule {
}
