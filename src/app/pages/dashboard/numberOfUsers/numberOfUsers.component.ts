import {Component, ViewEncapsulation} from '@angular/core';

import {DashboardService} from "../dashboard.service";

@Component({
  selector: 'number-of-users',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./numberOfUsers.scss')],
  template: require('./numberOfUsers.html')
})
export class NumberOfUsers {

  public numberOfUsers: number;

  constructor(private _dashboardService: DashboardService) {

    this._dashboardService.getNumberOfUsers().subscribe(
      (result: any) => this.numberOfUsers = result.users,
      (error) => console.log(error)
    )
  }
}
