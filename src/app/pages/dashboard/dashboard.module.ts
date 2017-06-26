import { NgModule } from '@angular/core';
import { NgaTabsetModule } from '@akveo/nga-theme';

import { SharedModule } from '../../shared.module';
import { DashboardComponent } from './dashboard.component';
import { StatusCardsComponent } from './status-cards/status-cards.component';
import { TemperatureDraggerComponent } from './temperature-dragger/temperature-dragger.component';

@NgModule({
  imports: [
    SharedModule,
    NgaTabsetModule,
  ],
  declarations: [
    DashboardComponent,
    StatusCardsComponent,
    TemperatureDraggerComponent,
  ],
})
export class DashboardModule { }
