
import { LineaInvestigacion } from './../../../@core/data/models/linea_investigacion';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AdmisionesService } from '../../../@core/data/admisiones.service';
import { FORM_LINEA_INVESTIGACION } from './form-linea_investigacion';
import { ToasterService, ToasterConfig, Toast, BodyOutputType } from 'angular2-toaster';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import 'style-loader!angular2-toaster/toaster.css';

@Component({
  selector: 'ngx-crud-linea-investigacion',
  templateUrl: './crud-linea_investigacion.component.html',
  styleUrls: ['./crud-linea_investigacion.component.scss'],
})
export class CrudLineaInvestigacionComponent implements OnInit {
  config: ToasterConfig;
  linea_investigacion_id: number;

  @Input('linea_investigacion_id')
  set name(linea_investigacion_id: number) {
    this.linea_investigacion_id = linea_investigacion_id;
    this.loadLineaInvestigacion();
  }

  @Output() eventChange = new EventEmitter();

  info_linea_investigacion: LineaInvestigacion;
  formLineaInvestigacion: any;
  regLineaInvestigacion: any;
  clean: boolean;

  constructor(private translate: TranslateService, private admisionesService: AdmisionesService, private toasterService: ToasterService) {
    this.formLineaInvestigacion = FORM_LINEA_INVESTIGACION;
    this.construirForm();
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.construirForm();
    });
   }

  construirForm() {
    this.formLineaInvestigacion.titulo = this.translate.instant('GLOBAL.linea_investigacion');
    this.formLineaInvestigacion.btn = this.translate.instant('GLOBAL.guardar');
    for (let i = 0; i < this.formLineaInvestigacion.campos.length; i++) {
      this.formLineaInvestigacion.campos[i].label = this.translate.instant('GLOBAL.' + this.formLineaInvestigacion.campos[i].label_i18n);
      this.formLineaInvestigacion.campos[i].placeholder = this.translate.instant('GLOBAL.placeholder_' + this.formLineaInvestigacion.campos[i].label_i18n);
    }
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }


  getIndexForm(nombre: String): number {
    for (let index = 0; index < this.formLineaInvestigacion.campos.length; index++) {
      const element = this.formLineaInvestigacion.campos[index];
      if (element.nombre === nombre) {
        return index
      }
    }
    return 0;
  }


  public loadLineaInvestigacion(): void {
    if (this.linea_investigacion_id !== undefined && this.linea_investigacion_id !== 0) {
      this.admisionesService.get('linea_investigacion/?query=id:' + this.linea_investigacion_id)
        .subscribe(res => {
          if (res !== null) {
            this.info_linea_investigacion = <LineaInvestigacion>res[0];
          }
        });
    } else  {
      this.info_linea_investigacion = undefined;
      this.clean = !this.clean;
    }
  }

  updateLineaInvestigacion(lineaInvestigacion: any): void {

    const opt: any = {
      title: 'Update?',
      text: 'Update LineaInvestigacion!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
      showCancelButton: true,
    };
    Swal(opt)
    .then((willDelete) => {
      if (willDelete.value) {
        this.info_linea_investigacion = <LineaInvestigacion>lineaInvestigacion;
        this.admisionesService.put('linea_investigacion', this.info_linea_investigacion)
          .subscribe(res => {
            this.loadLineaInvestigacion();
            this.eventChange.emit(true);
            this.showToast('info', 'updated', 'LineaInvestigacion updated');
          });
      }
    });
  }

  createLineaInvestigacion(lineaInvestigacion: any): void {
    const opt: any = {
      title: 'Create?',
      text: 'Create LineaInvestigacion!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
      showCancelButton: true,
    };
    Swal(opt)
    .then((willDelete) => {
      if (willDelete.value) {
        this.info_linea_investigacion = <LineaInvestigacion>lineaInvestigacion;
        this.admisionesService.post('linea_investigacion', this.info_linea_investigacion)
          .subscribe(res => {
            this.info_linea_investigacion = <LineaInvestigacion>res;
            this.eventChange.emit(true);
            this.showToast('info', 'created', 'LineaInvestigacion created');
          });
      }
    });
  }

  ngOnInit() {
    this.loadLineaInvestigacion();
  }

  validarForm(event) {
    if (event.valid) {
      if (this.info_linea_investigacion === undefined) {
        this.createLineaInvestigacion(event.data.LineaInvestigacion);
      } else {
        this.updateLineaInvestigacion(event.data.LineaInvestigacion);
      }
    }
  }

  private showToast(type: string, title: string, body: string) {
    this.config = new ToasterConfig({
      // 'toast-top-full-width', 'toast-bottom-full-width', 'toast-top-left', 'toast-top-center'
      positionClass: 'toast-top-center',
      timeout: 5000,  // ms
      newestOnTop: true,
      tapToDismiss: false, // hide on click
      preventDuplicates: true,
      animation: 'slideDown', // 'fade', 'flyLeft', 'flyRight', 'slideDown', 'slideUp'
      limit: 5,
    });
    const toast: Toast = {
      type: type, // 'default', 'info', 'success', 'warning', 'error'
      title: title,
      body: body,
      showCloseButton: true,
      bodyOutputType: BodyOutputType.TrustedHtml,
    };
    this.toasterService.popAsync(toast);
  }

}
