import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Lugar } from './../../../@core/data/models/lugar';
import { InfoFormacionAcademica } from './../../../@core/data/models/info_formacion_academica';
import { FORM_FORMACION_ACADEMICA } from './form-formacion_academica';
import { UbicacionesService } from '../../../@core/data/ubicaciones.service';
import { ToasterService, ToasterConfig, Toast, BodyOutputType } from 'angular2-toaster';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import 'style-loader!angular2-toaster/toaster.css';

@Component({
  selector: 'ngx-crud-formacion-academica',
  templateUrl: './crud-formacion_academica.component.html',
  styleUrls: ['./crud-formacion_academica.component.scss'],
})
export class CrudFormacionAcademicaComponent implements OnInit {
  config: ToasterConfig;
  info_formacion_academica_id: number;

  @Input('info_formacion_academica_id')
  set name(info_formacion_academica_id: number) {
    this.info_formacion_academica_id = info_formacion_academica_id;
    this.loadInfoFormacionAcademica();
  }
  @Output() eventChange = new EventEmitter();
  @Output('result') result: EventEmitter<any> = new EventEmitter();

  info_formacion_academica: InfoFormacionAcademica;
  formInfoFormacionAcademica: any;
  regInfoFormacionAcademica: any;
  clean: boolean;
  paisSelecccionado: any;

  constructor(
    private translate: TranslateService,
    private ubicacionesService: UbicacionesService,
    private toasterService: ToasterService) {
    this.formInfoFormacionAcademica = FORM_FORMACION_ACADEMICA;
    this.construirForm();
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.construirForm();
    });
    this.loadOptionsPaisUniversidad();
  }

  construirForm() {
    // this.formInfoFormacionAcademica.titulo = this.translate.instant('GLOBAL.formacion_academica');
    this.formInfoFormacionAcademica.btn = this.translate.instant('GLOBAL.guardar');
    for (let i = 0; i < this.formInfoFormacionAcademica.campos.length; i++) {
      this.formInfoFormacionAcademica.campos[i].label = this.translate.instant('GLOBAL.' + this.formInfoFormacionAcademica.campos[i].label_i18n);
      this.formInfoFormacionAcademica.campos[i].placeholder = this.translate.instant('GLOBAL.placeholder_' +
        this.formInfoFormacionAcademica.campos[i].label_i18n);
    }
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }

  getPais(event) {
    this.paisSelecccionado = event.valor;
    this.loadOptionsCiudadUniversidad();
  }

  loadOptionsPaisUniversidad(): void {
    let paisUniversidad: Array<any> = [];
    this.ubicacionesService.get('lugar/?query=TipoLugar.Nombre:PAIS')
      .subscribe(res => {
        if (res !== null) {
          paisUniversidad = <Array<Lugar>>res;
        }
        this.formInfoFormacionAcademica.campos[this.getIndexForm('PaisUniversidad')].opciones = paisUniversidad;
      });
  }

  loadOptionsCiudadUniversidad(): void {
    let consultaHijos: Array<any> = [];
    const ciudadUniversidad: Array<any> = [];
    if (this.paisSelecccionado) {
      this.ubicacionesService.get('relacion_lugares/?query=LugarPadre.Id:' + this.paisSelecccionado.Id)
        .subscribe(res => {
          if (res !== null) {
            consultaHijos = <Array<Lugar>>res;
            for (let i = 0; i < consultaHijos.length; i++) {
              ciudadUniversidad.push(consultaHijos[i].LugarHijo);
            }
          }
          this.formInfoFormacionAcademica.campos[this.getIndexForm('CiudadUniversidad')].opciones = ciudadUniversidad;
        });
    }
  }

  getIndexForm(nombre: String): number {
    for (let index = 0; index < this.formInfoFormacionAcademica.campos.length; index++) {
      const element = this.formInfoFormacionAcademica.campos[index];
      if (element.nombre === nombre) {
        return index
      }
    }
    return 0;
  }
  searchDoc(event) {
    console.info(event);
  }

  public loadInfoFormacionAcademica(): void {
    if (this.info_formacion_academica_id !== undefined &&
      this.info_formacion_academica_id !== 0 &&
      this.info_formacion_academica_id.toString() !== '') {
      /** this.Service.get('')
        .subscribe(res => {
          if (res !== null) {
            this.info_formacion_academica = <InfoFormacionAcademica>res;
          }
        }); **/
    } else {
      this.info_formacion_academica = undefined
      this.clean = !this.clean;
    }
  }

  updateInfoFormacionAcademica(infoFormacionAcademica: any): void {
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
          this.info_formacion_academica = <InfoFormacionAcademica>infoFormacionAcademica;
          /** this.Service.put('', this.info_formacion_academica)
            .subscribe(res => { **/
          this.loadInfoFormacionAcademica();
          this.eventChange.emit(true);
          this.showToast('info', this.translate.instant('GLOBAL.actualizar'),
            this.translate.instant('GLOBAL.formacion_academica') + ' ' +
            this.translate.instant('GLOBAL.confirmarActualizar'));
          /** }); **/
        }
      });
  }

  createInfoFormacionAcademica(infoFormacionAcademica: any): void {
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
          this.info_formacion_academica = <InfoFormacionAcademica>infoFormacionAcademica;
          /** this.Service.post('', this.info_formacion_academica)
            .subscribe(res => {
              this.info_formacion_academica = <InfoFormacionAcademica>res; **/
          this.eventChange.emit(true);
          this.showToast('info', this.translate.instant('GLOBAL.crear'),
            this.translate.instant('GLOBAL.formacion_academica') + ' ' +
            this.translate.instant('GLOBAL.confirmarCrear'));
          /** }); **/
        }
      });
  }

  ngOnInit() {
    this.loadInfoFormacionAcademica();
  }

  validarForm(event) {
    if (event.valid) {
      if (this.info_formacion_academica === undefined) {
        this.createInfoFormacionAcademica(event.data.InfoFormacionAcademica);
      } else {
        this.updateInfoFormacionAcademica(event.data.InfoFormacionAcademica);
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
