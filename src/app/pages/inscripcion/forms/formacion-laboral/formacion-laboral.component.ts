import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableService } from '../../../../@core/data/smart-table.service';

@Component({
  selector: 'ngx-formacion-laboral',
  templateUrl: './formacion-laboral.component.html',
  styleUrls: ['./formacion-laboral.component.scss'],
})
export class FormacionLaboralComponent implements OnInit {
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
      empresa: {
        title: 'Empresa',
        type: 'string',
      },
      anoinicio: {
        title: 'Año de inicio',
        type: 'date',
      },
      anofin: {
        title: 'Año de finalización',
        type: 'date',
      },
      cargo: {
        title: 'Cargo',
        type: 'string',
      },
      acciones: {
        title: 'Eliminar',
        type: 'string',
      },
    },
  };
  source: LocalDataSource = new LocalDataSource();
  constructor(private service: SmartTableService) {
    const data = this.service.getData();
    this.source.load(data);
  }
  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
  ngOnInit() {
  }
}
