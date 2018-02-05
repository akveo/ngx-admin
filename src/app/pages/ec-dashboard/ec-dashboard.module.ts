import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { EcDashboardComponent } from './ec-dashboard.component';


@NgModule({
  imports: [
    ThemeModule,
  ],
  declarations: [
    EcDashboardComponent,
  ],
})
export class EcDashboardModule { }
