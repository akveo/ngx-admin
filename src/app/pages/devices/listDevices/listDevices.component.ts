import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {DeviceService} from '../device.service';
import {LocalDataSource} from "ng2-smart-table";

@Component({
  selector: 'devices',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./smartTables.scss')],
  template: require('./listDevices.html')
})
export class ListDevicesComponent implements OnInit {

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
        data => console.log("Device deleted"),
        error => console.log("Unable to delete device")
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
      data => console.log("Device updated"),
      error => console.log("Unable to update device")
    );
  }
}
