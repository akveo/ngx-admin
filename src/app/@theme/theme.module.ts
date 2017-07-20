import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  NgaThemeModule,
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
  NgaSidebarModule,
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

const NGA_THEME_PROVIDERS = [
  ...NgaThemeModule.forRoot({ name: 'cosmic' }).providers,
  ...NgaSidebarModule.forRoot().providers,
  ...NgaSidebarModule.forRoot().providers,
  ...NgaMenuModule.forRoot().providers,
];

@NgModule({
  imports: [
    ...BASE_MODULES,
    ...NGA_MODULES,
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

  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: ThemeModule,
      providers: [
        ...NGA_THEME_PROVIDERS,
      ],
    };
  }
}
