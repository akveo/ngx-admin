import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

if (environment.production==true) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
