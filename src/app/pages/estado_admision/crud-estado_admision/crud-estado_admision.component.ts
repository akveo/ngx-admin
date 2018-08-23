
import { EstadoAdmision } from './../../../@core/data/models/estado_admision';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AdmisionesService } from '../../../@core/data/admisiones.service';
import { FORM_ESTADO_ADMISION } from './form-estado_admision';
import { ToasterService, ToasterConfig, Toast, BodyOutputType } from 'angular2-toaster';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import 'style-loader!angular2-toaster/toaster.css';

@Component({
  selector: 'ngx-crud-estado-admision',
  templateUrl: './crud-estado_admision.component.html',
  styleUrls: ['./crud-estado_admision.component.scss'],
})
export class CrudEstadoAdmisionComponent implements OnInit {
  config: ToasterConfig;
  estado_admision_id: number;

  @Input('estado_admision_id')
  set name(estado_admision_id: number) {
    this.estado_admision_id = estado_admision_id;
    this.loadEstadoAdmision();
  }

  @Output() eventChange = new EventEmitter();

  info_estado_admision: EstadoAdmision;
  formEstadoAdmision: any;
  regEstadoAdmision: any;
  clean: boolean;

  constructor(private translate: TranslateService, private admisionesService: AdmisionesService, private toasterService: ToasterService) {
    this.formEstadoAdmision = FORM_ESTADO_ADMISION;
    this.construirForm();
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.construirForm();
    });
   }

  construirForm() {
    this.formEstadoAdmision.titulo = this.translate.instant('GLOBAL.estado_admision');
    this.formEstadoAdmision.btn = this.translate.instant('GLOBAL.guardar');
    for (let i = 0; i < this.formEstadoAdmision.campos.length; i++) {
      this.formEstadoAdmision.campos[i].label = this.translate.instant('GLOBAL.' + this.formEstadoAdmision.campos[i].label_i18n);
      this.formEstadoAdmision.campos[i].placeholder = this.translate.instant('GLOBAL.placeholder_' + this.formEstadoAdmision.campos[i].label_i18n);
    }
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }


  getIndexForm(nombre: String): number {
    for (let index = 0; index < this.formEstadoAdmision.campos.length; index++) {
      const element = this.formEstadoAdmision.campos[index];
      if (element.nombre === nombre) {
        return index
      }
    }
    return 0;
  }


  public loadEstadoAdmision(): void {
    if (this.estado_admision_id !== undefined && this.estado_admision_id !== 0) {
      this.admisionesService.get('estado_admision/?query=id:' + this.estado_admision_id)
        .subscribe(res => {
          if (res !== null) {
            this.info_estado_admision = <EstadoAdmision>res[0];
          }
        });
    } else  {
      this.info_estado_admision = undefined;
      this.clean = !this.clean;
    }
  }

  updateEstadoAdmision(estadoAdmision: any): void {

    const opt: any = {
      title: 'Update?',
      text: 'Update EstadoAdmision!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
      showCancelButton: true,
    };
    Swal(opt)
    .then((willDelete) => {
      if (willDelete.value) {
        this.info_estado_admision = <EstadoAdmision>estadoAdmision;
        this.admisionesService.put('estado_admision', this.info_estado_admision)
          .subscribe(res => {
            this.loadEstadoAdmision();
            this.eventChange.emit(true);
            this.showToast('info', 'updated', 'EstadoAdmision updated');
          });
      }
    });
  }

  createEstadoAdmision(estadoAdmision: any): void {
    const opt: any = {
      title: 'Create?',
      text: 'Create EstadoAdmision!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
      showCancelButton: true,
    };
    Swal(opt)
    .then((willDelete) => {
      if (willDelete.value) {
        this.info_estado_admision = <EstadoAdmision>estadoAdmision;
        this.admisionesService.post('estado_admision', this.info_estado_admision)
          .subscribe(res => {
            this.info_estado_admision = <EstadoAdmision>res;
            this.eventChange.emit(true);
            this.showToast('info', 'created', 'EstadoAdmision created');
          });
      }
    });
  }

  ngOnInit() {
    this.loadEstadoAdmision();
  }

  validarForm(event) {
    if (event.valid) {
      if (this.info_estado_admision === undefined) {
        this.createEstadoAdmision(event.data.EstadoAdmision);
      } else {
        this.updateEstadoAdmision(event.data.EstadoAdmision);
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
