import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {UserService} from "./user.service";
import {UserRoles} from "../models/UserRoles";
import {User} from "../models/User";

@Component({
  selector: 'admin-devices',
  encapsulation: ViewEncapsulation.None,
  template: require('./users.html')
})
export class UserComponent implements OnInit {

  private _users: User[];
  private message: string = '';

  constructor(private _userService: UserService) {

  }

  ngOnInit(): void {
    this.getUsers();
  }

  private getUsers() {
    this._userService.getAllUsers().subscribe(
      users => this._users = users,
      error => this.setNotificationMessage(error)
    );
  }

  deleteUser(userId: string): void {
    this._userService.deleteUser(userId).subscribe(
      () => {
        this.message = "User successfully delete";
        this.getUsers();
      },
      error => this.setNotificationMessage(error)
    )
  }

  updateUser(user: User): void {
    this._userService.updateUser(user).subscribe(
      () => this.message = "User successfully updated",
      error => this.setNotificationMessage(error)
    )
  }

  hasRole(authorities: UserRoles[], role: string): boolean {
    return !!authorities.find(currentRole => {
      return (<any>currentRole).authority === role;
    });
  }

  toggleRole(user: User, role: string): void {
    if (!this.hasRole(user.authorities, role)) {
      user.authorities.push({'authority': role});
    } else {
      user.authorities = user.authorities.filter(currentRole => {
        return (<any>currentRole).authority !== role;
      });
    }
  }

  private setNotificationMessage(error: number): void {
    if (error == 403) {
      this.message = 'You do not have the necessary authorities';
    } else if (error == 404) {
      this.message = 'A user with the given ID does not exist';
    } else if (error == 500) {
      this.message = 'The application encountered an error';
    }
  }

  messageReceived(): void {
    this.message = '';
  }
}
