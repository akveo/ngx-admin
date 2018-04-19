import { Component, OnInit } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { UtilidadesService } from '../../../../@core/utils/utilidades.service';

@Component({
  selector: 'ngx-formacion-laboral',
  templateUrl: './formacion-laboral.component.html',
  styleUrls: ['./formacion-laboral.component.scss'],
})
export class FormacionLaboralComponent implements OnInit {
  formFormacionLaboral: any = {
    titulo: this.translate.instant('FORMACION_LABORAL.TITULO'),
    clase: 'col-12',
    btn: this.translate.instant('FORMACION_LABORAL.SIGUIENTE'),
    alertas: true,
    btnLimpiar: this.translate.instant('FORMACION_LABORAL.SALIR'),
    modelo: 'FormacionLaboral',
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
  traerFormacionLaboral(event) {
    console.info(event);
    this.setPercentage(event.percentage, 2);
  }
  construirForm() {
    this.formFormacionLaboral.titulo = this.translate.instant('FORMACION_LABORAL.TITULO');
    this.formFormacionLaboral.btn = this.translate.instant('FORMACION_LABORAL.SIGUIENTE');
    this.formFormacionLaboral.btnLimpiar = this.translate.instant('FORMACION_LABORAL.SALIR');
    this.formFormacionLaboral.campos = [
      /**
          <label class="cabecera">Para ingresar la formación laboral,
          ingrese la respectiva información y presione el botón agregar.
          Realizar esto por cada labor desempeñada.</label>
      **/
      {
        claseGrid: 'col-6',
        clase: 'form-control',
        etiqueta: 'input',
        nombre: 'NombreEmpresa',
        label: '* ' + this.translate.instant('FORMACION_LABORAL.NOMBRE_EMPRESA'),
        placeholder: 'Ej. Empresa S.A.',
        requerido: true,
        tipo: 'text',
      }, {
        claseGrid: 'col-6',
        clase: 'form-control',
        etiqueta: 'input',
        nombre: 'DireccionEmpresa',
        label: '* ' + this.translate.instant('FORMACION_LABORAL.DIRECCION_EMPRESA'),
        placeholder: 'Ej. Cll 123 # 123 - 123',
        requerido: true,
        tipo: 'text',
      }, {
        claseGrid: 'col-6',
        clase: 'form-control',
        etiqueta: 'input',
        nombre: 'EmailEmpresa',
        label: '* ' + this.translate.instant('FORMACION_LABORAL.CORREO_EMPRESA'),
        placeholder: 'Ej. algo@algo.com',
        requerido: true,
        tipo: 'email',
      }, {
        claseGrid: 'col-6',
        clase: 'form-control',
        etiqueta: 'input',
        nombre: 'TelefonoEmpresa',
        label: '* ' + this.translate.instant('FORMACION_LABORAL.TELEFONO_EMPRESA'),
        placeholder: 'Ej. 55555555',
        requerido: true,
        tipo: 'number',
        minimo: 100,
      }, {
        claseGrid: 'col-3',
        clase: 'form-control',
        etiqueta: 'input',
        nombre: 'FechaInicio',
        label: '* ' + this.translate.instant('FORMACION_LABORAL.ANIO_INICIO'),
        placeholder: 'Ej. 01/01/2010',
        requerido: true,
        tipo: 'date',
      }, {
        claseGrid: 'col-3',
        clase: 'form-control',
        etiqueta: 'input',
        nombre: 'FechaFin',
        label: this.translate.instant('FORMACION_LABORAL.ANIO_FIN'),
        placeholder: 'Ej. 01/01/2010',
        requerido: false,
        tipo: 'date',
      }, {
        claseGrid: 'col-6',
        clase: 'form-control',
        etiqueta: 'input',
        nombre: 'Cargo',
        label: '* ' + this.translate.instant('FORMACION_LABORAL.CARGO'),
        placeholder: 'Ej. Docente',
        requerido: true,
        tipo: 'text',
      }, {
        claseGrid: 'col-12',
        clase: 'form-control',
        etiqueta: 'textarea',
        nombre: 'DescripcionCargo',
        label: '* ' + this.translate.instant('FORMACION_LABORAL.DESCRIPCION_CARGO'),
        placeholder: 'Ingrese una breve descripción del cargo desempeñado ...',
        requerido: true,
        /**
            rows="5"
        **/
      },
      /**
          <div class="agregar">
              <input class="btn btn-success" type="button" value="Agregar información">
          </div>
          <hr>
          <ng2-smart-table [settings]="settings" [source]="source" (deleteConfirm)="onDeleteConfirm($event)">
          </ng2-smart-table>
          <hr>
          <div class="seguir">
              <div class="col-xs-6 col-xs-offset-3">
                  <label class="progreso">
                      <progress max="100" value="32"></progress> 32%
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
