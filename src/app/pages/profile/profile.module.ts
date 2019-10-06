import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { ExtraComponentsModule } from '../extra-components/extra-components.module';
import { NbCardModule } from '@nebular/theme';
import { ProfileComponent } from './profile.component';

import * as presentationComponents from './index';

@NgModule({
  imports: [
    ThemeModule,
    ExtraComponentsModule,
    NbCardModule,
  ],
  declarations: [
    ...presentationComponents.components,
    ProfileComponent,
  ],
})
export class ProfileModule { }
