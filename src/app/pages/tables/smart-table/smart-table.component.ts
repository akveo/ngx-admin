import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableService } from '../../../@core/data/smart-table.service';

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './smart-table.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
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
        title: 'ID',
        type: 'number',
      },
      firstName: {
        title: 'First Name',
        type: 'string',
      },
      lastName: {
        title: 'Last Name',
        type: 'string',
      },
      username: {
        title: 'Username',
        type: 'string',
      },
      email: {
        title: 'E-mail',
        type: 'string',
      },
      age: {
        title: 'Age',
        type: 'number',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  myform = {
    titulo: 'Formulario de prueba',
    clase: 'col-12',
    btn:'Aceptar',
    modelo:'persona',
    campos: [{
      etiqueta: 'input',
      nombre: 'direccion',
      label: 'Dirección',
      placeholder: 'Ingrese Dirección',
      requierido: true,
      tipo: 'text',
    },{
      etiqueta: 'input',
      nombre: 'telefono',
      label: 'Teléfono',
      placeholder: 'Ingrese Teléfono',
      tipo: 'number'
    },{
      etiqueta: 'input',
      nombre: 'primernombre',
      label: 'milabel',
      placeholder: 'placeholder',
      requierido: false,
      tipo: 'text'
    },{
      etiqueta: 'input',
      nombre: 'alejandro',
      valor : 'es gay',
      label: 'Alejandro',
      placeholder: 'ingrese a alejandro',
      requierido: true,
      tipo: 'text'
    }]
  };

  constructor(private service: SmartTableService) {
    const data = this.service.getData();
    this.source.load(data);
  }

  traerPersona(event){
    console.log(event);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
