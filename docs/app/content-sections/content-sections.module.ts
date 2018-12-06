/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { NgModule } from '@angular/core';

// modules
import { NgxLandingThemeModule } from '../@theme/theme.module';
import { SwiperModule } from 'ngx-swiper-wrapper';
// modules

// components
import { ContentSectionsComponent } from './content-sections.component';
import { MainInfoSectionComponent } from './main-info-section/main-info-section.component';
import { DescriptionSectionComponent } from './description-section/description-section.component';
import { ReasonSectionComponent } from './reason-section/reason-section.component';
import { ThemeSectionComponent } from './theme-section/theme-section.component';
import { ReviewsSectionComponent } from './reviews-section/reviews-section.component';
import { SocialSectionComponent } from './social-section/social-section.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';
import { OurProjectsSectionComponent } from './our-projects-section/our-projects-section.component';
// components

const COMPONENTS = [
  ContentSectionsComponent,
  MainInfoSectionComponent,
  DescriptionSectionComponent,
  ReasonSectionComponent,
  ThemeSectionComponent,
  ReviewsSectionComponent,
  OurProjectsSectionComponent,
  SocialSectionComponent,
  ContactSectionComponent,
];

@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports: [
    NgxLandingThemeModule,
    SwiperModule,
  ],
  exports: [
    ContentSectionsComponent,
  ],
})
export class ContentSectionsModule {
}
