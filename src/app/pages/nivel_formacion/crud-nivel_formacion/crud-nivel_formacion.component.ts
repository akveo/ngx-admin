
import { NivelFormacion } from './../../../@core/data/models/nivel_formacion';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProgramaAcademicoService } from '../../../@core/data/programa_academico.service';
import { FORM_NIVEL_FORMACION } from './form-nivel_formacion';
import { ToasterService, ToasterConfig, Toast, BodyOutputType } from 'angular2-toaster';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import 'style-loader!angular2-toaster/toaster.css';

@Component({
  selector: 'ngx-crud-nivel-formacion',
  templateUrl: './crud-nivel_formacion.component.html',
  styleUrls: ['./crud-nivel_formacion.component.scss'],
})
export class CrudNivelFormacionComponent implements OnInit {
  config: ToasterConfig;
  nivel_formacion_id: number;

  @Input('nivel_formacion_id')
  set name(nivel_formacion_id: number) {
    this.nivel_formacion_id = nivel_formacion_id;
    this.loadNivelFormacion();
  }

  @Output() eventChange = new EventEmitter();

  info_nivel_formacion: NivelFormacion;
  formNivelFormacion: any;
  regNivelFormacion: any;
  clean: boolean;

  constructor(private translate: TranslateService, private programaAcademicoService: ProgramaAcademicoService, private toasterService: ToasterService) {
    this.formNivelFormacion = FORM_NIVEL_FORMACION;
    this.construirForm();
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.construirForm();
    });
   }

  construirForm() {
    this.formNivelFormacion.titulo = this.translate.instant('GLOBAL.nivel_formacion');
    this.formNivelFormacion.btn = this.translate.instant('GLOBAL.guardar');
    for (let i = 0; i < this.formNivelFormacion.campos.length; i++) {
      this.formNivelFormacion.campos[i].label = this.translate.instant('GLOBAL.' + this.formNivelFormacion.campos[i].label_i18n);
      this.formNivelFormacion.campos[i].placeholder = this.translate.instant('GLOBAL.placeholder_' + this.formNivelFormacion.campos[i].label_i18n);
    }
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }


  getIndexForm(nombre: String): number {
    for (let index = 0; index < this.formNivelFormacion.campos.length; index++) {
      const element = this.formNivelFormacion.campos[index];
      if (element.nombre === nombre) {
        return index
      }
    }
    return 0;
  }


  public loadNivelFormacion(): void {
    if (this.nivel_formacion_id !== undefined && this.nivel_formacion_id !== 0) {
      this.programaAcademicoService.get('nivel_formacion/?query=id:' + this.nivel_formacion_id)
        .subscribe(res => {
          if (res !== null) {
            this.info_nivel_formacion = <NivelFormacion>res[0];
          }
        });
    } else  {
      this.info_nivel_formacion = undefined;
      this.clean = !this.clean;
    }
  }

  updateNivelFormacion(nivelFormacion: any): void {

    const opt: any = {
      title: 'Update?',
      text: 'Update NivelFormacion!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
      showCancelButton: true,
    };
    Swal(opt)
    .then((willDelete) => {
      if (willDelete.value) {
        this.info_nivel_formacion = <NivelFormacion>nivelFormacion;
        this.programaAcademicoService.put('nivel_formacion', this.info_nivel_formacion)
          .subscribe(res => {
            this.loadNivelFormacion();
            this.eventChange.emit(true);
            this.showToast('info', 'updated', 'NivelFormacion updated');
          });
      }
    });
  }

  createNivelFormacion(nivelFormacion: any): void {
    const opt: any = {
      title: 'Create?',
      text: 'Create NivelFormacion!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
      showCancelButton: true,
    };
    Swal(opt)
    .then((willDelete) => {
      if (willDelete.value) {
        this.info_nivel_formacion = <NivelFormacion>nivelFormacion;
        this.programaAcademicoService.post('nivel_formacion', this.info_nivel_formacion)
          .subscribe(res => {
            this.info_nivel_formacion = <NivelFormacion>res;
            this.eventChange.emit(true);
            this.showToast('info', 'created', 'NivelFormacion created');
          });
      }
    });
  }

  ngOnInit() {
    this.loadNivelFormacion();
  }

  validarForm(event) {
    if (event.valid) {
      if (this.info_nivel_formacion === undefined) {
        this.createNivelFormacion(event.data.NivelFormacion);
      } else {
        this.updateNivelFormacion(event.data.NivelFormacion);
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
