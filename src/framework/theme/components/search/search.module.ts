/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { NgModule } from '@angular/core';

import { NgaSharedModule } from '../shared/shared.module';
import { NgaSearchComponent, NgaSearchFieldComponent } from './search.component';
import { NgaSuperSearchService } from './search.service';


@NgModule({
  imports: [
    NgaSharedModule,
  ],
  declarations: [
    NgaSearchComponent,
    NgaSearchFieldComponent,
  ],
  exports: [
    NgaSearchComponent,
    NgaSearchFieldComponent,
  ],
  providers: [
    NgaSuperSearchService,
  ],
  entryComponents: [
    NgaSearchFieldComponent,
  ],
})
export class NgaSearchModule { }
