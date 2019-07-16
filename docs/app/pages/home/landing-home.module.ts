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
// components

const PIPES = [LicensePipe, BackgroundImagePipe];

const COMPONENTS = [
  LandingHomeComponent,
  NgxLandingSectionsContainerComponent,
  MainInfoSectionComponent,
  DescriptionSectionComponent,
  ReasonSectionComponent,
  ThemeSectionComponent,
  ReviewsSectionComponent,
  OurProjectsSectionComponent,
  SocialSectionComponent,
  ContactSectionComponent,
  BackendBundlesSectionComponent,
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
  ],
})
export class LandingHomeModule {
}
