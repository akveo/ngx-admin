import {Component, OnInit} from '@angular/core';
import {Device} from "../models/Device";
import {DeviceService} from "../devices/device.service";
import {DeviceStatus} from "../models/DeviceStatus";
import {UserService} from "../users/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'new-device',
  template: require('./newDevice.html')
})
export class NewDeviceComponent implements OnInit {

  private _device: Device;
  private _statuses: Array<string>;
  private message: string = '';

  constructor(private _deviceService: DeviceService,
              private _userService: UserService,
              private router: Router) {
    this._userService.isUserAdmin().subscribe(
      isUserAdmin => isUserAdmin? console.log("ADMIN") : this.router.navigate(['/'])
    );
  }

  ngOnInit(): void {
    this._device = new Device("2", "Karpos", "Measures temperature", "first", "Temperature",
      DeviceStatus.NOT_CLAIMED, "", "");
    this._statuses = DeviceStatus.getStatuses();
  }

  onSubmit() {
    this._deviceService.createNewDevice(this._device).subscribe(
      data => this.message = "Device successfully created",
      error => this.setNotificationMessage(error)
    );
  }

  private setNotificationMessage(error: number): void {
    if(error == 403) {
      this.message = 'You do not have the necessary authorities to update the device';
    } else if (error == 409) {
      this.message = 'A device with the same deviceId already exists';
    } else if (error == 500) {
      this.message = 'The application encountered an error';
    }
  }

  messageReceived(): void {
    this.message = '';
  }
}
