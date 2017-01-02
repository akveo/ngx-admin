import {Component} from '@angular/core';
import {DeviceService} from "../devices/device.service";

@Component({
  selector: 'claim-device',
  template: require('./claimDevices.html')
})
export class ClaimDevicesComponent {

  private _claimedDevId: string;
  private message: string = '';

  constructor(private _deviceService: DeviceService) {

  }

  onSubmitClaimDevice() {
    this._deviceService.claimDevice(this._claimedDevId).subscribe(
      () => {
        this._claimedDevId="";
        this.message = "Device successfully claimed";
        console.log("HERE");
      },
      error => this.setNotificationMessage(error)
    );
  }

  private setNotificationMessage(error: number): void {
    console.log(error);
    if(error == 403) {
      this.message = 'You do not have the necessary authorities';
    } else if (error == 404) {
      this.message = 'A device with the given ID does not exist';
    } else if (error == 409) {
      this.message = 'Sensor already claimed';
    } else if (error == 500) {
      this.message = 'The application encountered an error';
    }
  }

  messageReceived(): void {
    this.message = '';
  }
}
