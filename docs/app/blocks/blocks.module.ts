/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgxLandingThemeModule } from '../@theme/theme.module';

import {
  NgxMdBLockComponent,
  NgxTabbedBlockComponent,
  NgxOverviewBlockComponent,
  NgxExampleBlockComponent,
  NgxInlineExampleBlockComponent,
  NgxTabbedExampleBlockComponent,
  NgxLiveExampleBlockComponent,
  NgxStackedExampleComponent,
  NgxCodeBlockComponent,
  NgxMethodsBlockComponent,
  NgxPropsBlockComponent,
  NgxPropBlockComponent,
  NgxStylesBlockComponent,
  NgxThemeComponent,
  NgxComponentBlockComponent,
  NgxApiBlockComponent,
  NgxStylesTableBlockComponent,
  NgxExamplesBlockComponent,
  NgxPagerBlockComponent,
  NgxComponentsOverviewBlockComponent,
} from './components/';

const blocks = [
  NgxMdBLockComponent,
  NgxTabbedBlockComponent,
  NgxOverviewBlockComponent,
  NgxExampleBlockComponent,
  NgxInlineExampleBlockComponent,
  NgxTabbedExampleBlockComponent,
  NgxLiveExampleBlockComponent,
  NgxStackedExampleComponent,
  NgxCodeBlockComponent,
  NgxMethodsBlockComponent,
  NgxPropsBlockComponent,
  NgxPropBlockComponent,
  NgxStylesBlockComponent,
  NgxThemeComponent,
  NgxComponentBlockComponent,
  NgxApiBlockComponent,
  NgxStylesTableBlockComponent,
  NgxExamplesBlockComponent,
  NgxPagerBlockComponent,
  NgxComponentsOverviewBlockComponent,
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgxLandingThemeModule,
  ],
  declarations: [
    ...blocks,
  ],
  exports: [
    CommonModule,
    RouterModule,
    ...blocks,
  ],
})
export class NgxBlocksModule {
}
