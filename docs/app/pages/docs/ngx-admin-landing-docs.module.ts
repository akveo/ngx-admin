/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { NgModule } from '@angular/core';

// modules
import { NgxLandingThemeModule } from '../../@theme/theme.module';
import { SwiperModule } from 'ngx-swiper-wrapper';
// modules

// components
import { NgxAdminLandingDocsRoutingModule } from './ngx-admin-landing-docs-routing.module';
import { NgxAdminLandingDocsComponent } from './ngx-admin-landing-docs.component';
// components

const COMPONENTS = [
  NgxAdminLandingDocsComponent,
];

@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports: [
    NgxLandingThemeModule,
    SwiperModule,
    NgxAdminLandingDocsRoutingModule,
  ],
})
export class NgxAdminLandingDocsModule {
}
