import { Component, OnInit } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { UtilidadesService } from '../../../../@core/utils/utilidades.service';

@Component({
  selector: 'ngx-descuentos',
  templateUrl: './descuentos.component.html',
  styleUrls: ['./descuentos.component.scss'],
})
export class DescuentosComponent implements OnInit {
  formDescuentos: any = {
    titulo: this.translate.instant('DESCUENTOS.TITULO'),
    clase: 'col-12',
    btn: this.translate.instant('DESCUENTOS.SIGUIENTE'),
    alertas: true,
    btnLimpiar: this.translate.instant('DESCUENTOS.SALIR'),
    modelo: 'Descuentos',
    tipo_formulario: 'basic',
    campos: [],
  };
  percentage: any;
  percentageTab = [];
  nForms: number;

  setPercentage(number, tab) {
    console.info(number);
    this.percentageTab[tab] = (number * 100) / this.nForms;
    console.info(this.percentageTab);
    this.percentage = Math.round(UtilidadesService.getSumArray(this.percentageTab));
  }
  traerDescuentos(event) {
    console.info(event);
    this.setPercentage(event.percentage, 5);
  }
  construirForm() {
    this.formDescuentos.titulo = this.translate.instant('DESCUENTOS.TITULO');
    this.formDescuentos.btn = this.translate.instant('DESCUENTOS.SIGUIENTE');
    this.formDescuentos.btnLimpiar = this.translate.instant('DESCUENTOS.SALIR');
    this.formDescuentos.campos = [
      /**
        <label class="cabecera">Indique cuales de estos descuentos posee,
        agregue el respectivo comprobante</label>
      **/
      {
        claseGrid: 'col-12',
        clase: 'form-control',
        etiqueta: 'radio',
        nombre: 'Descuento1',
        label: this.translate.instant('DESCUENTOS.DESCUENTO_ELECTORAL'),
        placeholder: 'Seleccione la opción ...',
        requerido: true,
        valor: { Id: 1 },
        opciones: [
          { Id: 1, valor: this.translate.instant('DESCUENTOS.SI') },
          { Id: 2, valor: this.translate.instant('DESCUENTOS.NO') },
        ],
      }, {
        claseGrid: 'col-6',
        clase: 'form-control',
        etiqueta: 'input',
        nombre: 'DocumentoDescuento1',
        label: this.translate.instant('DESCUENTOS.SOPORTE'),
        placeholder: 'Ingrese su soporte ...',
        requerido: true,
        tipo: 'file',
      }, {
        claseGrid: 'col-12',
        clase: 'form-control',
        etiqueta: 'radio',
        nombre: 'Descuento2',
        label: this.translate.instant('DESCUENTOS.USO_DESCUENTO'),
        placeholder: 'Seleccione la opción ...',
        requerido: true,
        valor: { Id: 1 },
        opciones: [
          { Id: 1, valor: this.translate.instant('DESCUENTOS.SI') },
          { Id: 2, valor: this.translate.instant('DESCUENTOS.NO') },
        ],
      }, {
        claseGrid: 'col-9',
        clase: 'form-control',
        etiqueta: 'radio',
        nombre: 'Descuento2-1',
        label: this.translate.instant('DESCUENTOS.DESCUENTO_EGRESADO'),
        placeholder: 'Seleccione la opción ...',
        requerido: true,
        valor: { Id: 2 },
        opciones: [
          { Id: 1, valor: this.translate.instant('DESCUENTOS.SI') },
          { Id: 2, valor: this.translate.instant('DESCUENTOS.NO') },
        ],
      }, {
        claseGrid: 'col-9',
        clase: 'form-control',
        etiqueta: 'radio',
        nombre: 'Descuento2-2',
        label: this.translate.instant('DESCUENTOS.DESCUENTO_MONITOR'),
        placeholder: 'Seleccione la opción ...',
        requerido: true,
        valor: { Id: 2 },
        opciones: [
          { Id: 1, valor: this.translate.instant('DESCUENTOS.SI') },
          { Id: 2, valor: this.translate.instant('DESCUENTOS.NO') },
        ],
      }, {
        claseGrid: 'col-9',
        clase: 'form-control',
        etiqueta: 'radio',
        nombre: 'Descuento2-3',
        label: this.translate.instant('DESCUENTOS.DESCUENTO_CONCEJO'),
        placeholder: 'Seleccione la opción ...',
        requerido: true,
        valor: { Id: 2 },
        opciones: [
          { Id: 1, valor: this.translate.instant('DESCUENTOS.SI') },
          { Id: 2, valor: this.translate.instant('DESCUENTOS.NO') },
        ],
      }, {
        claseGrid: 'col-9',
        clase: 'form-control',
        etiqueta: 'radio',
        nombre: 'Descuento2-4',
        label: this.translate.instant('DESCUENTOS.DESCUENTO_PLANTA'),
        placeholder: 'Seleccione la opción ...',
        requerido: true,
        valor: { Id: 2 },
        opciones: [
          { Id: 1, valor: this.translate.instant('DESCUENTOS.SI') },
          { Id: 2, valor: this.translate.instant('DESCUENTOS.NO') },
        ],
      }, {
        claseGrid: 'col-9',
        clase: 'form-control',
        etiqueta: 'radio',
        nombre: 'Descuento2-5',
        label: this.translate.instant('DESCUENTOS.DESCUENTO_ECAES'),
        placeholder: 'Seleccione la opción ...',
        requerido: true,
        valor: { Id: 2 },
        opciones: [
          { Id: 1, valor: this.translate.instant('DESCUENTOS.SI') },
          { Id: 2, valor: this.translate.instant('DESCUENTOS.NO') },
        ],
      },
      /**
          <div class="seguir">
              <div class="col-xs-6 col-xs-offset-3">
                  <label class="progreso">
                      <progress max="100" value="64"></progress> 64%
                  </label>
              </div>
          </div>
      **/
    ];
  }
  constructor(private translate: TranslateService) {
    this.nForms = 10;
    this.construirForm();
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.construirForm();
    });
  }
  useLanguage(language: string) {
    this.translate.use(language);
  }
  ngOnInit() {
  }

}
