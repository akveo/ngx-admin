import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NbCardModule, NbInputModule, NbButtonModule, NbIconModule } from '@nebular/theme';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NbCardModule,
    NbInputModule,
    NbButtonModule,
    NbIconModule,
    RouterModule.forChild([
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'settings',
        component: SettingsComponent,
      },
    ]),
  ],
  declarations: [
    ProfileComponent,
    SettingsComponent,
  ],
})
export class AccountModule { }