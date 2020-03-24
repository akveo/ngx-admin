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
import { LandingHomeComponent } from './landing-home.component';
import { MainInfoSectionComponent } from './main-info-section/main-info-section.component';
import { DescriptionSectionComponent } from './description-section/description-section.component';
import { ReasonSectionComponent } from './reason-section/reason-section.component';
import { ThemeSectionComponent } from './theme-section/theme-section.component';
import { ReviewsSectionComponent } from './reviews-section/reviews-section.component';
import { SocialSectionComponent } from './social-section/social-section.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';
import { OurProjectsSectionComponent } from './our-projects-section/our-projects-section.component';
import { LandingHomeRoutingModule } from './landing-home-routing.module';
import { NgxLandingSectionsContainerComponent } from './sections-container/ngx-landing-sections-container.component';
import { BackendBundlesSectionComponent } from './backend-bundles-section/backend-bundles-section.component';
import { LicensePipe } from './backend-bundles-section/license.pipe';
import { BackgroundImagePipe } from './backend-bundles-section/background-image.pipe';
import { MaterialLandingComponent } from './material-landing/material-landing.component';
import { LandingSharedModule } from '../../shared/landing-shared.module';
import {MaterialFeaturesSectionComponent} from './material-features/material-features.component';
import {DefaultAdminInfoComponent} from './main-info-section/default-admin-main-info/default-info.component';
import {MaterialAdminInfoComponent} from './main-info-section/material-admin-main-info/material-info.component';
import {ContactFormComponent} from './contact-form/contact.component';
import {NbButtonModule} from '@nebular/theme';
// components

const PIPES = [LicensePipe, BackgroundImagePipe];

const COMPONENTS = [
  LandingHomeComponent,
  MaterialLandingComponent,
  NgxLandingSectionsContainerComponent,
  MainInfoSectionComponent,
  DefaultAdminInfoComponent,
  MaterialAdminInfoComponent,
  DescriptionSectionComponent,
  ReasonSectionComponent,
  ThemeSectionComponent,
  ReviewsSectionComponent,
  OurProjectsSectionComponent,
  SocialSectionComponent,
  ContactSectionComponent,
  BackendBundlesSectionComponent,
  MaterialFeaturesSectionComponent,
  ContactFormComponent,
];

@NgModule({
  declarations: [
    ...COMPONENTS,
    ...PIPES,
  ],
  imports: [
    NgxLandingThemeModule,
    SwiperModule,
    LandingHomeRoutingModule,
    LandingSharedModule,
    NbButtonModule,
  ],
  providers: [
    ...PIPES,
  ],
})
export class LandingHomeModule {
}
