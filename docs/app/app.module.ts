/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { NgxLandingThemeModule } from './@theme/theme.module';
import { CoreModule } from './@core/core.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ContentSectionsModule } from './content-sections/content-sections.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        { path: '', component: AppComponent },
        { path: '**', redirectTo: '' },
      ],
      {
        useHash: true,
      },
    ),

    NgxLandingThemeModule.forRoot(),
    CoreModule.forRoot(),
    ContentSectionsModule,
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
  ],
})
export class AppModule { }
