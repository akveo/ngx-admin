import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { routes } from './app.routes';

import { AppComponent } from './app.component';
import { NgaCardTestComponent } from './nga-card-test/nga-card-test.component';
import { NgaLayoutTestComponent } from './nga-layout-test/nga-layout-test.component';

import { NgaThemeModule, NgaThemeOptions } from '../../../framework/theme';

const ngaThemeOptions: NgaThemeOptions = {
  theme: 'default',
};

@NgModule({
  declarations: [
    AppComponent,
    NgaCardTestComponent,
    NgaLayoutTestComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes, { useHash: true }),
    NgaThemeModule.forRoot(ngaThemeOptions),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
