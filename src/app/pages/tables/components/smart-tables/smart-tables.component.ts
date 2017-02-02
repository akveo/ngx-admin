import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { LocalDataSource } from 'ng2-smart-table';
import { SmartTablesService } from './smart-tables.service';

@Component({
  selector: 'smart-tables',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./smart-tables.component.scss'],
  templateUrl: './smart-tables.component.html'
})
export class SmartTablesComponent implements OnInit {

  query: string;
  settings: any;
  source: LocalDataSource;

  constructor(private service: SmartTablesService) { }

  ngOnInit(): void {
    this.query = '';
    this.source = new LocalDataSource();

    this.service.getData().then((data) => {
      this.source.load(data);
    });

    this.settings = {
      add: {
        addButtonContent: '<i class="ion-ios-plus-outline"></i>',
        createButtonContent: '<i class="ion-checkmark"></i>',
        cancelButtonContent: '<i class="ion-close"></i>',
      },
      edit: {
        editButtonContent: '<i class="ion-edit"></i>',
        saveButtonContent: '<i class="ion-checkmark"></i>',
        cancelButtonContent: '<i class="ion-close"></i>',
      },
      delete: {
        deleteButtonContent: '<i class="ion-trash-a"></i>',
        confirmDelete: true
      },
      columns: {
        id: {
          title: 'ID',
          type: 'number'
        },
        firstName: {
          title: 'First Name',
          type: 'string'
        },
        lastName: {
          title: 'Last Name',
          type: 'string'
        },
        username: {
          title: 'Username',
          type: 'string'
        },
        email: {
          title: 'E-mail',
          type: 'string'
        },
        age: {
          title: 'Age',
          type: 'number'
        }
      }
    };
  }

  onDeleteConfirm(event: any): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
