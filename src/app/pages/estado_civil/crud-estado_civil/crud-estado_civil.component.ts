
import { EstadoCivil } from './../../../@core/data/models/estado_civil';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PersonaService } from '../../../@core/data/persona.service';
import { FORM_ESTADO_CIVIL } from './form-estado_civil';
import { ToasterService, ToasterConfig, Toast, BodyOutputType } from 'angular2-toaster';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import 'style-loader!angular2-toaster/toaster.css';

@Component({
  selector: 'ngx-crud-estado-civil',
  templateUrl: './crud-estado_civil.component.html',
  styleUrls: ['./crud-estado_civil.component.scss'],
})
export class CrudEstadoCivilComponent implements OnInit {
  config: ToasterConfig;
  estado_civil_id: number;

  @Input('estado_civil_id')
  set name(estado_civil_id: number) {
    this.estado_civil_id = estado_civil_id;
    this.loadEstadoCivil();
  }

  @Output() eventChange = new EventEmitter();

  info_estado_civil: EstadoCivil;
  formEstadoCivil: any;
  regEstadoCivil: any;
  clean: boolean;

  constructor(private translate: TranslateService, private personaService: PersonaService, private toasterService: ToasterService) {
    this.formEstadoCivil = FORM_ESTADO_CIVIL;
    this.construirForm();
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.construirForm();
    });
   }

  construirForm() {
    this.formEstadoCivil.titulo = this.translate.instant('GLOBAL.estado_civil');
    this.formEstadoCivil.btn = this.translate.instant('GLOBAL.guardar');
    for (let i = 0; i < this.formEstadoCivil.campos.length; i++) {
      this.formEstadoCivil.campos[i].label = this.translate.instant('GLOBAL.' + this.formEstadoCivil.campos[i].label_i18n);
      this.formEstadoCivil.campos[i].placeholder = this.translate.instant('GLOBAL.placeholder_' + this.formEstadoCivil.campos[i].label_i18n);
    }
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }


  getIndexForm(nombre: String): number {
    for (let index = 0; index < this.formEstadoCivil.campos.length; index++) {
      const element = this.formEstadoCivil.campos[index];
      if (element.nombre === nombre) {
        return index
      }
    }
    return 0;
  }


  public loadEstadoCivil(): void {
    if (this.estado_civil_id !== undefined && this.estado_civil_id !== 0) {
      this.personaService.get('estado_civil/?query=id:' + this.estado_civil_id)
        .subscribe(res => {
          if (res !== null) {
            this.info_estado_civil = <EstadoCivil>res[0];
          }
        });
    } else  {
      this.info_estado_civil = undefined;
      this.clean = !this.clean;
    }
  }

  updateEstadoCivil(estadoCivil: any): void {

    const opt: any = {
      title: 'Update?',
      text: 'Update EstadoCivil!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
      showCancelButton: true,
    };
    Swal(opt)
    .then((willDelete) => {
      if (willDelete.value) {
        this.info_estado_civil = <EstadoCivil>estadoCivil;
        this.personaService.put('estado_civil', this.info_estado_civil)
          .subscribe(res => {
            this.loadEstadoCivil();
            this.eventChange.emit(true);
            this.showToast('info', 'updated', 'EstadoCivil updated');
          });
      }
    });
  }

  createEstadoCivil(estadoCivil: any): void {
    const opt: any = {
      title: 'Create?',
      text: 'Create EstadoCivil!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
      showCancelButton: true,
    };
    Swal(opt)
    .then((willDelete) => {
      if (willDelete.value) {
        this.info_estado_civil = <EstadoCivil>estadoCivil;
        this.personaService.post('estado_civil', this.info_estado_civil)
          .subscribe(res => {
            this.info_estado_civil = <EstadoCivil>res;
            this.eventChange.emit(true);
            this.showToast('info', 'created', 'EstadoCivil created');
          });
      }
    });
  }

  ngOnInit() {
    this.loadEstadoCivil();
  }

  validarForm(event) {
    if (event.valid) {
      if (this.info_estado_civil === undefined) {
        this.createEstadoCivil(event.data.EstadoCivil);
      } else {
        this.updateEstadoCivil(event.data.EstadoCivil);
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
