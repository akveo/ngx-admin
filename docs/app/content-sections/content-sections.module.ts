/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { NgModule } from '@angular/core';

// modules
import { NgxLandingThemeModule } from '../@theme/theme.module';
// modules

// components
import { ContentSectionsComponent } from './content-sections.component';
import { MainInfoSectionComponent } from './main-info-section/main-info-section.component';
import { DescriptionSectionComponent } from './description-section/description-section.component';
// components

const COMPONENTS = [
  ContentSectionsComponent,
  MainInfoSectionComponent,
  DescriptionSectionComponent,
];

@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports: [
    NgxLandingThemeModule,
  ],
  exports: [
    ContentSectionsComponent,
  ],
})
export class ContentSectionsModule {
}
