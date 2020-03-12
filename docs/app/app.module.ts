/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { NgxLandingThemeModule } from './@theme/theme.module';
import { CoreModule } from './@core/core.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LandingSharedModule } from './shared/landing-shared.module';

import { DOCS, STRUCTURE } from './app.options';
const docs = require('../output.json');
import { structure  } from '../structure';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,

    LandingSharedModule,
    NgxLandingThemeModule.forRoot(),
    CoreModule.forRoot(),
  ],
  bootstrap: [AppComponent],
  providers: [
    Title,
    { provide: STRUCTURE, useValue: structure },
    { provide: DOCS, useValue: docs },
  ],
})
export class AppModule { }
