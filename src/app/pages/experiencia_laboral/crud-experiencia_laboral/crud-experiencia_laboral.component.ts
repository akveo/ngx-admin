import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { InfoExperienciaLaboral } from './../../../@core/data/models/info_experiencia_laboral';
import { FORM_EXPERIENCIA_LABORAL } from './form-experiencia_laboral';
import { ToasterService, ToasterConfig, Toast, BodyOutputType } from 'angular2-toaster';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import 'style-loader!angular2-toaster/toaster.css';

@Component({
  selector: 'ngx-crud-experiencia-laboral',
  templateUrl: './crud-experiencia_laboral.component.html',
  styleUrls: ['./crud-experiencia_laboral.component.scss'],
})
export class CrudExperienciaLaboralComponent implements OnInit {
  config: ToasterConfig;
  info_experiencia_laboral_id: number;

  @Input('info_experiencia_laboral_id')
  set name(info_experiencia_laboral_id: number) {
    this.info_experiencia_laboral_id = info_experiencia_laboral_id;
    this.loadInfoExperienciaLaboral();
  }
  @Output() eventChange = new EventEmitter();
  @Output('result') result: EventEmitter<any> = new EventEmitter();

  info_experiencia_laboral: InfoExperienciaLaboral;
  formInfoExperienciaLaboral: any;
  regInfoExperienciaLaboral: any;
  clean: boolean;

  constructor(
    private translate: TranslateService,
    private toasterService: ToasterService) {
    this.formInfoExperienciaLaboral = FORM_EXPERIENCIA_LABORAL;
    this.construirForm();
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.construirForm();
    });
  }

  construirForm() {
    // this.formInfoExperienciaLaboral.titulo = this.translate.instant('GLOBAL.experiencia_laboral');
    this.formInfoExperienciaLaboral.btn = this.translate.instant('GLOBAL.guardar');
    for (let i = 0; i < this.formInfoExperienciaLaboral.campos.length; i++) {
      this.formInfoExperienciaLaboral.campos[i].label = this.translate.instant('GLOBAL.' + this.formInfoExperienciaLaboral.campos[i].label_i18n);
      this.formInfoExperienciaLaboral.campos[i].placeholder = this.translate.instant('GLOBAL.placeholder_' +
      this.formInfoExperienciaLaboral.campos[i].label_i18n);
    }
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }

  getIndexForm(nombre: String): number {
    for (let index = 0; index < this.formInfoExperienciaLaboral.campos.length; index++) {
      const element = this.formInfoExperienciaLaboral.campos[index];
      if (element.nombre === nombre) {
        return index
      }
    }
    return 0;
  }

  public loadInfoExperienciaLaboral(): void {
    if (this.info_experiencia_laboral_id !== undefined &&
      this.info_experiencia_laboral_id !== 0 &&
      this.info_experiencia_laboral_id.toString() !== '') {
      /** this.Service.get('')
        .subscribe(res => {
          if (res !== null) {
            this.info_experiencia_laboral = <InfoFormacionAcademica>res;
          }
        }); **/
    } else {
      this.info_experiencia_laboral = undefined
      this.clean = !this.clean;
    }
  }

  updateInfoExperienciaLaboral(infoExperienciaLaboral: any): void {
    const opt: any = {
      title: this.translate.instant('GLOBAL.actualizar'),
      text: this.translate.instant('GLOBAL.actualizar') + '?',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
      showCancelButton: true,
      confirmButtonText: this.translate.instant('GLOBAL.aceptar'),
      cancelButtonText: this.translate.instant('GLOBAL.cancelar'),
    };
    Swal(opt)
      .then((willDelete) => {
        if (willDelete.value) {
          this.info_experiencia_laboral = <InfoExperienciaLaboral>infoExperienciaLaboral;
          /** this.Service.put('', this.info_experiencia_laboral)
            .subscribe(res => { **/
              this.loadInfoExperienciaLaboral();
              this.eventChange.emit(true);
              this.showToast('info', this.translate.instant('GLOBAL.actualizar'),
                this.translate.instant('GLOBAL.experiencia_laboral') + ' ' +
                this.translate.instant('GLOBAL.confirmarActualizar'));
            /** }); **/
        }
      });
  }

  createInfoExperienciaLaboral(infoExperienciaLaboral: any): void {
    const opt: any = {
      title: this.translate.instant('GLOBAL.crear'),
      text: this.translate.instant('GLOBAL.crear') + '?',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
      showCancelButton: true,
      confirmButtonText: this.translate.instant('GLOBAL.aceptar'),
      cancelButtonText: this.translate.instant('GLOBAL.cancelar'),
    };
    Swal(opt)
      .then((willDelete) => {
        if (willDelete.value) {
          this.info_experiencia_laboral = <InfoExperienciaLaboral>infoExperienciaLaboral;
          /** this.Service.post('', this.info_experiencia_laboral)
            .subscribe(res => {
              this.info_experiencia_laboral = <InfoExperienciaLaboral>res; **/
              this.eventChange.emit(true);
              this.showToast('info', this.translate.instant('GLOBAL.crear'),
                this.translate.instant('GLOBAL.experiencia_laboral') + ' ' +
                this.translate.instant('GLOBAL.confirmarCrear'));
            /** }); **/
        }
      });
  }

  ngOnInit() {
    this.loadInfoExperienciaLaboral();
  }

  validarForm(event) {
    if (event.valid) {
      if (this.info_experiencia_laboral === undefined) {
        this.createInfoExperienciaLaboral(event.data.InfoExperienciaLaboral);
      } else {
        this.updateInfoExperienciaLaboral(event.data.InfoExperienciaLaboral);
      }
      this.result.emit(event);
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
