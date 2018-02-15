import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableService } from '../../../../@core/data/smart-table.service';

@Component({
  selector: 'ngx-idiomas',
  templateUrl: './idioma.component.html',
  styleUrls: ['./idioma.component.scss'],
})
export class IdiomaComponent implements OnInit {
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
      idioma: {
        title: 'Idioma',
        type: 'string',
      },
      nativo: {
        title: 'Idioma materno',
        type: 'string',
      },
      habla: {
        title: 'Nivel de habla',
        type: 'string',
      },
      escucha: {
        title: 'Nivel de escucha',
        type: 'string',
      },
      lectura: {
        title: 'Nivel de lectura',
        type: 'string',
      },
      escritura: {
        title: 'Nivel de escritura',
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
