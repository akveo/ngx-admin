import {UserRoles} from "./UserRoles";

export class User {
  username: string;
  password: string;
  userId: string;
  name: string;
  email: string;
  authorities: UserRoles[];

  constructor(username: string, password: string, userId: string, name: string, email: string, roles: UserRoles[]) {
    this.username = username;
    this.password = password;
    this.userId = userId;
    this.name = name;
    this.email = email;
    this.authorities = roles;
  }
}
