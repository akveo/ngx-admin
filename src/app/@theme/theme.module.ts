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
  NgaSearchModule,
} from '@akveo/nga-theme';

import {
  HeaderComponent,
  FooterComponent,
  SearchInputComponent,
  TinyMCEComponent,
} from './components';


import {
  CapitalizePipe,
  PluralPipe,
  RoundPipe,
} from './pipes';

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
  NgaSearchModule,
];

const COMPONENTS = [
  HeaderComponent,
  FooterComponent,
  SearchInputComponent,
  TinyMCEComponent,
  OneColumnLayoutComponent,
];

const PIPES = [
  CapitalizePipe,
  PluralPipe,
  RoundPipe,
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
    ...PIPES,
  ],
  declarations: [
    ...COMPONENTS,
    ...PIPES,
  ],
})
export class ThemeModule {
}
