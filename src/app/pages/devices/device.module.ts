import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { AdminDevicesComponent} from './adminDevices/adminDevices.component';
import { routing } from './device.routing';
import { FormsModule } from "@angular/forms";
import { DeviceService } from "./device.service";
import { HttpModule } from "@angular/http";
import { DeviceComponent } from "./device.component";
import {RatingModule} from "ng2-bootstrap";
import {NgaModule} from "../../theme/nga.module";

import { FormsModule as AngularFormsModule } from '@angular/forms';
import {Ng2SmartTableModule} from "ng2-smart-table";
import {UserDevicesComponent} from "./userDevices/userDevices.component";
import {EditDeviceComponent} from "./editDevice/editDevice.component";
import {UserService} from "../users/user.service";
import {HomeDevicesComponent} from "./homeDevices/homeDevices.component";
import NotificationModule from "../notifications/notification.module";
@NgModule({
  imports: [
    AngularFormsModule,
    NgaModule,
    RatingModule,
    CommonModule,
    FormsModule,
    HttpModule,
    Ng2SmartTableModule,
    NotificationModule,
    routing
  ],
  declarations: [
    DeviceComponent,
    HomeDevicesComponent,
    AdminDevicesComponent,
    UserDevicesComponent,
    EditDeviceComponent
  ],
  providers: [
    DeviceService,
    UserService
  ]
})
export default class DeviceModule {}
