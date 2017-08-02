import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {
  NgaAuthComponent,
  NgaLoginComponent,
  NgaLogoutComponent,
  NgaRegisterComponent,
  NgaRequestPasswordComponent,
  NgaResetPasswordComponent
} from '@akveo/nga-auth';

const routes: Routes = [
  { path: 'pages', loadChildren: 'app/pages/pages.module#PagesModule' },
  {
    path: 'auth',
    component: NgaAuthComponent,
    children: [
      {
        path: '',
        component: NgaLoginComponent,
      },
      {
        path: 'login',
        component: NgaLoginComponent,
      },
      {
        path: 'register',
        component: NgaRegisterComponent,
      },
      {
        path: 'logout',
        component: NgaLogoutComponent,
      },
      {
        path: 'request-password',
        component: NgaRequestPasswordComponent,
      },
      {
        path: 'reset-password',
        component: NgaResetPasswordComponent,
      },
    ],
  },
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages' },
];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
