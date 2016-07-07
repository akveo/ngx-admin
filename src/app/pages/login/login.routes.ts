import {RouterConfig} from '@angular/router';
import {Login} from './login.component';

export const LoginRoutes: RouterConfig = [
  {
    path: '',
    redirectTo: '/login',
    terminal: true
  },
  {
    path: 'login',
    component: Login
  }
];
