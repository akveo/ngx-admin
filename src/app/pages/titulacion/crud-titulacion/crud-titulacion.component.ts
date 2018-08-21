
import { Titulacion } from './../../../@core/data/models/titulacion';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProgramaAcademicoService } from '../../../@core/data/programa_academico.service';
import { FORM_TITULACION } from './form-titulacion';
import { ToasterService, ToasterConfig, Toast, BodyOutputType } from 'angular2-toaster';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import 'style-loader!angular2-toaster/toaster.css';

@Component({
  selector: 'ngx-crud-titulacion',
  templateUrl: './crud-titulacion.component.html',
  styleUrls: ['./crud-titulacion.component.scss'],
})
export class CrudTitulacionComponent implements OnInit {
  config: ToasterConfig;
  titulacion_id: number;

  @Input('titulacion_id')
  set name(titulacion_id: number) {
    this.titulacion_id = titulacion_id;
    this.loadTitulacion();
  }

  @Output() eventChange = new EventEmitter();

  info_titulacion: Titulacion;
  formTitulacion: any;
  regTitulacion: any;
  clean: boolean;

  constructor(private translate: TranslateService, private programaAcademicoService: ProgramaAcademicoService, private toasterService: ToasterService) {
    this.formTitulacion = FORM_TITULACION;
    this.construirForm();
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.construirForm();
    });
   }

  construirForm() {
    this.formTitulacion.titulo = this.translate.instant('GLOBAL.titulacion');
    this.formTitulacion.btn = this.translate.instant('GLOBAL.guardar');
    for (let i = 0; i < this.formTitulacion.campos.length; i++) {
      this.formTitulacion.campos[i].label = this.translate.instant('GLOBAL.' + this.formTitulacion.campos[i].label_i18n);
      this.formTitulacion.campos[i].placeholder = this.translate.instant('GLOBAL.placeholder_' + this.formTitulacion.campos[i].label_i18n);
    }
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }


  getIndexForm(nombre: String): number {
    for (let index = 0; index < this.formTitulacion.campos.length; index++) {
      const element = this.formTitulacion.campos[index];
      if (element.nombre === nombre) {
        return index
      }
    }
    return 0;
  }


  public loadTitulacion(): void {
    if (this.titulacion_id !== undefined && this.titulacion_id !== 0) {
      this.programaAcademicoService.get('titulacion/?query=id:' + this.titulacion_id)
        .subscribe(res => {
          if (res !== null) {
            this.info_titulacion = <Titulacion>res[0];
          }
        });
    } else  {
      this.info_titulacion = undefined;
      this.clean = !this.clean;
    }
  }

  updateTitulacion(titulacion: any): void {

    const opt: any = {
      title: 'Update?',
      text: 'Update Titulacion!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
      showCancelButton: true,
    };
    Swal(opt)
    .then((willDelete) => {
      if (willDelete.value) {
        this.info_titulacion = <Titulacion>titulacion;
        this.programaAcademicoService.put('titulacion', this.info_titulacion)
          .subscribe(res => {
            this.loadTitulacion();
            this.eventChange.emit(true);
            this.showToast('info', 'updated', 'Titulacion updated');
          });
      }
    });
  }

  createTitulacion(titulacion: any): void {
    const opt: any = {
      title: 'Create?',
      text: 'Create Titulacion!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
      showCancelButton: true,
    };
    Swal(opt)
    .then((willDelete) => {
      if (willDelete.value) {
        this.info_titulacion = <Titulacion>titulacion;
        this.programaAcademicoService.post('titulacion', this.info_titulacion)
          .subscribe(res => {
            this.info_titulacion = <Titulacion>res;
            this.eventChange.emit(true);
            this.showToast('info', 'created', 'Titulacion created');
          });
      }
    });
  }

  ngOnInit() {
    this.loadTitulacion();
  }

  validarForm(event) {
    if (event.valid) {
      if (this.info_titulacion === undefined) {
        this.createTitulacion(event.data.Titulacion);
      } else {
        this.updateTitulacion(event.data.Titulacion);
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
