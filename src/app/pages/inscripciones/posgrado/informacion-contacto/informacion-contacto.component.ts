import { Component, OnInit } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { UtilidadesService } from '../../../../@core/utils/utilidades.service';

@Component({
  selector: 'ngx-informacion-contacto',
  templateUrl: './informacion-contacto.component.html',
  styleUrls: ['./informacion-contacto.component.scss'],
})
export class InformacionContactoComponent implements OnInit {
  formInformacionContacto: any = {
    titulo: this.translate.instant('DATOS_BASICOS.TITULO3'),
    clase: 'col-12',
    btn: this.translate.instant('DATOS_BASICOS.SIGUIENTE'),
    alertas: true,
    btnLimpiar: this.translate.instant('DATOS_BASICOS.SALIR'),
    modelo: 'InformacionContacto',
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
  traerInformacionContacto(event) {
    console.info(event);
    this.setPercentage(event.percentage, 2);
  }
  construirForm() {
    this.formInformacionContacto.titulo = this.translate.instant('DATOS_BASICOS.TITULO3');
    this.formInformacionContacto.btn = this.translate.instant('DATOS_BASICOS.SIGUIENTE');
    this.formInformacionContacto.btnLimpiar = this.translate.instant('DATOS_BASICOS.SALIR');
    this.formInformacionContacto.campos = [
      {
        claseGrid: 'col-6',
        clase: 'form-control',
        etiqueta: 'select',
        nombre: 'PaisResidencia',
        label: '* ' + this.translate.instant('DATOS_BASICOS.PAIS_RESIDENCIA'),
        requerido: true,
        valor: { Id: 0 },
        opciones: [
          { Id: 0, valor: 'Seleccione su país de residencia ...' },
          { Id: 1, valor: 'Perú' },
          { Id: 2, valor: 'Chile' },
          { Id: 3, valor: 'Colombia' },
          { Id: 4, valor: 'Rusia' },
        ],
      }, {
        claseGrid: 'col-6',
        clase: 'form-control',
        etiqueta: 'select',
        nombre: 'CiudadResidencia',
        label: '* ' + this.translate.instant('DATOS_BASICOS.CIUDAD_RESIDENCIA'),
        requerido: true,
        valor: { Id: 0 },
        opciones: [
          { Id: 0, valor: 'Seleccione su ciudad de residencia ...' },
          { Id: 1, valor: 'AAA' },
          { Id: 2, valor: 'BBB' },
          { Id: 3, valor: 'CCC' },
          { Id: 4, valor: 'DDD' },
        ],
      }, {
        claseGrid: 'col-6',
        clase: 'form-control',
        etiqueta: 'input',
        nombre: 'Direccion',
        label: '* ' + this.translate.instant('DATOS_BASICOS.DIRECCION_RESIDENCIA'),
        placeholder: 'Ej. Cll 123 # 123 - 123',
        requerido: true,
        tipo: 'text',
      }, {
        claseGrid: 'col-6',
        clase: 'form-control',
        etiqueta: 'input',
        nombre: 'CodigoPostal',
        label: this.translate.instant('DATOS_BASICOS.CODIGO_POSTAL'),
        placeholder: 'Ej. 555',
        requerido: false,
        tipo: 'number',
        minimo: 0,
      }, {
        claseGrid: 'col-6',
        clase: 'form-control',
        etiqueta: 'input',
        nombre: 'Telefono',
        label: '* ' + this.translate.instant('DATOS_BASICOS.TELEFONO'),
        placeholder: 'Ej. 5525252',
        requerido: true,
        tipo: 'number',
        minimo: 100,
      }, {
        claseGrid: 'col-6',
        clase: 'form-control',
        etiqueta: 'input',
        nombre: 'TelefonoContacto',
        label: '* ' + this.translate.instant('DATOS_BASICOS.TELEFONO_ALT'),
        placeholder: 'Ej. 5525252',
        requerido: true,
        tipo: 'number',
        minimo: 100,
      },
      /**
          <div class="seguir">
              <div class="col-xs-6 col-xs-offset-3">
                  <label class="progreso">
                      <progress max="100" value="0"></progress> 0%
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
