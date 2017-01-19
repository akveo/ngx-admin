export class DeviceStatus {
  static NOT_CLAIMED: string = 'NOT_CLAIMED';
  static ACTIVE: string = 'ACTIVE';
  static INACTIVE: string = 'INACTIVE';

  static getStatuses(): string[] {
     return [DeviceStatus.NOT_CLAIMED ,DeviceStatus.ACTIVE,DeviceStatus.INACTIVE];
  }
}
