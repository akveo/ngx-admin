/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { NgModule } from '@angular/core';

import { NgaSharedModule } from '../shared/shared.module';

import { NgaSearchComponent } from "./super-search.component";
import { NgaSuperSearchService } from "./super-search.service";


@NgModule({
  imports: [
    NgaSharedModule,
  ],
  declarations: [
    NgaSearchComponent,//TODO: remove or rename
  ],
  exports: [
    NgaSearchComponent,//TODO: remove or rename
  ],
  providers:[
    NgaSuperSearchService
  ]
})
export class NgaSearchModule { }
