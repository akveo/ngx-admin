
import { TipoLugar } from './../../../@core/data/models/tipo_lugar';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UbicacionesService } from '../../../@core/data/ubicaciones.service';
import { FORM_TIPO_LUGAR } from './form-tipo_lugar';
import { ToasterService, ToasterConfig, Toast, BodyOutputType } from 'angular2-toaster';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import 'style-loader!angular2-toaster/toaster.css';

@Component({
  selector: 'ngx-crud-tipo-lugar',
  templateUrl: './crud-tipo_lugar.component.html',
  styleUrls: ['./crud-tipo_lugar.component.scss'],
})
export class CrudTipoLugarComponent implements OnInit {
  config: ToasterConfig;
  tipo_lugar_id: number;

  @Input('tipo_lugar_id')
  set name(tipo_lugar_id: number) {
    this.tipo_lugar_id = tipo_lugar_id;
    this.loadTipoLugar();
  }

  @Output() eventChange = new EventEmitter();

  info_tipo_lugar: TipoLugar;
  formTipoLugar: any;
  regTipoLugar: any;
  clean: boolean;

  constructor(private translate: TranslateService, private ubicacionesService: UbicacionesService, private toasterService: ToasterService) {
    this.formTipoLugar = FORM_TIPO_LUGAR;
    this.construirForm();
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.construirForm();
    });
   }

  construirForm() {
    this.formTipoLugar.titulo = this.translate.instant('GLOBAL.tipo_lugar');
    this.formTipoLugar.btn = this.translate.instant('GLOBAL.guardar');
    for (let i = 0; i < this.formTipoLugar.campos.length; i++) {
      this.formTipoLugar.campos[i].label = this.translate.instant('GLOBAL.' + this.formTipoLugar.campos[i].label_i18n);
      this.formTipoLugar.campos[i].placeholder = this.translate.instant('GLOBAL.placeholder_' + this.formTipoLugar.campos[i].label_i18n);
    }
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }


  getIndexForm(nombre: String): number {
    for (let index = 0; index < this.formTipoLugar.campos.length; index++) {
      const element = this.formTipoLugar.campos[index];
      if (element.nombre === nombre) {
        return index
      }
    }
    return 0;
  }


  public loadTipoLugar(): void {
    if (this.tipo_lugar_id !== undefined && this.tipo_lugar_id !== 0) {
      this.ubicacionesService.get('tipo_lugar/?query=id:' + this.tipo_lugar_id)
        .subscribe(res => {
          if (res !== null) {
            this.info_tipo_lugar = <TipoLugar>res[0];
          }
        });
    } else  {
      this.info_tipo_lugar = undefined;
      this.clean = !this.clean;
    }
  }

  updateTipoLugar(tipoLugar: any): void {

    const opt: any = {
      title: 'Update?',
      text: 'Update TipoLugar!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
      showCancelButton: true,
    };
    Swal(opt)
    .then((willDelete) => {
      if (willDelete.value) {
        this.info_tipo_lugar = <TipoLugar>tipoLugar;
        this.ubicacionesService.put('tipo_lugar', this.info_tipo_lugar)
          .subscribe(res => {
            this.loadTipoLugar();
            this.eventChange.emit(true);
            this.showToast('info', 'updated', 'TipoLugar updated');
          });
      }
    });
  }

  createTipoLugar(tipoLugar: any): void {
    const opt: any = {
      title: 'Create?',
      text: 'Create TipoLugar!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
      showCancelButton: true,
    };
    Swal(opt)
    .then((willDelete) => {
      if (willDelete.value) {
        this.info_tipo_lugar = <TipoLugar>tipoLugar;
        this.ubicacionesService.post('tipo_lugar', this.info_tipo_lugar)
          .subscribe(res => {
            this.info_tipo_lugar = <TipoLugar>res;
            this.eventChange.emit(true);
            this.showToast('info', 'created', 'TipoLugar created');
          });
      }
    });
  }

  ngOnInit() {
    this.loadTipoLugar();
  }

  validarForm(event) {
    if (event.valid) {
      if (this.info_tipo_lugar === undefined) {
        this.createTipoLugar(event.data.TipoLugar);
      } else {
        this.updateTipoLugar(event.data.TipoLugar);
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
