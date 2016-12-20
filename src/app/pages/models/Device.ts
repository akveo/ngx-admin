export class Device {
  sensorId: string;
  devId: string;
  sensorPosition: string;
  description: string;
  comments: string;
  type: string;
  status: string;


  constructor(deviceId: string, sensorPosition: string, description: string, comments: string,
              type: string, status: string, sensorId?: string) {
    this.sensorId = sensorId || "";
    this.devId = deviceId;
    this.sensorPosition = sensorPosition;
    this.description = description;
    this.comments = comments;
    this.type = type;
    this.status = status;
  }
}
