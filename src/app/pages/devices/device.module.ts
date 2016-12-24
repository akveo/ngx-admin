import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { NewDeviceComponent } from './newDevice/newDevice.component';
import { ListDevicesComponent} from './listDevices/listDevices.component';
import { routing } from './device.routing';
import { FormsModule } from "@angular/forms";
import { DeviceService } from "./device.service";
import { HttpModule } from "@angular/http";
import { DeviceComponent } from "./device.component";
import {RatingModule} from "ng2-bootstrap";
import {NgaModule} from "../../theme/nga.module";

import { FormsModule as AngularFormsModule } from '@angular/forms';
import {Ng2SmartTableModule} from "ng2-smart-table";
@NgModule({
  imports: [
    AngularFormsModule,
    NgaModule,
    RatingModule,
    CommonModule,
    FormsModule,
    HttpModule,
    Ng2SmartTableModule,
    routing
  ],
  declarations: [
    DeviceComponent,
    NewDeviceComponent,
    ListDevicesComponent
  ],
  providers: [
    DeviceService
  ]
})
export default class DeviceModule {}
