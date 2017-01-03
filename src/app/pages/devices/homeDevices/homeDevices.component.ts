import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {UserService} from "../../users/user.service";

@Component({
  selector: 'devices',
  encapsulation: ViewEncapsulation.None,
  template: require('./homeDevices.html')
})
export class HomeDevicesComponent implements OnInit {

  isUserAdmin = false;

  constructor(private _userService: UserService) {

  }

  ngOnInit(): void {
    this.getUserRoles();
  }

  private getUserRoles() {
    this._userService.isUserAdmin().subscribe(
      isUserAdmin => this.isUserAdmin = isUserAdmin,
      error => console.log(error)
    );
  }
}
