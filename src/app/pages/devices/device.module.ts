import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { NewDeviceComponent } from './newDevice/newDevice.component';
import { routing } from './device.routing';
import { FormsModule} from "@angular/forms";
import {DeviceService} from "./device.service";
import {HttpModule} from "@angular/http";
import {DeviceComponent} from "./device.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    routing
  ],
  declarations: [
    DeviceComponent,
    NewDeviceComponent
  ],
  providers: [
    DeviceService
  ]
})
export default class DeviceModule {}
