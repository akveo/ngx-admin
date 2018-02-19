import { Component } from '@angular/core';

@Component({
  selector: 'ngx-posgrado',
  templateUrl: './posgrado.component.html',
  styleUrls: ['./posgrado.component.scss'],
})
export class PosgradoComponent {

  formDatosBasicos = {
    titulo: 'Datos Personales',
    clase: 'col-8',
    alertas: true,
    modelo: 'Persona',
    campos: [
      {
        etiqueta: 'input',
        nombre: 'Telefono',
        label: 'Teléfono',
        placeholder: 'Ej. 110101',
        tipo: 'number',
        valor: '123412341234',
        deshabilitar: true,
        requerido: true,
      },
      {
        etiqueta: 'input',
        nombre: 'TelefonoContacto',
        label: 'Teléfono de contacto',
        placeholder: 'Ej. 110101',
        tipo: 'number',
        requerido: true,
      },
      {
        etiqueta: 'input',
        nombre: 'Direccion',
        label: '* Dirección',
        placeholder: 'Ej. Cll 123 # 123 - 123',
        requerido: true,
      }, {
        etiqueta: 'input',
        nombre: 'CodigoPostal',
        label: 'Código postal',
        placeholder: 'Ej. 110101',
        tipo: 'number',
      }, {
        etiqueta: 'file',
        nombre: 'soporte',
        label: 'Soporte Documento',
        requerido: true,
      }, {
        etiqueta: 'select',
        nombre: 'GrupoSanguineo',
        label: 'Grupo sanguíneo',
        requerido: true,
        valor: { Id: 0 },
        opciones: [
          { Id: 0, valor: 'SELECCIONE ...' },
          { Id: 1, valor: 'A' },
          { Id: 2, valor: 'B' },
          { Id: 3, valor: 'AB' },
          { Id: 4, valor: 'O' },
        ],
      },
    ],
  }

  otroForm = {
    titulo: 'Datos Personales',
    clase: 'col-6',
    alertas: true,
    modelo: 'Persona',
    campos: [{
        etiqueta: 'select',
        nombre: 'programa',
        label: 'Programa al que aspira',
        placeholder: 'Seleccione ...',
        requerido: true,
        valor: { Id: 0 },
        opciones: [
          { Id: 0, valor: 'SELECCIONE ...' },
          { Id: 1, valor: ' Educación - Facultad de Educación' },
          { Id: 2, valor: ' Educación - Facultad de Ciencias' },
        ],
      },
    ],
  }
  traerDatos(event) {
     console.log(event)
  }

  traerPersonaSmart(event) {
     console.log(event)
  }

  constructor() { }

}
