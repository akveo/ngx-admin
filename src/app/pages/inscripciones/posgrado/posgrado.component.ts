import { Component } from '@angular/core';
import { DATOS_PERSONALES } from './forms';
import { DATOS_BASICOS } from './datos-personales';
import { FORMACION_ACADEMICA } from './formacion-academica';
import { IDIOMAS } from './idiomas';
import { FORMACION_LABORAL } from './formacion-laboral';
import { DOCUMENTOS } from './documentos';
import { DESCUENTOS } from './descuentos';

@Component({
  selector: 'ngx-posgrado',
  templateUrl: './posgrado.component.html',
  styleUrls: ['./posgrado.component.scss'],
})
export class PosgradoComponent {
  formDatos: any;
  formDatosBasicos: any;
  formFormacionAcademica: any;
  formIdiomas: any;
  formFormacionLaboral: any;
  formDocumentos: any;
  formDescuentos: any;
  percentage = 90;
  color = 'primary'

  traerDatos(event) {
    // console.log(event)
  }

  traerDatosBasicos(event) {
    // console.log(event)
  }

  traerFormacionAcademica(event) {
    // console.log(event)
  }

  traerIdiomas(event) {
    // console.log(event)
  }

  traerFormacionLaboral(event) {
    // console.log(event)
  }

  traerDocumentos(event) {
    // console.log(event)
  }

  traerDescuentos(event) {
    // console.log(event)
  }

  traerPersonaSmart(event) {
    // console.log(event)
  }

  constructor() {
    this.formDatosBasicos = DATOS_BASICOS;
    this.formDatos = DATOS_PERSONALES;
    this.formFormacionAcademica = FORMACION_ACADEMICA;
    this.formIdiomas = IDIOMAS;
    this.formFormacionLaboral = FORMACION_LABORAL;
    this.formDocumentos = DOCUMENTOS;
    this.formDescuentos = DESCUENTOS;
  }
}
