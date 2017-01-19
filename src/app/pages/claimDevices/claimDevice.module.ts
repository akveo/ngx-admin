import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { routing } from './claimDevice.routing';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import {NgaModule} from "../../theme/nga.module";

import { FormsModule as AngularFormsModule } from '@angular/forms';
import {ClaimDevicesComponent} from "./claimDevices.component";
import {DeviceService} from "../devices/device.service";
import NotificationModule from "../notifications/notification.module";
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
    ClaimDevicesComponent
  ],
  providers: [
    DeviceService,
  ]
})
export default class ClaimDeviceModule {}
