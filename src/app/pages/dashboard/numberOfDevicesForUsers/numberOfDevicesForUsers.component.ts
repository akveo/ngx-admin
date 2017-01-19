import {Component, ViewEncapsulation} from '@angular/core';

import {DashboardService} from "../dashboard.service";

@Component({
  selector: 'number-of-devices-for-users',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./numberOfDevicesForUsers.scss')],
  template: require('./numberOfDevicesForUsers.html')
})
export class NumberOfDevicesForUsers {

  public numberOfDevicesForUser: number;

  constructor(private _dashboardService: DashboardService) {

    this._dashboardService.getNumberOfActiveDevicesForUser().subscribe(
      (result: any) => this.numberOfDevicesForUser = result.activeSensorsForUser,
      (error) => console.log(error)
    )
  }
}
