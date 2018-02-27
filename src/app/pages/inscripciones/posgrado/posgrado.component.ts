import { Component } from '@angular/core';
import { DATOS_PERSONALES } from './forms';
import { DATOS_BASICOS } from './datos-personales';
import { FORMACION_ACADEMICA } from './formacion-academica';
import { IDIOMAS } from './idiomas';
import { FORMACION_LABORAL } from './formacion-laboral';
import { DOCUMENTOS } from './documentos';
import { DESCUENTOS } from './descuentos';
import { UtilidadesService } from '../../../@core/utils/utilidades.service';

@Component({
  selector: 'ngx-posgrado',
  templateUrl: './posgrado.component.html',
  styleUrls: ['./posgrado.component.scss'],
})
export class PosgradoComponent {

  nForms: number;
  persona: any;
  formDatos: any;
  formDatosBasicos: any;
  formFormacionAcademica: any;
  formIdiomas: any;
  formFormacionLaboral: any;
  formDocumentos: any;
  formDescuentos: any;
  percentage: any;
  color = 'primary'
  percentageTab = [];

  setPercentage(number, tab) {
    console.info(number);
    this.percentageTab[tab] = (number * 100) / this.nForms;
    console.info(this.percentageTab);
    this.percentage = Math.round(UtilidadesService.getSumArray(this.percentageTab));
  }

  traerDatosBasicos(event) {
    console.info(event)
    this.setPercentage(event.percentage, 0);
  }

  traerFormacionAcademica(event) {
    console.info(event)
    this.setPercentage(event.percentage, 1);
  }

  traerIdiomas(event) {
    console.info(event);
    this.setPercentage(event.percentage, 2);
  }

  traerFormacionLaboral(event) {
    console.info(event)
    this.setPercentage(event.percentage, 3);
  }

  traerDocumentos(event) {
    console.info(event)
    this.setPercentage(event.percentage, 4);
  }

  traerDescuentos(event) {
    console.info(event);
    this.setPercentage(event.percentage, 5);
  }

  traerPersonaSmart(event) {
    console.info(event)
  }

  constructor() {
    this.formDatosBasicos = DATOS_BASICOS;
    this.formDatos = DATOS_PERSONALES;
    this.formFormacionAcademica = FORMACION_ACADEMICA;
    this.formIdiomas = IDIOMAS;
    this.formFormacionLaboral = FORMACION_LABORAL;
    this.formDocumentos = DOCUMENTOS;
    this.formDescuentos = DESCUENTOS;
    this.percentage = 0;
    this.nForms = 7;
  }
}
