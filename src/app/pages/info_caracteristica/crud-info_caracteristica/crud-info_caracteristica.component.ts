import { GrupoEtnico } from './../../../@core/data/models/grupo_etnico';
import { TipoDiscapacidad } from './../../../@core/data/models/tipo_discapacidad';
import { Lugar } from './../../../@core/data/models/lugar';
import { InfoCaracteristica } from './../../../@core/data/models/info_caracteristica';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PersonaService } from '../../../@core/data/persona.service';
import { UbicacionesService } from '../../../@core/data/ubicaciones.service';
import { MidPersonaService } from '../../../@core/data/mid_persona.service';
import { FORM_INFO_CARACTERISTICA } from './form-info_caracteristica';
import { ToasterService, ToasterConfig, Toast, BodyOutputType } from 'angular2-toaster';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import 'style-loader!angular2-toaster/toaster.css';

@Component({
  selector: 'ngx-crud-info-caracteristica',
  templateUrl: './crud-info_caracteristica.component.html',
  styleUrls: ['./crud-info_caracteristica.component.scss'],
})
export class CrudInfoCaracteristicaComponent implements OnInit {
  config: ToasterConfig;
  info_caracteristica_id: number;

  @Input('info_caracteristica_id')
  set name(info_caracteristica_id: number) {
    this.info_caracteristica_id = info_caracteristica_id;
    this.loadInfoCaracteristica();
  }

  @Output() eventChange = new EventEmitter();

  info_info_caracteristica: InfoCaracteristica;
  formInfoCaracteristica: any;
  regInfoCaracteristica: any;
  clean: boolean;

  constructor(
    private translate: TranslateService,
    private midPersonaService: MidPersonaService,
    private ubicacionesService: UbicacionesService,
    private personaService: PersonaService,
    private toasterService: ToasterService) {
    this.formInfoCaracteristica = FORM_INFO_CARACTERISTICA;
    this.construirForm();
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.construirForm();
    });
    this.loadOptionsGrupoEtnico();
    this.loadOptionsTipoDiscapacidad();
    this.loadOptionsPaisNacimiento();
   }

  construirForm() {
    // this.formInfoCaracteristica.titulo = this.translate.instant('GLOBAL.info_caracteristica');
    this.formInfoCaracteristica.btn = this.translate.instant('GLOBAL.guardar');
    for (let i = 0; i < this.formInfoCaracteristica.campos.length; i++) {
      this.formInfoCaracteristica.campos[i].label = this.translate.instant('GLOBAL.' + this.formInfoCaracteristica.campos[i].label_i18n);
      this.formInfoCaracteristica.campos[i].placeholder = this.translate.instant('GLOBAL.placeholder_' + this.formInfoCaracteristica.campos[i].label_i18n);
    }
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }

  loadOptionsGrupoEtnico(): void {
    let grupoEtnico: Array<any> = [];
      this.personaService.get('grupo_etnico/?limit=0')
        .subscribe(res => {
          if (res !== null) {
            grupoEtnico = <Array<GrupoEtnico>>res;
          }
          this.formInfoCaracteristica.campos[ this.getIndexForm('GrupoEtnico') ].opciones = grupoEtnico;
        });
  }
  loadOptionsTipoDiscapacidad(): void {
    let tipoDiscapacidad: Array<any> = [];
      this.personaService.get('tipo_discapacidad/?limit=0')
        .subscribe(res => {
          if (res !== null) {
            tipoDiscapacidad = <Array<TipoDiscapacidad>>res;
          }
          this.formInfoCaracteristica.campos[ this.getIndexForm('TipoDiscapacidad') ].opciones = tipoDiscapacidad;
        });
  }
  loadOptionsPaisNacimiento(): void {
    let paisNacimiento: Array<any> = [];
      this.ubicacionesService.get('lugar/?limit=0')
        .subscribe(res => {
          if (res !== null) {
            paisNacimiento = <Array<Lugar>>res;
          }
          this.formInfoCaracteristica.campos[ this.getIndexForm('PaisNacimiento') ].opciones = paisNacimiento;
        });
  }

  getIndexForm(nombre: String): number {
    for (let index = 0; index < this.formInfoCaracteristica.campos.length; index++) {
      const element = this.formInfoCaracteristica.campos[index];
      if (element.nombre === nombre) {
        return index
      }
    }
    return 0;
  }


  public loadInfoCaracteristica(): void {
    if (this.info_caracteristica_id !== undefined && this.info_caracteristica_id !== 0 &&
      this.info_caracteristica_id.toString() !== '') {
      this.midPersonaService.get('info_caracteristica/?query=id:' + this.info_caracteristica_id)
        .subscribe(res => {
          if (res !== null) {
            this.info_info_caracteristica = <InfoCaracteristica>res[0];
          }
        });
    } else  {
      this.info_info_caracteristica = undefined;
      this.clean = !this.clean;
    }
  }

  updateInfoCaracteristica(infoCaracteristica: any): void {
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
        this.info_info_caracteristica = <InfoCaracteristica>infoCaracteristica;
        this.midPersonaService.put('info_caracteristica', this.info_info_caracteristica)
          .subscribe(res => {
            this.loadInfoCaracteristica();
            this.eventChange.emit(true);
            this.showToast('info', this.translate.instant('GLOBAL.actualizar'),
            this.translate.instant('GLOBAL.info_caracteristica') + ' ' +
            this.translate.instant('GLOBAL.confirmarActualizar'));
        });
  }
    });
  }

  createInfoCaracteristica(infoCaracteristica: any): void {
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
        this.info_info_caracteristica = <InfoCaracteristica>infoCaracteristica;
        this.midPersonaService.post('info_caracteristica', this.info_info_caracteristica)
          .subscribe(res => {
            this.info_info_caracteristica = <InfoCaracteristica>res;
            this.eventChange.emit(true);
            this.showToast('info', this.translate.instant('GLOBAL.crear'),
            this.translate.instant('GLOBAL.info_caracteristica') + ' ' +
            this.translate.instant('GLOBAL.confirmarCrear'));
        });
      }
    });
  }

  ngOnInit() {
    this.loadInfoCaracteristica();
  }

  validarForm(event) {
    if (event.valid) {
      if (this.info_info_caracteristica === undefined) {
        this.createInfoCaracteristica(event.data.InfoCaracteristica);
      } else {
        this.updateInfoCaracteristica(event.data.InfoCaracteristica);
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
