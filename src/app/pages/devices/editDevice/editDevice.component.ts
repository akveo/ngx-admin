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
  private _statuses: Array<string>;

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
          error => console.log("Error HTTP Post Service"),
          () => console.log("Job Done Post !")
        );
      }
    );

    this._statuses = DeviceStatus.getStatuses();
  }

  onSubmit() {
    this._deviceService.updateDevice(this._device).subscribe(
      data => console.log("Device updated"),
      error => console.log("Error HTTP Post Service"),
      () => console.log("Job Done Post !")
    );
  }
}
