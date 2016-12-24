export class DeviceStatus {
  static NOT_CLAIMED: string = 'NOT_CLAIMED';
  static ACTIVE: string = 'ACTIVE';
  static INACTIVE: string = 'INACTIVE';

  static getStatuses(): Array<string> {
    let statuses = new Array();
    statuses.push(DeviceStatus.NOT_CLAIMED);
    statuses.push(DeviceStatus.ACTIVE);
    statuses.push(DeviceStatus.INACTIVE);
    return statuses
  }
}
