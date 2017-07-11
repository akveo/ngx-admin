import { NgModule } from '@angular/core';
import { NgaTabsetModule, NgaUserModule } from '@akveo/nga-theme';

import { SharedModule } from '../../shared.module';
import { DashboardComponent } from './dashboard.component';
import { StatusCardsComponent } from './status-cards/status-cards.component';
import { ContactsComponent } from './contacts/contacts.component';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomSelectorComponent } from './rooms/room-selector/room-selector.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { TemperatureDraggerComponent } from './temperature/temperature-dragger/temperature-dragger.component';
import { TeamComponent } from './team/team.component';
import { SecurityCamerasComponent } from './security-cameras/security-cameras.component';
import { ElectricityComponent } from './electricity/electricity.component';

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
    TemperatureComponent,
    RoomsComponent,
    TeamComponent,
    SecurityCamerasComponent,
    ElectricityComponent,
  ],
})
export class DashboardModule { }
