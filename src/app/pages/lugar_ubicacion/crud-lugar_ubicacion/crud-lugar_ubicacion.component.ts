import { Lugar } from './../../../@core/data/models/lugar';

import { LugarUbicacion } from './../../../@core/data/models/lugar_ubicacion';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UbicacionesService } from '../../../@core/data/ubicaciones.service';
import { FORM_LUGAR_UBICACION } from './form-lugar_ubicacion';
import { ToasterService, ToasterConfig, Toast, BodyOutputType } from 'angular2-toaster';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import 'style-loader!angular2-toaster/toaster.css';

@Component({
  selector: 'ngx-crud-lugar-ubicacion',
  templateUrl: './crud-lugar_ubicacion.component.html',
  styleUrls: ['./crud-lugar_ubicacion.component.scss'],
})
export class CrudLugarUbicacionComponent implements OnInit {
  config: ToasterConfig;
  lugar_ubicacion_id: number;

  @Input('lugar_ubicacion_id')
  set name(lugar_ubicacion_id: number) {
    this.lugar_ubicacion_id = lugar_ubicacion_id;
    this.loadLugarUbicacion();
  }

  @Output() eventChange = new EventEmitter();

  info_lugar_ubicacion: LugarUbicacion;
  formLugarUbicacion: any;
  regLugarUbicacion: any;
  clean: boolean;

  constructor(private translate: TranslateService, private ubicacionesService: UbicacionesService, private toasterService: ToasterService) {
    this.formLugarUbicacion = FORM_LUGAR_UBICACION;
    this.construirForm();
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.construirForm();
    });
    this.loadOptionsLugar();
   }

  construirForm() {
    this.formLugarUbicacion.titulo = this.translate.instant('GLOBAL.lugar_ubicacion');
    this.formLugarUbicacion.btn = this.translate.instant('GLOBAL.guardar');
    for (let i = 0; i < this.formLugarUbicacion.campos.length; i++) {
      this.formLugarUbicacion.campos[i].label = this.translate.instant('GLOBAL.' + this.formLugarUbicacion.campos[i].label_i18n);
      this.formLugarUbicacion.campos[i].placeholder = this.translate.instant('GLOBAL.placeholder_' + this.formLugarUbicacion.campos[i].label_i18n);
    }
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }

  loadOptionsLugar(): void {
    let lugar: Array<any> = [];
      this.ubicacionesService.get('lugar/?limit=0')
        .subscribe(res => {
          if (res !== null) {
            lugar = <Array<Lugar>>res;
          }
          this.formLugarUbicacion.campos[ this.getIndexForm('Lugar') ].opciones = lugar;
        });
  }

  getIndexForm(nombre: String): number {
    for (let index = 0; index < this.formLugarUbicacion.campos.length; index++) {
      const element = this.formLugarUbicacion.campos[index];
      if (element.nombre === nombre) {
        return index
      }
    }
    return 0;
  }


  public loadLugarUbicacion(): void {
    if (this.lugar_ubicacion_id !== undefined && this.lugar_ubicacion_id !== 0) {
      this.ubicacionesService.get('lugar_ubicacion/?query=id:' + this.lugar_ubicacion_id)
        .subscribe(res => {
          if (res !== null) {
            this.info_lugar_ubicacion = <LugarUbicacion>res[0];
          }
        });
    } else  {
      this.info_lugar_ubicacion = undefined;
      this.clean = !this.clean;
    }
  }

  updateLugarUbicacion(lugarUbicacion: any): void {

    const opt: any = {
      title: 'Update?',
      text: 'Update LugarUbicacion!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
      showCancelButton: true,
    };
    Swal(opt)
    .then((willDelete) => {
      if (willDelete.value) {
        this.info_lugar_ubicacion = <LugarUbicacion>lugarUbicacion;
        this.ubicacionesService.put('lugar_ubicacion', this.info_lugar_ubicacion)
          .subscribe(res => {
            this.loadLugarUbicacion();
            this.eventChange.emit(true);
            this.showToast('info', 'updated', 'LugarUbicacion updated');
          });
      }
    });
  }

  createLugarUbicacion(lugarUbicacion: any): void {
    const opt: any = {
      title: 'Create?',
      text: 'Create LugarUbicacion!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
      showCancelButton: true,
    };
    Swal(opt)
    .then((willDelete) => {
      if (willDelete.value) {
        this.info_lugar_ubicacion = <LugarUbicacion>lugarUbicacion;
        this.ubicacionesService.post('lugar_ubicacion', this.info_lugar_ubicacion)
          .subscribe(res => {
            this.info_lugar_ubicacion = <LugarUbicacion>res;
            this.eventChange.emit(true);
            this.showToast('info', 'created', 'LugarUbicacion created');
          });
      }
    });
  }

  ngOnInit() {
    this.loadLugarUbicacion();
  }

  validarForm(event) {
    if (event.valid) {
      if (this.info_lugar_ubicacion === undefined) {
        this.createLugarUbicacion(event.data.LugarUbicacion);
      } else {
        this.updateLugarUbicacion(event.data.LugarUbicacion);
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
