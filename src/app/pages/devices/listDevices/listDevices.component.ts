import {Component} from '@angular/core';
import {DeviceService} from '../device.service';
import {Device} from '../../models/Device';

@Component({
  selector: 'devices',
  template:  require('./listDevices.html')
})
export class ListDevicesComponent {

  private _devices: Array<Device>;

  constructor(private _deviceService: DeviceService) {
       this._deviceService.getAllDevices().subscribe( devices => {
          this._devices = devices;
       });
  }
}
