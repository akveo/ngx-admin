import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { ExtraComponentsModule } from '../extra-components/extra-components.module';
import * as components from './index';

@NgModule({
  imports: [
    ThemeModule,
    ExtraComponentsModule,
  ],
  declarations: [
    components.ProfileComponent,
    components.GeneralInformationComponent,
    components.ChangePasswordComponent,
    components.ContactInformationComponent,
  ],
})
export class ProfileModule { }
