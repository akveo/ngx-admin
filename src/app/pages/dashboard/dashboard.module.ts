import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { Dashboard } from './dashboard.component';
import { routing }       from './dashboard.routing';

import { ActiveDevices } from './activeDevices';
import { DeviceTypesComponent } from './deviceTypes';
import { DeviceTypesService } from './deviceTypes/deviceTypes.service';
import {DashboardService} from "./dashboard.service";
import {MeasurementTypesService} from "./measurementTypes/measurementTypes.service";
import {MeasurementTypesPieChartComponent} from "./measurementTypes/measurementTypes.component";
import {NumberOfUsers} from "./numberOfUsers/numberOfUsers.component";
import {MeasurementTypesForUserComponent} from "./measurementTypesUser/measurementTypesUser.component";
import {MeasurementTypesUserService} from "./measurementTypesUser/measurementTypesUser.service";
import {NumberOfDevicesForUsers} from "./numberOfDevicesForUsers/numberOfDevicesForUsers.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing
  ],
  declarations: [
    ActiveDevices,
    NumberOfUsers,
    NumberOfDevicesForUsers,
    DeviceTypesComponent,
    MeasurementTypesPieChartComponent,
    MeasurementTypesForUserComponent,
    Dashboard
  ],
  providers: [
    DeviceTypesService,
    MeasurementTypesService,
    MeasurementTypesUserService,
    DashboardService
  ]
})
export default class DashboardModule {}
