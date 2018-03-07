import { Component } from '@angular/core';
import { TranslateService, LangChangeEvent} from '@ngx-translate/core';
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
  tabs: any[];

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
  traerDatos(event) {
    console.info(event)
  }

  construirTab() {
    this.tabs = [
      {
        title: '2. ' + this.translate.instant('DATOS_BASICOS.TITULO2'),
        route: '/pages/inscripciones/posgrado/informacion-adicional',
      },
      {
        title: '3. ' + this.translate.instant('DATOS_BASICOS.TITULO3'),
        route: '/pages/inscripciones/posgrado/informacion-contacto',
      },
      {
        title: '4. ' + this.translate.instant('DATOS_BASICOS.TITULO4'),
        route: '/pages/inscripciones/posgrado/seleccion-programa',
      },
      {
        title: '5. ' + this.translate.instant('FORMACION_ACADEMICA.TITULO'),
        route: '/pages/inscripciones/posgrado/formacion-academica',
      },
      {
        title: '6. ' + this.translate.instant('IDIOMAS.TITULO'),
        route: '/pages/inscripciones/posgrado/idiomas',
      },
      {
        title: '7. ' + this.translate.instant('FORMACION_LABORAL.TITULO'),
        route: '/pages/inscripciones/posgrado/formacion-laboral',
      },
      {
        title: '8. ' + this.translate.instant('DOCUMENTOS.TITULO'),
        route: '/pages/inscripciones/posgrado/documentos',
      },
      {
        title: '9. ' + this.translate.instant('DESCUENTOS.TITULO'),
        route: '/pages/inscripciones/posgrado/descuentos',
      },
      {
        title: '10. ' + this.translate.instant('PROPUESTA_TRABAJO_GRADO.TITULO'),
        route: '/pages/inscripciones/posgrado/trabajo-grado',
      },
      {
        title: '11. ' + this.translate.instant('ENVIO.TITULO'),
        route: '/pages/inscripciones/posgrado/fin-inscripcion',
      },
    ];
  }
  constructor(private translate: TranslateService) {
    this.translate = translate;
    this.construirTab();
    this.formDatosBasicos = DATOS_BASICOS;
    this.formDatos = DATOS_PERSONALES;
    this.formFormacionAcademica = FORMACION_ACADEMICA;
    this.formIdiomas = IDIOMAS;
    this.formFormacionLaboral = FORMACION_LABORAL;
    this.formDocumentos = DOCUMENTOS;
    this.formDescuentos = DESCUENTOS;
    this.percentage = 0;
    this.nForms = 7;
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.construirTab();
    });
  }
  useLanguage(language: string) {
    this.translate.use(language);
  }
}
