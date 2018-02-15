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
      Id: {
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

  myform1 = {
    titulo: 'Persona',
    clase: 'col-6',
    btn: 'Aceptar',
    alertas: true,
    btnLimpiar: 'Limpiar',
    modelo: 'Persona',
    campos: [{
      etiqueta: 'input',
      nombre: 'Direccion',
      label: 'Dirección',
      placeholder: 'Ingrese Dirección',
      requierido: true,
      tipo: 'range',
    }, {
      etiqueta: 'input',
      nombre: 'Telefono',
      label: 'Teléfono',
      requierido: true,
      placeholder: 'Ingrese Teléfono',
      tipo: 'number',
    }, {
      etiqueta: 'input',
      nombre: 'Primernombre',
      label: 'milabel',
      placeholder: 'placeholder',
      requierido: false,
      tipo: 'text',
    }, {
      etiqueta: 'input',
      nombre: 'color',
      label: 'Color',
      requierido: true,
      tipo: 'color',
    }, {
      etiqueta: 'textarea',
      nombre: 'descripcion',
      label: 'Descripción',
      placeholder: 'ingrese a descripción',
      requierido: true,
      valor: 'Mi descripción',
      tipo: 'color',
    }, {
      etiqueta: 'select',
      nombre: 'numeros',
      label: 'Números',
      placeholder: 'Seleccione el Número',
      requierido: true,
      valor: { Id: 0 },
      opciones: [
        { Id: 0, valor: 'SELECCIONE ...' },
        { Id: 1, valor: 'UNO' },
        { Id: 2, valor: 'DOS' },
        { Id: 3, valor: 'TRES' },
        { Id: 4, valor: 'CUATRO' },
        { Id: 5, valor: 'CINCO' },
      ],
    }, {
      etiqueta: 'radio',
      nombre: 'numeros_radio',
      label: 'Números',
      placeholder: 'Seleccione el Número',
      requierido: true,
      valor: { Id: 1 },
      opciones: [
        { Id: 1, valor: 'UNO' },
        { Id: 2, valor: 'DOS' },
        { Id: 3, valor: 'TRES' },
        { Id: 4, valor: 'CUATRO' },
        { Id: 5, valor: 'CINCO' },
      ],
    }, {
      etiqueta: 'input',
      nombre: 'fecha',
      label: 'Fecha',
      valor: new Date(),
      placeholder: 'ingrese la fecha',
      requierido: true,
      tipo: 'date',
    }],
  };

  myform2 = {
    titulo: 'Otra persona',
    clase: 'col-6',
    alertas: true,
    modelo: 'otra_persona',
    campos: [{
      etiqueta: 'input',
      nombre: 'direccion',
      label: 'Dirección',
      placeholder: 'Ingrese Dirección',
      requierido: true,
      tipo: 'text',
    }, {
      etiqueta: 'input',
      nombre: 'telefono',
      label: 'Teléfono',
      placeholder: 'Ingrese Teléfono',
      tipo: 'number',
    }, {
      etiqueta: 'input',
      nombre: 'primernombre',
      label: 'milabel',
      placeholder: 'placeholder',
      requierido: false,
      tipo: 'text',
    }, {
      etiqueta: 'input',
      nombre: 'color',
      label: 'Color',
      placeholder: 'ingrese a alejandro',
      requierido: true,
      tipo: 'color',
    }, {
      etiqueta: 'input',
      nombre: 'fecha',
      label: 'Fecha',
      placeholder: 'ingrese la fecha',
      requierido: true,
      tipo: 'date',
    }],
  };

  constructor(private service: SmartTableService) {
    const data = this.service.getData();
    this.source.load(data);
  }

  traerPersona(event) {
  }

  traerPersonaSmart(event) {
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
