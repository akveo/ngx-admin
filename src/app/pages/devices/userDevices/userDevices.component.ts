import {Component, OnInit} from '@angular/core';
import {Device} from "../../models/Device";
import {DeviceService} from "../device.service";
import {DeviceStatus} from "../../models/DeviceStatus";

@Component({
  selector: 'user-devices',
  template: require('./userDevices.html')
})
export class UserDevicesComponent implements OnInit {

  private _devices: Device[];
  private _claimedDevId: string;
  private message: string = '';

  constructor(private _deviceService: DeviceService) {

  }

  ngOnInit(): void {
    this.getDevices();
  }

  private getDevices() {
    this._deviceService.getAllDevicesForUser().subscribe(
      devices => this._devices = devices,
      error => this.setNotificationMessage(error)
    );
  }

  onSubmitClaimDevice() {
    this._deviceService.claimDevice(this._claimedDevId).subscribe(
      () => {
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
      () => {
        this.getDevices();
        this.message = 'Status of device successfully changed';
      },
      error => this.setNotificationMessage(error)
    );
  }

  private setNotificationMessage(error: number): void {
    if(error == 403) {
      this.message = 'You do not have the necessary authorities';
    } else if (error == 404) {
      this.message = 'A device with the given ID does not exist';
    } else if (error == 500) {
      this.message = 'The application encountered an error';
    }
  }

  messageReceived(): void {
    this.message = '';
  }
}
