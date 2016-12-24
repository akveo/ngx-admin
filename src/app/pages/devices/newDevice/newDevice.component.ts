import {Component} from '@angular/core';
import {Device} from "../../models/Device";
import {DeviceService} from "../device.service";
import {DeviceStatus} from "../../models/DeviceStatus";

@Component({
  selector: 'new-device',
  template: require('./newDevice.html')
})
export class NewDeviceComponent {

  private _device: Device;
  private _statuses: Array<string>;

  constructor(private _deviceService: DeviceService) {
    this._device = new Device("2", "Karpos", "Measures temperature", "first", "Temperature",
      DeviceStatus.ACTIVE, "", "773e900f-6a50-4a72-a4c4-3ba84323730d");
    this._statuses = DeviceStatus.getStatuses();
  }

  onSubmit() {
    console.log("Form submitted!");
    console.log(this._device);
    let result;

    this._deviceService.createNewDevice(this._device).subscribe(
      data => result = JSON.stringify(data),
      error => console.log("Error HTTP Post Service"),
      () => console.log("Job Done Post !")
    );
  }
}
