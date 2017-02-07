import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { routes } from './app.routes';

import { AppComponent } from './app.component';
import { NgaCardTestComponent } from './nga-card-test/nga-card-test.component';

import { NgaThemeModule } from '../../../framework/theme/src/nga-theme.module';

@NgModule({
  declarations: [
    AppComponent,
    NgaCardTestComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes, { useHash: true }),
    NgaThemeModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
