import {Component, OnInit} from '@angular/core';
import {Device} from "../../models/Device";
import {DeviceService} from "../device.service";
import {DeviceStatus} from "../../models/DeviceStatus";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'edit-device',
  template: require('./editDevice.html')
})
export class EditDeviceComponent implements OnInit {

  private _device: Device;
  private message: string = '';

  constructor(private _deviceService: DeviceService, private _route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this._device = new Device("", "", "", "", "", DeviceStatus.NOT_CLAIMED, "", "");
    this.getDevice();
  }

  private getDevice() {
    let sensorId = "";
    this._route.params.subscribe(
      params => {
        sensorId = params['sensorId'];
        this._deviceService.getDevice(sensorId).subscribe(
          data => this._device = data,
          error => this.setNotificationMessage(error)
        );
      }
    );
  }

  onSubmit() {
    this._deviceService.updateDevice(this._device).subscribe(
      data => this.message = "Device successfully updated",
      error => this.setNotificationMessage(error)
    );
  }

  private setNotificationMessage(error: number): void {
    if(error == 403) {
      this.message = 'You do not have the necessary authorities to update the device';
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
