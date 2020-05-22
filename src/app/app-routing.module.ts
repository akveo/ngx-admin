import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {
  NbAuthComponent,
  NbLoginComponent,
  NbLogoutComponent,
  NbRegisterComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent,
} from '@nebular/auth';
import { AppComponent } from './app.component';

export const routes: Routes = [
  // {
  //   path: 'pages',
  //   loadChildren: () => import('./pages/pages.module')
  //     .then(m => m.PagesModule),
  // },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },
  // { path: '', redirectTo: 'auth', pathMatch: 'full' },
  // { path: '**', redirectTo: 'auth' },
];

// const config: ExtraOptions = {
//   useHash: false,
// };

@NgModule({
  // imports: [RouterModule.forRoot(routes, config)],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
