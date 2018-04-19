import { Component, OnInit } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { UtilidadesService } from '../../../../@core/utils/utilidades.service';

@Component({
  selector: 'ngx-documentos',
  templateUrl: './documentos.component.html',
  styleUrls: ['./documentos.component.scss'],
})
export class DocumentosComponent implements OnInit {
  formDocumentos: any = {
    titulo: this.translate.instant('DOCUMENTOS.TITULO'),
    clase: 'col-12',
    btn: this.translate.instant('DOCUMENTOS.SIGUIENTE'),
    alertas: true,
    btnLimpiar: this.translate.instant('DOCUMENTOS.SALIR'),
    modelo: 'Documentos',
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
  traerDocumentos(event) {
    console.info(event)
    this.setPercentage(event.percentage, 4);
  }
  construirForm() {
    this.formDocumentos.titulo = this.translate.instant('DOCUMENTOS.TITULO');
    this.formDocumentos.btn = this.translate.instant('DOCUMENTOS.SIGUIENTE');
    this.formDocumentos.btnLimpiar = this.translate.instant('DOCUMENTOS.SALIR');
    this.formDocumentos.campos = [
      {
        claseGrid: 'col-9',
        clase: 'form-control',
        etiqueta: 'input',
        nombre: 'Documento1',
        label: '1. Cédula de ciudadanía: descripción indicada del documento - 5 MB',
        placeholder: 'Ingrese su documento',
        requerido: true,
        tipo: 'file',
      },
      /**
          <div class="seguir">
              <div class="col-xs-6 col-xs-offset-3">
                  <label class="progreso">
                      <progress max="100" value="48"></progress> 48%
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
