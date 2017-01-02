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
    this._userService.getUserRoles().subscribe(
      roles => {
        roles.forEach((role) => {
          if(role.authority == 'ROLE_ADMIN') {
            this.isUserAdmin = true;
          }
        });
      },
      error => console.log(error)
    );
  }
}
