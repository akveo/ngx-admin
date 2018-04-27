import { Component, OnInit } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { UtilidadesService } from '../../../../@core/utils/utilidades.service';

@Component({
  selector: 'ngx-informacion-adicional',
  templateUrl: './informacion-adicional.component.html',
  styleUrls: ['./informacion-adicional.component.scss'],
})
export class InformacionAdicionalComponent implements OnInit {
  filesUp: any;
  formInformacionAdicional: any = {
    titulo: this.translate.instant('DATOS_BASICOS.TITULO2'),
    btn: this.translate.instant('DATOS_BASICOS.SIGUIENTE'),
    clase: 'col-12',
    alertas: true,
    btnLimpiar: this.translate.instant('DATOS_BASICOS.SALIR'),
    modelo: 'InformacionAdicional',
    tipo_formulario: 'basic',
    campos: [],
  };
  percentage: any;
  language: string;
  percentageTab = [];
  nForms: number;

  setPercentage(number, tab) {
    console.info(number);
    this.percentageTab[tab] = (number * 100) / this.nForms;
    console.info(this.percentageTab);
    this.percentage = Math.round(UtilidadesService.getSumArray(this.percentageTab));
  }
  traerInformacionAdicional(event) {
    console.info(event);
    this.filesUp = event.files;
    this.setPercentage(event.percentage, 2);
  }

