import { Component, OnInit } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { UtilidadesService } from '../../../../@core/utils/utilidades.service';

@Component({
  selector: 'ngx-fin-inscripcion',
  templateUrl: './fin-inscripcion.component.html',
  styleUrls: ['./fin-inscripcion.component.scss'],
})
export class FinInscripcionComponent implements OnInit {
  formFin: any = {
    titulo: this.translate.instant('ENVIO.TITULO'),
    clase: 'col-12',
    btn: this.translate.instant('ENVIO.ENVIAR'),
    alertas: true,
    modelo: 'Fin',
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
  traerFin(event) {
    console.info(event);
    this.setPercentage(event.percentage, 2);
  }
  construirForm() {
    this.formFin.titulo = this.translate.instant('ENVIO.TITULO');
    this.formFin.btn = this.translate.instant('ENVIO.ENVIAR');
    this.formFin.campos = [
      /**
        <div class="text-center">
          <h3>{{ 'ENVIO.AVISO' | translate }}</h3>
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
