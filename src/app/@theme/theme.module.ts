import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  NgaActionsModule,
  NgaCardModule,
  NgaLayoutModule,
  NgaMenuModule,
  NgaRouteTabsetModule,
  NgaSearchModule,
  NgaSidebarModule,
  NgaTabsetModule,
  NgaThemeModule,
  NgaUserModule,
} from '@akveo/nga-theme';

import {
  FooterComponent,
  HeaderComponent,
  SearchInputComponent,
  ThemeSettingsComponent,
  TinyMCEComponent,
} from './components';
import { CapitalizePipe, PluralPipe, RoundPipe } from './pipes';
import {
  OneColumnLayoutComponent,
  SampleLayoutComponent,
  ThreeColumnsLayoutComponent,
  TwoColumnsLayoutComponent,
} from './layouts';
import { DEFAULT_THEME } from './styles/theme.default';
import { COSMIC_THEME } from './styles/theme.cosmic';

const BASE_MODULES = [CommonModule, FormsModule, ReactiveFormsModule];

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
  ThemeSettingsComponent,
  TinyMCEComponent,
  OneColumnLayoutComponent,
  SampleLayoutComponent,
  ThreeColumnsLayoutComponent,
  TwoColumnsLayoutComponent,
];

const PIPES = [CapitalizePipe, PluralPipe, RoundPipe];

const NGA_THEME_PROVIDERS = [
  ...NgaThemeModule.forRoot(
    {
      name: 'default',
    },
    [DEFAULT_THEME, COSMIC_THEME],
  ).providers,
  ...NgaSidebarModule.forRoot().providers,
  ...NgaSidebarModule.forRoot().providers,
  ...NgaMenuModule.forRoot().providers,
];

@NgModule({
  imports: [...BASE_MODULES, ...NGA_MODULES],
  exports: [...BASE_MODULES, ...NGA_MODULES, ...COMPONENTS, ...PIPES],
  declarations: [...COMPONENTS, ...PIPES],
})
export class ThemeModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: ThemeModule,
      providers: [...NGA_THEME_PROVIDERS],
    };
  }
}
