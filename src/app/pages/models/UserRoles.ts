export class UserRoles {
  static ROLE_USER: string = 'ROLE_USER';
  static ROLE_ADMIN: string = 'ROLE_ADMIN';
  static ROLE_TECH: string = 'ROLE_TECH';

  static getStatuses(): string[] {
     return [UserRoles.ROLE_USER, UserRoles.ROLE_ADMIN, UserRoles.ROLE_TECH];
  }
}
