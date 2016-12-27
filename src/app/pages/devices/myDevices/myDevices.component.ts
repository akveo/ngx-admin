import {Component, OnInit} from '@angular/core';
import {Device} from "../../models/Device";
import {DeviceService} from "../device.service";
import {DeviceStatus} from "../../models/DeviceStatus";

@Component({
  selector: 'my-device',
  template: require('./myDevices.html')
})
export class MyDevicesComponent implements OnInit {

  private _devices: Device[];
  private _claimedDevId: string;

  constructor(private _deviceService: DeviceService) {

  }

  ngOnInit(): void {
    this.getDevices();
  }

  private getDevices() {
    this._deviceService.getAllDevicesForUser().subscribe(devices => {
        this._devices = devices;
      }
    );
  }

  onSubmitClaimDevice() {
    this._deviceService.claimDevice(this._claimedDevId).subscribe(
      data => {
        this._claimedDevId="";
        this.getDevices();
      },
      error => console.log("Error HTTP Post Service"),
      () => console.log("Job Done Post !")
    );
  }

  changeStatus(device: Device) {
    if(device.status == DeviceStatus.ACTIVE) {
      device.status = DeviceStatus.INACTIVE;
    } else {
      device.status = DeviceStatus.ACTIVE;
    }
    this._deviceService.updateDevice(device).subscribe(
      data => this.getDevices(),
      error => console.log("Error HTTP Post Service"),
      () => console.log("Job Done Post !")
    );
  }
}
