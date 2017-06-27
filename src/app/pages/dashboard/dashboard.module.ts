import { NgModule } from '@angular/core';
import { NgaTabsetModule, NgaUserModule } from '@akveo/nga-theme';

import { SharedModule } from '../../shared.module';
import { DashboardComponent } from './dashboard.component';
import { StatusCardsComponent } from './status-cards/status-cards.component';
import { TemperatureDraggerComponent } from './temperature-dragger/temperature-dragger.component';
import { ContactsComponent } from './contacts/contacts.component';
import { RoomSelectorComponent } from './room-selector/room-selector.component';

@NgModule({
  imports: [
    NgaTabsetModule,
    NgaUserModule,
    SharedModule,
  ],
  declarations: [
    DashboardComponent,
    StatusCardsComponent,
    TemperatureDraggerComponent,
    ContactsComponent,
    RoomSelectorComponent,
  ],
})
export class DashboardModule { }
