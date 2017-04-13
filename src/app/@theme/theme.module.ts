import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  NgaCardModule,
  NgaLayoutModule,
  NgaTabsetModule,
  NgaRouteTabsetModule,
  NgaSidebarModule,
  NgaMenuModule
} from '@nga/theme';

import { RootLayoutComponent } from './layouts';

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
  NgaSidebarModule,
  NgaMenuModule
];

const LAYOUT_COMPONENTS = [
  RootLayoutComponent
];

@NgModule({
  imports: [
    ...BASE_MODULES,
    ...NGA_MODULES,
  ],
  exports: [
    ...BASE_MODULES,
    ...NGA_MODULES,
    ...LAYOUT_COMPONENTS
  ],
  declarations: [
    ...LAYOUT_COMPONENTS
  ]
})
export class ThemeModule {
}
