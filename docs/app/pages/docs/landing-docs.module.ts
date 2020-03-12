/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { NgModule } from '@angular/core';

// modules
import { NgxLandingThemeModule } from '../../@theme/theme.module';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { NgxBlocksModule } from '../../blocks/blocks.module';
import { LandingDocsRoutingModule } from './landing-docs-routing.module';
import { LandingSharedModule } from '../../shared/landing-shared.module';
// modules

// components
import { LandingDocsComponent } from './landing-docs.component';
import { NgxAdminLandingPageComponent } from './page/ngx-admin-landing-page.component';
// components

/*import { NgxMenuService } from '../@theme/services/menu.service';*/

const COMPONENTS = [
  LandingDocsComponent,
  NgxAdminLandingPageComponent,
];

@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports: [
    NgxLandingThemeModule,
    SwiperModule,
    LandingSharedModule,
    LandingDocsRoutingModule,
    NgxBlocksModule,
  ],
})
export class LandingDocsModule {
}
