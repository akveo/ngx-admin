import {Component} from '@angular/core';
import {DeviceService} from "../devices/device.service";

@Component({
  selector: 'device',
  template: require('./device.html')
})
export class DeviceComponent {

  constructor(private _deviceService: DeviceService) {

  }
}