  guardarFileService(event){
    console.info(event);
  }
  construirForm() {
    this.formInformacionAdicional.titulo = this.translate.instant('DATOS_BASICOS.TITULO2');
    this.formInformacionAdicional.btn = this.translate.instant('DATOS_BASICOS.SIGUIENTE');
    this.formInformacionAdicional.btnLimpiar = this.translate.instant('DATOS_BASICOS.SALIR');
    this.formInformacionAdicional.campos = [
      {
        claseGrid: 'col-12',
        clase: 'form-control',
        etiqueta: 'file',
        nombre: 'Foto',
        label: '* ' + this.translate.instant('DATOS_BASICOS.FOTO'),
        placeholder: 'Ingrese su foto',
        requerido: true,
        tipo: 'image',
        formatos: 'png/jpg/jpeg',
        tamanoMaximo: 2,
      }, {
        claseGrid: 'col-6',
        clase: 'form-control',
        etiqueta: 'select',
        nombre: 'GrupoSanguineo',
        label: '* ' + this.translate.instant('DATOS_BASICOS.GRUPO_SANGUINEO'),
        requerido: true,
        valor: { Id: 0 },
        opciones: [
          { Id: 0, valor: 'Seleccione su grupo sanguíneo ...' },
          { Id: 1, valor: 'A' },
          { Id: 2, valor: 'AB' },
          { Id: 3, valor: 'B' },
          { Id: 4, valor: 'O' },
        ],
      }, {
        claseGrid: 'col-6',
        clase: 'form-control',
        etiqueta: 'select',
        nombre: 'RH',
        label: '* ' + this.translate.instant('DATOS_BASICOS.RH'),
        requerido: true,
        valor: { Id: 0 },
        opciones: [
          { Id: 0, valor: 'Seleccione su RH ...' },
          { Id: 1, valor: 'Positivo' },
          { Id: 2, valor: 'Negativo' },
        ],
      }, {
        claseGrid: 'col-6',
        clase: 'form-control',
        etiqueta: 'select',
        nombre: 'TipoLibretaMilitar',
        label: this.translate.instant('DATOS_BASICOS.TIPO_LIBRETA_MILITAR'),
        requerido: false,
        valor: { Id: 0 },
        opciones: [
          { Id: 0, valor: 'Seleccione su tipo de libreta ...' },
          { Id: 1, valor: 'Primera clase' },
          { Id: 2, valor: 'Segunda clase' },
        ],
      }, {
        claseGrid: 'col-6',
        clase: 'form-control',
        etiqueta: 'input',
        nombre: 'NumeroLibretaMilitar',
        label: this.translate.instant('DATOS_BASICOS.NUMERO_LIBRETA_MILITAR'),
        placeholder: 'Ej. 55555555',
        requerido: false,
        tipo: 'number',
        minimo: 0,
      }, {
        claseGrid: 'col-6',
        clase: 'form-control',
        etiqueta: 'select',
        nombre: 'EstadoCivil',
        label: '* ' + this.translate.instant('DATOS_BASICOS.ESTADO_CIVIL'),
        placeholder: 'Seleccione ...',
        requerido: true,
        valor: { Id: 0 },
        opciones: [
          { Id: 0, valor: 'Seleccione ...' },
          { Id: 1, valor: 'Soltero(a)' },
          { Id: 2, valor: 'Casado(a)' },
          { Id: 3, valor: 'Viudo(a)' },
          { Id: 4, valor: 'Unión libre' },
          { Id: 5, valor: 'Divorciado(a)' },
        ],
      }, {
        claseGrid: 'col-6',
        clase: 'form-control',
        etiqueta: 'select',
        nombre: 'GrupoEtnico',
        label: '* ' + this.translate.instant('DATOS_BASICOS.GRUPO_ETNICO'),
        placeholder: 'Seleccione ...',
        requerido: true,
        valor: { Id: 0 },
        opciones: [
          { Id: 0, valor: 'Seleccione ...' },
          { Id: 1, valor: 'No aplica' },
          { Id: 2, valor: 'Comunidad indígena' },
          { Id: 3, valor: 'Comunidad afrodescendiente' },
          { Id: 4, valor: 'Comunidad rom' },
          { Id: 5, valor: 'Comuidad gitana' },
          { Id: 6, valor: 'Comunidad raizal' },
          { Id: 7, valor: 'Comunidad palenquero' },
          { Id: 8, valor: 'Comunidad desplazada' },
        ],
      }, {
        claseGrid: 'col-12',
        clase: 'form-control',
        etiqueta: 'checkbox',
        nombre: 'Discapacidad',
        label: '*' + this.translate.instant('DATOS_BASICOS.DISCAPACIDAD'),
        placeholder: 'Seleccione la opción ...',
        requerido: true,
        opciones: [
          { Id: 1, nombre: 'Ninguna', valor: this.translate.instant('DATOS_BASICOS.DIS_NINGUNA') },
          { Id: 2, nombre: 'Auditiva', valor: this.translate.instant('DATOS_BASICOS.DIS_AUDITIVA') },
          { Id: 3, nombre: 'Visual', valor: this.translate.instant('DATOS_BASICOS.DIS_VISUAL') },
          { Id: 4, nombre: 'Motriz', valor: this.translate.instant('DATOS_BASICOS.DIS_MOTRIZ') },
          { Id: 5, nombre: 'Intelectual', valor: this.translate.instant('DATOS_BASICOS.DIS_INTELECTUAL') },
          { Id: 6, nombre: 'Visceral', valor: this.translate.instant('DATOS_BASICOS.DIS_VISCERAL') },
        ],
      },
      /**
      <div class="discapacidad">
          <label for="discapacidad">* Tipos de discapacidad que posea</label>
          <br>
          <label class="custom-control custom-checkbox">
              <input class="custom-control-input" type="checkbox">
              <span class="custom-control-indicator"></span>
              <span class="custom-control-description">
                  Ninguna
              </span>
          </label>
          <label class="custom-control custom-checkbox">
              <input class="custom-control-input" type="checkbox">
              <span class="custom-control-indicator"></span>
              <span class="custom-control-description">
                  Discapacidad auditiva
              </span>
          </label>
          <label class="custom-control custom-checkbox">
              <input class="custom-control-input" type="checkbox">
              <span class="custom-control-indicator"></span>
              <span class="custom-control-description">
                  Discapacidad visual
              </span>
          </label>
          <label class="custom-control custom-checkbox">
              <input class="custom-control-input" type="checkbox">
              <span class="custom-control-indicator"></span>
              <span class="custom-control-description">
                  Discapacidad motriz
              </span>
          </label>
          <label class="custom-control custom-checkbox">
              <input class="custom-control-input" type="checkbox">
              <span class="custom-control-indicator"></span>
              <span class="custom-control-description">
                  Discapacidad intelectual
              </span>
          </label>
          <label class="custom-control custom-checkbox">
              <input class="custom-control-input" type="checkbox">
              <span class="custom-control-indicator"></span>
              <span class="custom-control-description">
                  Discapacidad visceral
              </span>
          </label>
      </div>
      **/
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
