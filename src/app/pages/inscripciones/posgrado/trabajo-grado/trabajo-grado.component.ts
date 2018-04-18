import { Component, OnInit } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { UtilidadesService } from '../../../../@core/utils/utilidades.service';

@Component({
  selector: 'ngx-trabajo-grado',
  templateUrl: './trabajo-grado.component.html',
  styleUrls: ['./trabajo-grado.component.scss'],
})
export class TrabajoGradoComponent implements OnInit {
  formTrabajoGrado: any = {
    titulo: this.translate.instant('PROPUESTA_TRABAJO_GRADO.TITULO'),
    clase: 'col-12',
    btn: this.translate.instant('PROPUESTA_TRABAJO_GRADO.SIGUIENTE'),
    alertas: true,
    btnLimpiar: this.translate.instant('PROPUESTA_TRABAJO_GRADO.SALIR'),
    modelo: 'TrabajoGrado',
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
  traerTrabajoGrado(event) {
    console.info(event);
    this.setPercentage(event.percentage, 2);
  }
  construirForm() {
    this.formTrabajoGrado.titulo = this.translate.instant('PROPUESTA_TRABAJO_GRADO.TITULO');
    this.formTrabajoGrado.btn = this.translate.instant('PROPUESTA_TRABAJO_GRADO.SIGUIENTE');
    this.formTrabajoGrado.btnLimpiar = this.translate.instant('PROPUESTA_TRABAJO_GRADO.SALIR');
    this.formTrabajoGrado.campos = [
      {
        claseGrid: 'col-6',
        clase: 'form-control',
        etiqueta: 'select',
        nombre: 'Idioma',
        label: '* ' + this.translate.instant('PROPUESTA_TRABAJO_GRADO.GRUPO_INVESTIGACION'),
        placeholder: 'Seleccione el grupo de investigación ...',
        requerido: true,
        valor: { Id: 0 },
        opciones: [
          { Id: 0, valor: 'Seleccione el grupo de investigación ...' },
          { Id: 1, valor: 'A' },
          { Id: 2, valor: 'B' },
          { Id: 3, valor: 'C' },
        ],
      }, {
        claseGrid: 'col-6',
        clase: 'form-control',
        etiqueta: 'select',
        nombre: 'Idioma',
        label: '* ' + this.translate.instant('PROPUESTA_TRABAJO_GRADO.LINEA_INVESTIGACION'),
        placeholder: 'Seleccione la línea de investigación ...',
        requerido: true,
        valor: { Id: 0 },
        opciones: [
          { Id: 0, valor: 'Seleccione la línea de investigación ...' },
          { Id: 1, valor: 'AA' },
          { Id: 2, valor: 'BB' },
          { Id: 3, valor: 'CC' },
        ],
      }, {
        claseGrid: 'col-6',
        clase: 'form-control',
        etiqueta: 'input',
        nombre: 'NombrePropuestaTrabajoGrado',
        label: '* ' + this.translate.instant('PROPUESTA_TRABAJO_GRADO.TITULO_PROPUESTA'),
        placeholder: this.translate.instant('PROPUESTA_TRABAJO_GRADO.TITULO_PROPUESTA'),
        requerido: true,
        tipo: 'text',
      }, {
        claseGrid: 'col-6',
        clase: 'form-control',
        etiqueta: 'input',
        nombre: 'ArchivoPropuesta',
        label: '* ' + this.translate.instant('PROPUESTA_TRABAJO_GRADO.ARCHIVO_PROPUESTA'),
        placeholder: 'Ingrese su documento ...',
        requerido: true,
        tipo: 'file',
      },
      /**
        <div class="seguir">
            <div class="col-xs-6 col-xs-offset-3">
                <label class="progreso">
                    <progress max="100" value="80"></progress> 80%
                </label>
            </div>
        </div>
      **/
    ];
  }
  constructor(private translate: TranslateService) {
    this.nForms = 9;
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
