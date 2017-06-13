import { NgModule } from '@angular/core';
import { NgaTabsetModule } from '@nga/theme';

import { SharedModule } from '../../shared.module';
import { DashboardComponent } from './dashboard.component';
import { StatusCardsComponent } from './status-cards/status-cards.component';

@NgModule({
  imports: [
    SharedModule,
    NgaTabsetModule,
  ],
  declarations: [
    DashboardComponent,
    StatusCardsComponent,
  ],
})
export class DashboardModule { }
