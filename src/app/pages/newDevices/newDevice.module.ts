import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { routing } from './newDevice.routing';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import {NgaModule} from "../../theme/nga.module";

import { FormsModule as AngularFormsModule } from '@angular/forms';
import {DeviceService} from "../devices/device.service";
import NotificationModule from "../notifications/notification.module";
import {NewDeviceComponent} from "./newDevice.component";
@NgModule({
  imports: [
    AngularFormsModule,
    NgaModule,
    CommonModule,
    FormsModule,
    HttpModule,
    NotificationModule,
    routing
  ],
  declarations: [
    NewDeviceComponent
  ],
  providers: [
    DeviceService,
  ]
})
export default class NewDeviceModule {}
