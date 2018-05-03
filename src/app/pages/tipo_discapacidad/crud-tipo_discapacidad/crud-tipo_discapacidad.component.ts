
import { TipoDiscapacidad } from './../../../@core/data/models/tipo_discapacidad';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PersonaService } from '../../../@core/data/persona.service';
import { FORM_TIPO_DISCAPACIDAD } from './form-tipo_discapacidad';
import { ToasterService, ToasterConfig, Toast, BodyOutputType } from 'angular2-toaster';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import 'style-loader!angular2-toaster/toaster.css';

@Component({
  selector: 'ngx-crud-tipo-discapacidad',
  templateUrl: './crud-tipo_discapacidad.component.html',
  styleUrls: ['./crud-tipo_discapacidad.component.scss'],
})
export class CrudTipoDiscapacidadComponent implements OnInit {
  config: ToasterConfig;
  tipo_discapacidad_id: number;

  @Input('tipo_discapacidad_id')
  set name(tipo_discapacidad_id: number) {
    this.tipo_discapacidad_id = tipo_discapacidad_id;
    this.loadTipoDiscapacidad();
  }

  @Output() eventChange = new EventEmitter();

  info_tipo_discapacidad: TipoDiscapacidad;
  formTipoDiscapacidad: any;
  regTipoDiscapacidad: any;
  clean: boolean;

  constructor(private translate: TranslateService, private personaService: PersonaService, private toasterService: ToasterService) {
    this.formTipoDiscapacidad = FORM_TIPO_DISCAPACIDAD;
    this.construirForm();
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.construirForm();
    });
   }

  construirForm() {
    this.formTipoDiscapacidad.titulo = this.translate.instant('GLOBAL.tipo_discapacidad');
    this.formTipoDiscapacidad.btn = this.translate.instant('GLOBAL.guardar');
    for (let i = 0; i < this.formTipoDiscapacidad.campos.length; i++) {
      this.formTipoDiscapacidad.campos[i].label = this.translate.instant('GLOBAL.' + this.formTipoDiscapacidad.campos[i].label_i18n);
      this.formTipoDiscapacidad.campos[i].placeholder = this.translate.instant('GLOBAL.placeholder_' + this.formTipoDiscapacidad.campos[i].label_i18n);
    }
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }


  getIndexForm(nombre: String): number {
    for (let index = 0; index < this.formTipoDiscapacidad.campos.length; index++) {
      const element = this.formTipoDiscapacidad.campos[index];
      if (element.nombre === nombre) {
        return index
      }
    }
    return 0;
  }


  public loadTipoDiscapacidad(): void {
    if (this.tipo_discapacidad_id !== undefined && this.tipo_discapacidad_id !== 0) {
      this.personaService.get('tipo_discapacidad/?query=id:' + this.tipo_discapacidad_id)
        .subscribe(res => {
          if (res !== null) {
            this.info_tipo_discapacidad = <TipoDiscapacidad>res[0];
          }
        });
    } else  {
      this.info_tipo_discapacidad = undefined;
      this.clean = !this.clean;
    }
  }

  updateTipoDiscapacidad(tipoDiscapacidad: any): void {

    const opt: any = {
      title: 'Update?',
      text: 'Update TipoDiscapacidad!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
      showCancelButton: true,
    };
    Swal(opt)
    .then((willDelete) => {
      if (willDelete.value) {
        this.info_tipo_discapacidad = <TipoDiscapacidad>tipoDiscapacidad;
        this.personaService.put('tipo_discapacidad', this.info_tipo_discapacidad)
          .subscribe(res => {
            this.loadTipoDiscapacidad();
            this.eventChange.emit(true);
            this.showToast('info', 'updated', 'TipoDiscapacidad updated');
          });
      }
    });
  }

  createTipoDiscapacidad(tipoDiscapacidad: any): void {
    const opt: any = {
      title: 'Create?',
      text: 'Create TipoDiscapacidad!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
      showCancelButton: true,
    };
    Swal(opt)
    .then((willDelete) => {
      if (willDelete.value) {
        this.info_tipo_discapacidad = <TipoDiscapacidad>tipoDiscapacidad;
        this.personaService.post('tipo_discapacidad', this.info_tipo_discapacidad)
          .subscribe(res => {
            this.info_tipo_discapacidad = <TipoDiscapacidad>res;
            this.eventChange.emit(true);
            this.showToast('info', 'created', 'TipoDiscapacidad created');
          });
      }
    });
  }

  ngOnInit() {
    this.loadTipoDiscapacidad();
  }

  validarForm(event) {
    if (event.valid) {
      if (this.info_tipo_discapacidad === undefined) {
        this.createTipoDiscapacidad(event.data.TipoDiscapacidad);
      } else {
        this.updateTipoDiscapacidad(event.data.TipoDiscapacidad);
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
