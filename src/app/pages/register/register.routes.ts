import {RouterConfig} from '@angular/router';
import {Register} from './register.component';

export const RegisterRoutes: RouterConfig = [
  {
    path: '',
    redirectTo: '/register',
    terminal: true
  },
  {
    path: 'register',
    component: Register
  }
];
