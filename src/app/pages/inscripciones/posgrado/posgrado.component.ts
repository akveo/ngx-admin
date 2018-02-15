import { Component } from '@angular/core';

@Component({
  selector: 'ngx-posgrado',
  templateUrl: './posgrado.component.html',
  styleUrls: ['./posgrado.component.scss'],
})
export class PosgradoComponent {

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

  formDatosBasicos = {
    titulo: 'Datos Personales',
    clase: 'col-6',
    alertas: true,
    modelo: 'Persona',
    campos: [
      {
        etiqueta: 'input',
        nombre: 'Telefono',
        label: 'Teléfono',
        placeholder: 'Ej. 110101',
        tipo: 'number',
        requierido: true,
      },
      {
        etiqueta: 'input',
        nombre: 'TelefonoContacto',
        label: 'Teléfono de contacto',
        placeholder: 'Ej. 110101',
        tipo: 'number',
        requierido: true,
      },
      {
        etiqueta: 'input',
        nombre: 'Direccion',
        label: '* Dirección',
        placeholder: 'Ej. Cll 123 # 123 - 123',
        requierido: true,
      }, {
        etiqueta: 'input',
        nombre: 'CodigoPostal',
        label: 'Código postal',
        placeholder: 'Ej. 110101',
        tipo: 'number',
      },
      {
        etiqueta: 'select',
        nombre: 'GrupoSanguineo',
        label: 'Grupo sanguíneo',
        requierido: true,
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
        requierido: true,
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
    // console.log(event)
  }

  traerPersonaSmart(event) {
    // console.log(event)
  }

  constructor() { }

}
