import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {DeviceService} from '../device.service';
import {LocalDataSource} from "ng2-smart-table";

@Component({
  selector: 'admin-devices',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./smartTables.scss')],
  template: require('./adminDevices.html')
})
export class AdminDevicesComponent implements OnInit {

  source: LocalDataSource = new LocalDataSource();

  query: string = '';

  settings = {
    add: {
      addButtonContent: '<i class="ion-ios-plus-outline"></i>',
      createButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="ion-edit"></i>',
      saveButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
      confirmSave: true
    },
    delete: {
      deleteButtonContent: '<i class="ion-trash-a"></i>',
      confirmDelete: true
    },
    columns: {
      sensorId: {
        title: 'Sensor ID',
        type: 'number',
        editable: false
      },
      position: {
        title: 'Position',
        type: 'string'
      },
      comments: {
        title: 'Comments',
        type: 'string'
      },
      type: {
        title: 'Type',
        type: 'string'
      },
      status: {
        title: 'Status',
        type: 'string'
      },
      ownerId: {
        title: 'Owner ID',
        type: 'string'
      }
    }
  };

  private message: string = '';

  constructor(private _deviceService: DeviceService) {

  }

  ngOnInit(): void {
    this.getDevices();
  }

  private getDevices() {
    this._deviceService.getAllDevices().subscribe(devices => {
      this.source.load(devices);
    });
  }

  onDeleteConfirm(event): void {
    console.log(event);
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
      let sensorId = event.data.sensorId;
      console.log(sensorId);
      this._deviceService.deleteDevice(sensorId).subscribe(
        () => {
          this.getDevices();
          this.message = 'Device deleted';
        },
        () => {
          this.getDevices();
          this.message = 'Unable to delete device';
        }
      );
    } else {
      event.confirm.reject();
    }
  }

  onEditConfirm(event): void {
    event.confirm.resolve();
    let sensor = event.data;
    console.log(event);
    this._deviceService.updateDevice(sensor).subscribe(
      () => {
        this.message = 'Device successfully updated';
      },
      error => this.setNotificationMessage(error)
    );
  }

  private setNotificationMessage(error: number): void {
    if(error == 403) {
      this.message = 'You do not have the necessary authorities to update the device';
    } else if (error == 404) {
      this.message = 'A device with the given ID does not exist';
    } else if (error == 500) {
      this.message = 'The application encountered an error';
    }
  }

  messageReceived(): void {
    this.message = '';
  }
}
