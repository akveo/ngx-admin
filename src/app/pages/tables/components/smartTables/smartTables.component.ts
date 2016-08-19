import {Component, ViewEncapsulation} from '@angular/core';

import {BaCard} from '../../../../theme/components';

import {NG2_SMART_TABLE_DIRECTIVES, LocalDataSource} from 'ng2-smart-table';
import { SmartTablesService } from './smartTables.service';

@Component({
  selector: 'basic-tables',
  encapsulation: ViewEncapsulation.None,
  directives: [BaCard, NG2_SMART_TABLE_DIRECTIVES],
  styles: [require('./smartTables.scss')],
  template: require('./smartTables.html'),
  providers: [SmartTablesService]
})
export class SmartTables {

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
    },
    delete: {
      deleteButtonContent: '<i class="ion-trash-a"></i>',
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

  source: LocalDataSource = new LocalDataSource();

  constructor(protected service: SmartTablesService) {
    this.service.getData().then((data) => {
      this.source.load(data);
    });
  }
}
