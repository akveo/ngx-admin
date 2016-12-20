export class Device {
  sensorId: string;
  valueType: string;
  year: number;
  stamp: number;
  sensorPosition: string;
  value: string;

  constructor(valueType: string, year: number, stamp: number, sensorPosition: string, value?: string,
              sensorId?: string) {
    this.sensorId = sensorId;
    this.valueType = valueType;
    this.year = year;
    this.stamp = stamp;
    this.sensorPosition = sensorPosition;
    this.value = value;
  }
}
