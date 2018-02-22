import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableService } from '../../../@core/data/smart-table.service';

@Component({
  selector: 'ngx-estado-inscripciones',
  templateUrl: './estado-inscripciones.component.html',
  styleUrls: ['./estado-inscripciones.component.scss'],
})
export class EstadoInscripcionesComponent implements OnInit {
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
      numeropreinscritos: {
        title: 'Número de pre-inscritos',
        type: 'number',
      },
      numeroinscritos: {
        title: 'Número de inscritoss',
        type: 'number',
      },
      numeroadmitidos: {
        title: 'Número de admitidos',
        type: 'number',
      },
      numeromatriculados: {
        title: 'Número de matriculados',
        type: 'number',
      },
      accion1: {
        title: 'Ver pre-inscritos',
        type: 'number',
      },
      accion2: {
        title: 'Ver inscritos',
        type: 'number',
      },
      accion3: {
        title: 'Ver matriculados',
        type: 'number',
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
