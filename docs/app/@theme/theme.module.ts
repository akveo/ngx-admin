/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { RouterModule } from '@angular/router';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import {
  NbLayoutModule,
  NbThemeModule,
  NbMenuModule,
  NbCheckboxModule,
  NbCardModule,
  NbSidebarModule,
  NbTabsetModule,
} from '@nebular/theme';

import { LandingSharedModule } from '../shared/landing-shared.module';

// components
import {
  NgxLandingFooterComponent,
  NgxSectionTitleComponent,
  NgxFragmentTargetDirective,
  NgxPageTocComponent,
  NgxPageTabsComponent,
  NgxLandingHeaderComponent,
  NgxDocsFooterComponent,
} from './components';
// components

// services
import { ngxLandingServices } from './services';
// services

const BASE_MODULES = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  LazyLoadImageModule,
];

const NB_MODULES = [
  NbLayoutModule,
  NbCheckboxModule,
  NbMenuModule,
  NbCardModule,
  NbSidebarModule,
  NbTabsetModule,
];

const COMPONENTS = [
  NgxLandingFooterComponent,
  NgxSectionTitleComponent,
  NgxFragmentTargetDirective,
  NgxPageTocComponent,
  NgxPageTabsComponent,
  NgxLandingHeaderComponent,
  NgxDocsFooterComponent,
];

@NgModule({
  imports: [
    RouterModule,
    LandingSharedModule,

    ...BASE_MODULES,

    ...NB_MODULES,
  ],
  declarations: [
    ...COMPONENTS,
  ],
  exports: [
    RouterModule,

    ...BASE_MODULES,

    ...NB_MODULES,

    ...COMPONENTS,
  ],
})
export class NgxLandingThemeModule {
  static forRoot(): ModuleWithProviders<NgxLandingThemeModule> {
    return {
      ngModule: NgxLandingThemeModule,
      providers: [
        ...NbThemeModule.forRoot({ name: 'ngx-landing' }).providers,
        ...NbMenuModule.forRoot().providers,
        ...NbSidebarModule.forRoot().providers,

        ...ngxLandingServices,
      ],
    };
  }
}
