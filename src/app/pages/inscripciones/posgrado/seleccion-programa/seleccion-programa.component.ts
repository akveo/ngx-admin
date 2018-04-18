import { Component, OnInit } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { UtilidadesService } from '../../../../@core/utils/utilidades.service';

@Component({
  selector: 'ngx-seleccion-programa',
  templateUrl: './seleccion-programa.component.html',
  styleUrls: ['./seleccion-programa.component.scss'],
})
export class SeleccionProgramaComponent implements OnInit {
  formPrograma: any = {
    titulo: this.translate.instant('DATOS_BASICOS.TITULO4'),
    clase: 'col-12',
    btn: this.translate.instant('DATOS_BASICOS.SIGUIENTE'),
    alertas: true,
    btnLimpiar: this.translate.instant('DATOS_BASICOS.SALIR'),
    modelo: 'ProgramaSeleccionado',
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
  traerPrograma(event) {
    console.info(event);
    this.setPercentage(event.percentage, 2);
  }
  construirForm() {
    this.formPrograma.titulo = this.translate.instant('DATOS_BASICOS.TITULO4');
    this.formPrograma.btn = this.translate.instant('DATOS_BASICOS.SIGUIENTE');
    this.formPrograma.btnLimpiar = this.translate.instant('DATOS_BASICOS.SALIR');
    this.formPrograma.campos = [
      {
        claseGrid: 'col-12',
        clase: 'form-control',
        etiqueta: 'select',
        nombre: 'Programa',
        label: '* ' + this.translate.instant('DATOS_BASICOS.PROGRAMA'),
        requerido: true,
        valor: { Id: 0 },
        opciones: [
          { Id: 0, valor: 'Seleccione el programa ...' },
          { Id: 1, valor: 'Ciencias - Facultad de ciencias' },
          { Id: 2, valor: 'Educación - Facultad de educación' },
          { Id: 3, valor: 'Ingeniería - Facultad de ingeniería' },
        ],
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
