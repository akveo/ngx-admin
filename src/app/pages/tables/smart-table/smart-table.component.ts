import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableData } from '../../../@core/data/smart-table';

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './smart-table.component.html',
  styleUrls: ['./smart-table.component.scss'],
})
export class SmartTableComponent {

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: 'Codigo',
        type: 'number',
      },
      firstName: {
        title: 'Apellido Paterno',
        type: 'string',
      },
      lastName: {
        title: 'Apellido Materno',
        type: 'string',
      },
      username: {
        title: 'Nombres',
        type: 'string',
      },
      email: {
        title: 'Tipo de usuario',
        type: 'string',
      },
      age: {
        title: 'Tipo de Perfil',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableData) {
    const data = this.service.getData();
    this.source.load(data);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Seguro que deseas eliminar?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
