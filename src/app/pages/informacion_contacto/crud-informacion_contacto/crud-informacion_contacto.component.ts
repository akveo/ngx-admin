import { Lugar } from './../../../@core/data/models/lugar';
import { InformacionContacto } from './../../../@core/data/models/informacion_contacto';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UbicacionesService } from '../../../@core/data/ubicaciones.service';
import { CampusMidService } from '../../../@core/data/campus_mid.service';
import { FORM_INFORMACION_CONTACTO } from './form-informacion_contacto';
import { ToasterService, ToasterConfig, Toast, BodyOutputType } from 'angular2-toaster';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import 'style-loader!angular2-toaster/toaster.css';

@Component({
  selector: 'ngx-crud-informacion-contacto',
  templateUrl: './crud-informacion_contacto.component.html',
  styleUrls: ['./crud-informacion_contacto.component.scss'],
})
export class CrudInformacionContactoComponent implements OnInit {
  config: ToasterConfig;
  informacion_contacto_id: number;

  @Input('informacion_contacto_id')
  set name(informacion_contacto_id: number) {
    this.informacion_contacto_id = informacion_contacto_id;
    this.loadInformacionContacto();
  }

  @Output() eventChange = new EventEmitter();
  @Output('result') result: EventEmitter<any> = new EventEmitter();

  info_informacion_contacto: InformacionContacto;
  formInformacionContacto: any;
  regInformacionContacto: any;
  clean: boolean;

  constructor(
    private translate: TranslateService,
    private campusMidService: CampusMidService,
    private ubicacionesService: UbicacionesService,
    private toasterService: ToasterService) {
    this.formInformacionContacto = FORM_INFORMACION_CONTACTO;
    this.construirForm();
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.construirForm();
    });
    this.loadOptionsPaisResidencia();
    this.loadOptionsCiudadResidencia();
   }

  construirForm() {
    // this.formInformacionContacto.titulo = this.translate.instant('GLOBAL.informacion_contacto');
    this.formInformacionContacto.btn = this.translate.instant('GLOBAL.guardar');
    for (let i = 0; i < this.formInformacionContacto.campos.length; i++) {
      this.formInformacionContacto.campos[i].label = this.translate.instant('GLOBAL.' + this.formInformacionContacto.campos[i].label_i18n);
      this.formInformacionContacto.campos[i].placeholder = this.translate.instant('GLOBAL.placeholder_' + this.formInformacionContacto.campos[i].label_i18n);
    }
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }

  loadOptionsPaisResidencia(): void {
    let paisResidencia: Array<any> = [];
      this.ubicacionesService.get('lugar/?limit=0')
        .subscribe(res => {
          if (res !== null) {
            paisResidencia = <Array<Lugar>>res;
          }
          this.formInformacionContacto.campos[ this.getIndexForm('PaisResidencia') ].opciones = paisResidencia;
        });
  }
  loadOptionsCiudadResidencia(): void {
    let ciudadResidencia: Array<any> = [];
      this.ubicacionesService.get('lugar/?limit=0')
        .subscribe(res => {
          if (res !== null) {
            ciudadResidencia = <Array<Lugar>>res;
          }
          this.formInformacionContacto.campos[ this.getIndexForm('CiudadResidencia') ].opciones = ciudadResidencia;
        });
  }

  getIndexForm(nombre: String): number {
    for (let index = 0; index < this.formInformacionContacto.campos.length; index++) {
      const element = this.formInformacionContacto.campos[index];
      if (element.nombre === nombre) {
        return index
      }
    }
    return 0;
  }


  public loadInformacionContacto(): void {
    if (this.informacion_contacto_id !== undefined && this.informacion_contacto_id !== 0 &&
      this.informacion_contacto_id.toString() !== '') {
        this.campusMidService.get('informacion_contacto/?query=id:' + this.informacion_contacto_id)
        .subscribe(res => {
          if (res !== null) {
            this.info_informacion_contacto = <InformacionContacto>res[0];
          }
        });
    } else  {
      this.info_informacion_contacto = undefined;
      this.clean = !this.clean;
    }
  }

  updateInformacionContacto(informacionContacto: any): void {
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
        this.info_informacion_contacto = <InformacionContacto>informacionContacto;
        this.campusMidService.put('informacion_contacto', this.info_informacion_contacto)
          .subscribe(res => {
            this.loadInformacionContacto();
            this.eventChange.emit(true);
            this.showToast('info', this.translate.instant('GLOBAL.actualizar'),
            this.translate.instant('GLOBAL.informacion_contacto') + ' ' +
            this.translate.instant('GLOBAL.confirmarActualizar'));
        });
      }
    });
  }

  createInformacionContacto(informacionContacto: any): void {
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
        this.info_informacion_contacto = <InformacionContacto>informacionContacto;
        this.ubicacionesService.post('informacion_contacto', this.info_informacion_contacto)
          .subscribe(res => {
            this.info_informacion_contacto = <InformacionContacto>res;
            this.eventChange.emit(true);
            this.showToast('info', this.translate.instant('GLOBAL.crear'),
            this.translate.instant('GLOBAL.informacion_contacto') + ' ' +
            this.translate.instant('GLOBAL.confirmarCrear'));
        });
      }
    });
  }

  ngOnInit() {
    this.loadInformacionContacto();
  }

  validarForm(event) {
    if (event.valid) {
      if (this.info_informacion_contacto === undefined) {
        this.createInformacionContacto(event.data.InformacionContacto);
      } else {
        this.updateInformacionContacto(event.data.InformacionContacto);
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
