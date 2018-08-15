import { EnteService } from './../../../@core/data/ente.service';
import { TipoContacto } from './../../../@core/data/models/tipo_contacto';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FORM_TIPO_CONTACTO } from './form-tipo_contacto';
import { ToasterService, ToasterConfig, Toast, BodyOutputType } from 'angular2-toaster';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import 'style-loader!angular2-toaster/toaster.css';

@Component({
  selector: 'ngx-crud-tipo-contacto',
  templateUrl: './crud-tipo_contacto.component.html',
  styleUrls: ['./crud-tipo_contacto.component.scss'],
})
export class CrudTipoContactoComponent implements OnInit {
  config: ToasterConfig;
  tipo_contacto_id: number;

  @Input('tipo_contacto_id')
  set name(tipo_contacto_id: number) {
    this.tipo_contacto_id = tipo_contacto_id;
    this.loadTipoContacto();
  }

  @Output() eventChange = new EventEmitter();

  info_tipo_contacto: TipoContacto;
  formTipoContacto: any;
  regTipoContacto: any;
  clean: boolean;

  constructor(private translate: TranslateService, private enteService: EnteService, private toasterService: ToasterService) {
    this.formTipoContacto = FORM_TIPO_CONTACTO;
    this.construirForm();
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.construirForm();
    });
   }

  construirForm() {
    this.formTipoContacto.titulo = this.translate.instant('GLOBAL.tipo_contacto');
    this.formTipoContacto.btn = this.translate.instant('GLOBAL.guardar');
    for (let i = 0; i < this.formTipoContacto.campos.length; i++) {
      this.formTipoContacto.campos[i].label = this.translate.instant('GLOBAL.' + this.formTipoContacto.campos[i].label_i18n);
      this.formTipoContacto.campos[i].placeholder = this.translate.instant('GLOBAL.placeholder_' + this.formTipoContacto.campos[i].label_i18n);
    }
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }


  getIndexForm(nombre: String): number {
    for (let index = 0; index < this.formTipoContacto.campos.length; index++) {
      const element = this.formTipoContacto.campos[index];
      if (element.nombre === nombre) {
        return index
      }
    }
    return 0;
  }


  public loadTipoContacto(): void {
    if (this.tipo_contacto_id !== undefined && this.tipo_contacto_id !== 0) {
      this.enteService.get('tipo_contacto/?query=id:' + this.tipo_contacto_id)
        .subscribe(res => {
          if (res !== null) {
            this.info_tipo_contacto = <TipoContacto>res[0];
          }
        });
    } else  {
      this.info_tipo_contacto = undefined;
      this.clean = !this.clean;
    }
  }

  updateTipoContacto(tipoContacto: any): void {

    const opt: any = {
      title: 'Update?',
      text: 'Update TipoContacto!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
      showCancelButton: true,
    };
    Swal(opt)
    .then((willDelete) => {
      if (willDelete.value) {
        this.info_tipo_contacto = <TipoContacto>tipoContacto;
        this.enteService.put('tipo_contacto', this.info_tipo_contacto)
          .subscribe(res => {
            this.loadTipoContacto();
            this.eventChange.emit(true);
            this.showToast('info', 'updated', 'TipoContacto updated');
          });
      }
    });
  }

  createTipoContacto(tipoContacto: any): void {
    const opt: any = {
      title: 'Create?',
      text: 'Create TipoContacto!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
      showCancelButton: true,
    };
    Swal(opt)
    .then((willDelete) => {
      if (willDelete.value) {
        this.info_tipo_contacto = <TipoContacto>tipoContacto;
        this.enteService.post('tipo_contacto', this.info_tipo_contacto)
          .subscribe(res => {
            this.info_tipo_contacto = <TipoContacto>res;
            this.eventChange.emit(true);
            this.showToast('info', 'created', 'TipoContacto created');
          });
      }
    });
  }

  ngOnInit() {
    this.loadTipoContacto();
  }

  validarForm(event) {
    if (event.valid) {
      if (this.info_tipo_contacto === undefined) {
        this.createTipoContacto(event.data.TipoContacto);
      } else {
        this.updateTipoContacto(event.data.TipoContacto);
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
