import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbPasswordAuthStrategy, NbAuthModule } from '@nebular/auth';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginInterceptor } from '../../user.interceptors';
import { RouterModule } from '@angular/router';
import { UserProfileComponent } from './pages/profile.component';
import { ThemeModule } from '../../@theme/theme.module';
import { NbCardModule, NbCheckboxComponent, NbCheckboxModule, NbInputModule, NbMenuModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UserProfileComponent,
  ],
  imports: [
    CommonModule,
    ThemeModule,
    NbMenuModule,
    NbCardModule,
    NbCheckboxModule,
    NbInputModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'profile', component: UserProfileComponent }
    ]),
  ],
  exports: [
    UserProfileComponent,
    RouterModule,
  ],
})
export class UserModule {

  static forRoot(): ModuleWithProviders<UserModule>[] {
    return [{
      ngModule: UserModule,
      providers: [
        { provide: HTTP_INTERCEPTORS, useClass: LoginInterceptor, multi: true }
      ],
    },
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'email',
          baseEndpoint: 'http://localhost:3000/api/v1/user',
          login: {
            endpoint: '/login',
            requireValidToken: false,
          },
          register: {
            endpoint: '/register',
            requireValidToken: false,
          },
          logout: {
            method: 'get',
            endpoint: '/logout',
            requireValidToken: false,
          }
        }),
      ],
      forms: {},
    }),
    ];
  }

}
