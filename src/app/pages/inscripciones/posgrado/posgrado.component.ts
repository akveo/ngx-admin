import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
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
  tabs: number;
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

  setPercentage(number) {
    this.percentage = (number * 100) / this.tabs;
  }

  traerDatos(event) {
    this.persona = event;
    this.setPercentage(event.percentage);
  }

  traerDatosBasicos(event) {
    console.info(event)
    this.setPercentage(event.percentage);
  }

  traerFormacionAcademica(event) {
    console.info(event)
    this.setPercentage(event.percentage);
  }

  traerIdiomas(event) {
    console.info(event)
  }

  traerFormacionLaboral(event) {
    console.info(event)
  }

  traerDocumentos(event) {
    console.info(event)
  }

  traerDescuentos(event) {
    console.info(event)
  }

  traerPersonaSmart(event) {
    console.info(event)
  }

  constructor(private translate: TranslateService) {
    this.translate = translate;
    this.formDatosBasicos = DATOS_BASICOS;
    this.formDatos = DATOS_PERSONALES;
    this.formFormacionAcademica = FORMACION_ACADEMICA;
    this.formIdiomas = IDIOMAS;
    this.formFormacionLaboral = FORMACION_LABORAL;
    this.formDocumentos = DOCUMENTOS;
    this.formDescuentos = DESCUENTOS;
    this.percentage = 0;
    this.tabs = 7;
  }
  useLanguage(language: string) {
    this.translate.use(language);
  }
}
