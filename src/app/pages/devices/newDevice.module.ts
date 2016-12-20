import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { NewDeviceComponent } from './newDevice.component';
import { routing } from './newDevice.routing';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [
    NewDeviceComponent
  ]
})
export default class NewDeviceModule {}
