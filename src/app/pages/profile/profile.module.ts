import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { ExtraComponentsModule } from '../extra-components/extra-components.module';
import { NbCardModule } from '@nebular/theme';
import * as fromComponents from './index';

@NgModule({
  imports: [
    ThemeModule,
    ExtraComponentsModule,
    NbCardModule,
  ],
  declarations: [
    ...fromComponents.components,
  ],
})
export class ProfileModule { }
