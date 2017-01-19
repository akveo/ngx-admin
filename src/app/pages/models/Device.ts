import {DeviceStatus} from "./DeviceStatus";

export class Device {
  sensorId: string;
  devId: string;
  position: string;
  description: string;
  comments: string;
  type: string;
  status: DeviceStatus;
  ownerId: string;


  constructor(deviceId: string, sensorPosition: string, description: string, comments: string,
              type: string, status: DeviceStatus, sensorId?: string, ownerId?: string) {
    this.sensorId = sensorId || "";
    this.devId = deviceId;
    this.position = sensorPosition;
    this.description = description;
    this.comments = comments;
    this.type = type;
    this.status = status;
    this.ownerId = ownerId;
  }
}
