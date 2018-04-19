import { Component, OnInit } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { UtilidadesService } from '../../../../@core/utils/utilidades.service';

@Component({
  selector: 'ngx-idiomas',
  templateUrl: './idiomas.component.html',
  styleUrls: ['./idiomas.component.scss'],
})
export class IdiomasComponent implements OnInit {
  formIdiomas: any = {
    titulo: this.translate.instant('IDIOMAS.TITULO'),
    clase: 'col-12',
    btn: this.translate.instant('IDIOMAS.SIGUIENTE'),
    alertas: true,
    btnLimpiar: this.translate.instant('IDIOMAS.SALIR'),
    modelo: 'Idiomas',
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
  traerIdiomas(event) {
    console.info(event);
    this.setPercentage(event.percentage, 2);
  }
  construirForm() {
    this.formIdiomas.titulo = this.translate.instant('IDIOMAS.TITULO');
    this.formIdiomas.btn = this.translate.instant('IDIOMAS.SIGUIENTE');
    this.formIdiomas.btnLimpiar = this.translate.instant('IDIOMAS.SALIR');
    this.formIdiomas.campos = [
      /**
          <label class="cabecera">Para ingresar los idiomas los cuaes tenga conocimiento,
          ingrese la respectiva información y presione el botón agregar.
          Realizar esto por cada uno.</label>
      **/
      {
        claseGrid: 'col-6',
        clase: 'form-control',
        etiqueta: 'select',
        nombre: 'Idioma',
        label: '* ' + this.translate.instant('IDIOMAS.TITULO'),
        placeholder: 'Seleccione el idioma ...',
        requerido: true,
        valor: { Id: 0 },
        opciones: [
          { Id: 0, valor: 'Seleccione el idioma ...' },
          { Id: 1, valor: 'Español' },
          { Id: 2, valor: 'Inglés' },
          { Id: 3, valor: 'Italiano' },
          { Id: 4, valor: 'Mandarín' },
          { Id: 5, valor: 'Portugués' },
          { Id: 6, valor: 'Ruso' },
        ],
      }, {
        claseGrid: 'col-6',
        clase: 'form-control',
        etiqueta: 'select',
        nombre: 'IdiomaMaterno',
        label: '* ' + this.translate.instant('IDIOMAS.NATAL'),
        placeholder: 'Seleccione ...',
        requerido: true,
        valor: { Id: 0 },
        opciones: [
          { Id: 0, valor: 'Seleccione ...' },
          { Id: 1, valor: 'Sí' },
          { Id: 2, valor: 'No' },
        ],
      }, {
        claseGrid: 'col-6',
        clase: 'form-control',
        etiqueta: 'select',
        nombre: 'NivelHabla',
        label: '* ' + this.translate.instant('IDIOMAS.NIVEL_HABLA'),
        placeholder: 'Seleccione el nivel de habla ...',
        requerido: true,
        valor: { Id: 0 },
        opciones: [
          { Id: 0, valor: 'Seleccione el nivel de habla ...' },
          { Id: 1, valor: 'Bajo' },
          { Id: 2, valor: 'Regular' },
          { Id: 3, valor: 'Alto' },
        ],
      }, {
        claseGrid: 'col-6',
        clase: 'form-control',
        etiqueta: 'select',
        nombre: 'NivelEscucha',
        label: '* ' + this.translate.instant('IDIOMAS.NIVEL_ESCUCHA'),
        placeholder: 'Seleccione el nivel de escucha ...',
        requerido: true,
        valor: { Id: 0 },
        opciones: [
          { Id: 0, valor: 'Seleccione el nivel de escucha ...' },
          { Id: 1, valor: 'Bajo' },
          { Id: 2, valor: 'Regular' },
          { Id: 3, valor: 'Alto' },
        ],
      }, {
        claseGrid: 'col-6',
        clase: 'form-control',
        etiqueta: 'select',
        nombre: 'NivelEscritura',
        label: '* ' + this.translate.instant('IDIOMAS.NIVEL_ESCRITURA'),
        placeholder: 'Seleccione el nivel de escritura ...',
        requerido: true,
        valor: { Id: 0 },
        opciones: [
          { Id: 0, valor: 'Seleccione el nivel de escritura ...' },
          { Id: 1, valor: 'Bajo' },
          { Id: 2, valor: 'Regular' },
          { Id: 3, valor: 'Alto' },
        ],
      }, {
        claseGrid: 'col-6',
        clase: 'form-control',
        etiqueta: 'select',
        nombre: 'NivelLectura',
        label: '* ' + this.translate.instant('IDIOMAS.NIVEL_LECTURA'),
        placeholder: 'Seleccione el nivel de lectura ...',
        requerido: true,
        valor: { Id: 0 },
        opciones: [
          { Id: 0, valor: 'Seleccione el nivel de lectura ...' },
          { Id: 1, valor: 'Bajo' },
          { Id: 2, valor: 'Regular' },
          { Id: 3, valor: 'Alto' },
        ],
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
