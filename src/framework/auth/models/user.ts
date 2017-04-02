export class NgaUser {

  constructor(public id?: number,
              public email?: string,
              public password?: string,
              public rememberMe?: boolean,
              public confirmPassword?: string,
              public fullName?: string) {
  }
}
