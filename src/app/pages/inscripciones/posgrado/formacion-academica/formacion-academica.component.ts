import { Component, OnInit } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { UtilidadesService } from '../../../../@core/utils/utilidades.service';

@Component({
  selector: 'ngx-formacion-academica',
  templateUrl: './formacion-academica.component.html',
  styleUrls: ['./formacion-academica.component.scss'],
})
export class FormacionAcademicaComponent implements OnInit {
  formFormacionAcademica: any = {
    titulo: this.translate.instant('FORMACION_ACADEMICA.TITULO'),
    clase: 'col-12',
    btn: this.translate.instant('FORMACION_ACADEMICA.SIGUIENTE'),
    alertas: true,
    btnLimpiar: this.translate.instant('FORMACION_ACADEMICA.SALIR'),
    modelo: 'FormacionAcademica',
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
  traerFormacionAcademica(event) {
    console.info(event)
    this.setPercentage(event.percentage, 1);
  }
  construirForm() {
    this.formFormacionAcademica.titulo = this.translate.instant('FORMACION_ACADEMICA.TITULO');
    this.formFormacionAcademica.btn = this.translate.instant('FORMACION_ACADEMICA.SIGUIENTE');
    this.formFormacionAcademica.btnLimpiar = this.translate.instant('FORMACION_ACADEMICA.SALIR');
    this.formFormacionAcademica.campos = [
      /**
          <label class="cabecera">Para ingresar la formación académica,
          ingrese la respectiva información y presione el botón agregar.
          Realizar esto por cada estudio que posea.</label>
      **/
      {
        claseGrid: 'col-6',
        clase: 'form-control',
        etiqueta: 'select',
        nombre: 'NivelFormacion',
        label: '* ' + this.translate.instant('FORMACION_ACADEMICA.NIVEL_FORMACION'),
        placeholder: 'Seleccione el nivel de formación ...',
        requerido: true,
        valor: { Id: 0 },
        opciones: [
          { Id: 0, valor: 'Seleccione el nivel de formación ...' },
          { Id: 1, valor: 'Profesional' },
          { Id: 2, valor: 'Diplomado' },
          { Id: 3, valor: 'Especialización' },
          { Id: 4, valor: 'Maestría' },
          { Id: 5, valor: 'Doctorado' },
        ],
      }, {
        claseGrid: 'col-3',
        clase: 'form-control',
        etiqueta: 'input',
        nombre: 'AnioInicio',
        label: '* ' + this.translate.instant('FORMACION_ACADEMICA.ANIO_INICIO'),
        placeholder: 'Ej. 2018',
        requerido: true,
        tipo: 'number',
        minimo: 1900,
      }, {
        claseGrid: 'col-3',
        clase: 'form-control',
        etiqueta: 'input',
        nombre: 'AnioGrado',
        label: '* ' + this.translate.instant('FORMACION_ACADEMICA.ANIO_FIN'),
        placeholder: 'Ej. 2018',
        requerido: true,
        tipo: 'number',
        minimo: 1900,
      }, {
        claseGrid: 'col-6',
        clase: 'form-control',
        etiqueta: 'select',
        nombre: 'PaisUniversidad',
        label: '* ' + this.translate.instant('FORMACION_ACADEMICA.PAIS_UNIVERSIDAD'),
        placeholder: 'Seleccione el país de la universidad ...',
        requerido: true,
        valor: { Id: 0 },
        opciones: [
          { Id: 0, valor: 'Seleccione el país de la universidad ...' },
          { Id: 1, valor: 'Perú' },
          { Id: 2, valor: 'Chile' },
          { Id: 3, valor: 'Colombia' },
          { Id: 4, valor: 'Rusia' },
        ],
      }, {
        claseGrid: 'col-6',
        clase: 'form-control',
        etiqueta: 'select',
        nombre: 'CiudadUniversidad',
        label: '* ' + this.translate.instant('FORMACION_ACADEMICA.CIUDAD_UNIVERSIDAD'),
        placeholder: 'Seleccione la ciudad de la universidad ...',
        requerido: true,
        valor: { Id: 0 },
        opciones: [
          { Id: 0, valor: 'Seleccione la ciudad de la universidad ...' },
          { Id: 1, valor: 'AAA' },
          { Id: 2, valor: 'BBB' },
          { Id: 3, valor: 'CCC' },
          { Id: 4, valor: 'DDD' },
        ],
      }, {
        claseGrid: 'col-6',
        clase: 'form-control',
        etiqueta: 'input',
        nombre: 'NombreUniversidad',
        label: '* ' + this.translate.instant('FORMACION_ACADEMICA.NOMBRE_UNIVERSIDAD'),
        placeholder: 'Ej. Universidad Distrital Francisco José de Caldas',
        requerido: true,
        tipo: 'text',
      }, {
        claseGrid: 'col-6',
        clase: 'form-control',
        etiqueta: 'select',
        nombre: 'Modalidad',
        label: '* ' + this.translate.instant('FORMACION_ACADEMICA.MODALIDAD'),
        placeholder: 'Seleccione la modalidad de estudio ...',
        requerido: true,
        valor: { Id: 0 },
        opciones: [
          { Id: 0, valor: 'Seleccione la modalidad de estudio ...' },
          { Id: 1, valor: 'Presencial' },
          { Id: 2, valor: 'A distancia' },
          { Id: 3, valor: 'Virtual' },
        ],
      }, {
        claseGrid: 'col-6',
        clase: 'form-control',
        etiqueta: 'input',
        nombre: 'TituloGrado',
        label: '* ' + this.translate.instant('FORMACION_ACADEMICA.TITULO_OBTENIDO'),
        placeholder: 'Ej. Licenciado de física',
        requerido: true,
        tipo: 'text',
      }, {
        claseGrid: 'col-6',
        clase: 'form-control',
        etiqueta: 'input',
        nombre: 'TituloTrabajoGrado',
        label: '* ' + this.translate.instant('FORMACION_ACADEMICA.TITULO_TRABAJO_GRADO'),
        placeholder: 'Ingrese el título de su trabajo de grado ...',
        requerido: true,
        tipo: 'text',
      }, {
        claseGrid: 'col-12',
        clase: 'form-control',
        etiqueta: 'textarea',
        nombre: 'DescripcionTrabajoGrado',
        label: '* ' + this.translate.instant('FORMACION_ACADEMICA.DESCRIPCION_TRABAJO_GRADO'),
        placeholder: 'Ingrese una breve descripción del trabajo de grado ...',
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
                      <progress max="100" value="16"></progress> 16%
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
