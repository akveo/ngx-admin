import {provideRouter, RouterConfig} from '@angular/router';
import {LoginRoutes} from "./pages/login/login.routes";
import {PagesRoutes} from "./pages/pages.routes";
import {RegisterRoutes} from "./pages/register/register.routes";

export const routes:RouterConfig = [
  ...LoginRoutes,
  ...RegisterRoutes,
  ...PagesRoutes,
  {
    path: '**',
    redirectTo: '/pages/dashboard'
  },
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
