import { EstadoAdmision } from './../../../@core/data/models/estado_admision';
import { LineaInvestigacion } from './../../../@core/data/models/linea_investigacion';
import { Enfasis } from './../../../@core/data/models/enfasis';
import { Admision } from './../../../@core/data/models/admision';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AdmisionesService } from '../../../@core/data/admisiones.service';
import { FORM_ADMISION } from './form-admision';
import { ToasterService, ToasterConfig, Toast, BodyOutputType } from 'angular2-toaster';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { HttpErrorResponse } from '@angular/common/http';
import Swal from 'sweetalert2';
import 'style-loader!angular2-toaster/toaster.css';

@Component({
  selector: 'ngx-crud-admision',
  templateUrl: './crud-admision.component.html',
  styleUrls: ['./crud-admision.component.scss'],
})
export class CrudAdmisionComponent implements OnInit {
  config: ToasterConfig;
  admision_id: number;

  @Input('admision_id')
  set name(admision_id: number) {
    this.admision_id = admision_id;
    this.loadAdmision();
  }

  @Output() eventChange = new EventEmitter();

  info_admision: Admision;
  formAdmision: any;
  regAdmision: any;
  clean: boolean;

  constructor(private translate: TranslateService, private admisionesService: AdmisionesService, private toasterService: ToasterService) {
    this.formAdmision = FORM_ADMISION;
    this.construirForm();
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.construirForm();
    });
    this.loadOptionsEstadoAdmision();
    this.loadOptionsLineaInvestigacion();
    this.loadOptionsEnfasis();
   }

  construirForm() {
    this.formAdmision.titulo = this.translate.instant('GLOBAL.admision');
    this.formAdmision.btn = this.translate.instant('GLOBAL.guardar');
    for (let i = 0; i < this.formAdmision.campos.length; i++) {
      this.formAdmision.campos[i].label = this.translate.instant('GLOBAL.' + this.formAdmision.campos[i].label_i18n);
      this.formAdmision.campos[i].placeholder = this.translate.instant('GLOBAL.placeholder_' + this.formAdmision.campos[i].label_i18n);
    }
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }

  loadOptionsEstadoAdmision(): void {
    let estadoAdmision: Array<any> = [];
      this.admisionesService.get('estado_admision/?limit=0')
        .subscribe(res => {
          if (res !== null) {
            estadoAdmision = <Array<EstadoAdmision>>res;
          }
          this.formAdmision.campos[ this.getIndexForm('EstadoAdmision') ].opciones = estadoAdmision;
        },
        (error: HttpErrorResponse) => {
          Swal({
            type: 'error',
            title: error.status + '',
            text: this.translate.instant('ERROR.' + error.status),
            confirmButtonText: this.translate.instant('GLOBAL.aceptar'),
          });
        });
  }

  loadOptionsLineaInvestigacion(): void {
    let lineaInvestigacion: Array<any> = [];
      this.admisionesService.get('linea_investigacion/?limit=0')
        .subscribe(res => {
          if (res !== null) {
            lineaInvestigacion = <Array<LineaInvestigacion>>res;
          }
          this.formAdmision.campos[ this.getIndexForm('LineaInvestigacion') ].opciones = lineaInvestigacion;
        },
        (error: HttpErrorResponse) => {
          Swal({
            type: 'error',
            title: error.status + '',
            text: this.translate.instant('ERROR.' + error.status),
            confirmButtonText: this.translate.instant('GLOBAL.aceptar'),
          });
        });
  }

  loadOptionsEnfasis(): void {
    let enfasis: Array<any> = [];
      this.admisionesService.get('enfasis/?limit=0')
        .subscribe(res => {
          if (res !== null) {
            enfasis = <Array<Enfasis>>res;
          }
          this.formAdmision.campos[ this.getIndexForm('Enfasis') ].opciones = enfasis;
        },
        (error: HttpErrorResponse) => {
          Swal({
            type: 'error',
            title: error.status + '',
            text: this.translate.instant('ERROR.' + error.status),
            confirmButtonText: this.translate.instant('GLOBAL.aceptar'),
          });
        });
  }

  getIndexForm(nombre: String): number {
    for (let index = 0; index < this.formAdmision.campos.length; index++) {
      const element = this.formAdmision.campos[index];
      if (element.nombre === nombre) {
        return index
      }
    }
    return 0;
  }

  public loadAdmision(): void {
    if (this.admision_id !== undefined && this.admision_id !== 0) {
      this.admisionesService.get('admision/?query=id:' + this.admision_id)
        .subscribe(res => {
          if (res !== null) {
            this.info_admision = <Admision>res[0];
          }
        },
        (error: HttpErrorResponse) => {
          Swal({
            type: 'error',
            title: error.status + '',
            text: this.translate.instant('ERROR.' + error.status),
            confirmButtonText: this.translate.instant('GLOBAL.aceptar'),
          });
        });
    } else  {
      this.info_admision = undefined;
      this.clean = !this.clean;
    }
  }

  updateAdmision(admision: any): void {
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
        this.info_admision = <Admision>admision;
        this.admisionesService.put('admision', this.info_admision)
          .subscribe(res => {
            this.loadAdmision();
            this.eventChange.emit(true);
            this.showToast('info', this.translate.instant('GLOBAL.actualizar'),
            this.translate.instant('GLOBAL.admision') + ' ' +
            this.translate.instant('GLOBAL.confirmarActualizar'));
          },
          (error: HttpErrorResponse) => {
            Swal({
              type: 'error',
              title: error.status + '',
              text: this.translate.instant('ERROR.' + error.status),
              confirmButtonText: this.translate.instant('GLOBAL.aceptar'),
            });
          });
      }
    });
  }

  createAdmision(admision: any): void {
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
        this.info_admision = <Admision>admision;
        this.admisionesService.post('admision', this.info_admision)
          .subscribe(res => {
            this.info_admision = <Admision>res;
            this.eventChange.emit(true);
            this.showToast('info', this.translate.instant('GLOBAL.crear'),
            this.translate.instant('GLOBAL.admision') + ' ' +
            this.translate.instant('GLOBAL.confirmarCrear'));
          },
          (error: HttpErrorResponse) => {
            Swal({
              type: 'error',
              title: error.status + '',
              text: this.translate.instant('ERROR.' + error.status),
              confirmButtonText: this.translate.instant('GLOBAL.aceptar'),
            });
          });
      }
    });
  }

  ngOnInit() {
    this.loadAdmision();
  }

  validarForm(event) {
    if (event.valid) {
      if (this.info_admision === undefined) {
        this.createAdmision(event.data.Admision);
      } else {
        this.updateAdmision(event.data.Admision);
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
