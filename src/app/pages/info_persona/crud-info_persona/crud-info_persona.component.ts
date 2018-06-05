import { EstadoCivil } from './../../../@core/data/models/estado_civil';
import { ImplicitAutenticationService } from '../../../@core/utils/implicit_autentication.service';
import { NuxeoService } from '../../../@core/utils/nuxeo.service';
import { Genero } from './../../../@core/data/models/genero';
import { Documento } from './../../../@core/data/models/documento';
import { InfoPersona } from './../../../@core/data/models/info_persona';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PersonaService } from '../../../@core/data/persona.service';
import { DocumentoService } from '../../../@core/data/documento.service';
import { CampusMidService } from '../../../@core/data/campus_mid.service';
import { FORM_INFO_PERSONA } from './form-info_persona';
import { ToasterService, ToasterConfig, Toast, BodyOutputType } from 'angular2-toaster';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import 'style-loader!angular2-toaster/toaster.css';

@Component({
  selector: 'ngx-crud-info-persona',
  templateUrl: './crud-info_persona.component.html',
  styleUrls: ['./crud-info_persona.component.scss'],
})
export class CrudInfoPersonaComponent implements OnInit {
  filesUp: any;
  uidFile: any;
  config: ToasterConfig;
  info_persona_id: number;

  @Input('info_persona_id')
  set name(info_persona_id: number) {
    this.info_persona_id = info_persona_id;
    this.loadInfoPersona();
  }

  @Output() eventChange = new EventEmitter();
  @Output('result') result: EventEmitter<any> = new EventEmitter();

  info_info_persona: InfoPersona;
  formInfoPersona: any;
  regInfoPersona: any;
  clean: boolean;

  constructor(
    private translate: TranslateService,
    private campusMidService: CampusMidService,
    private autenticationService: ImplicitAutenticationService,
    private nuxeoService: NuxeoService,
    private personaService: PersonaService,
    private documentoService: DocumentoService,
    private toasterService: ToasterService) {
    this.formInfoPersona = FORM_INFO_PERSONA;
    this.construirForm();
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.construirForm();
    });
    this.loadOptionsEstadoCivil();
    this.loadOptionsGenero();
  }

  construirForm() {
    // this.formInfoPersona.titulo = this.translate.instant('GLOBAL.info_persona');
    this.formInfoPersona.btn = this.translate.instant('GLOBAL.guardar');
    for (let i = 0; i < this.formInfoPersona.campos.length; i++) {
      this.formInfoPersona.campos[i].label = this.translate.instant('GLOBAL.' + this.formInfoPersona.campos[i].label_i18n);
      this.formInfoPersona.campos[i].placeholder = this.translate.instant('GLOBAL.placeholder_' + this.formInfoPersona.campos[i].label_i18n);
    }
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }

  loadOptionsEstadoCivil(): void {
    let estadoCivil: Array<any> = [];
    this.personaService.get('estado_civil/?limit=0')
      .subscribe(res => {
        if (res !== null) {
          estadoCivil = <Array<EstadoCivil>>res;
        }
        this.formInfoPersona.campos[this.getIndexForm('EstadoCivil')].opciones = estadoCivil;
      });
  }
  loadOptionsGenero(): void {
    let genero: Array<any> = [];
    this.personaService.get('genero/?limit=0')
      .subscribe(res => {
        if (res !== null) {
          genero = <Array<Genero>>res;
        }
        this.formInfoPersona.campos[this.getIndexForm('Genero')].opciones = genero;
      });
  }

  getIndexForm(nombre: String): number {
    for (let index = 0; index < this.formInfoPersona.campos.length; index++) {
      const element = this.formInfoPersona.campos[index];
      if (element.nombre === nombre) {
        return index
      }
    }
    return 0;
  }

  public loadInfoPersona(): void {
    if (this.info_persona_id !== undefined && this.info_persona_id !== 0 &&
      this.info_persona_id.toString() !== '') {
      // esto retornará error hasta que no se ajuste mid
      this.campusMidService.get('persona/ConsultaPersona/' + this.autenticationService.getPayload().sub)
        // this.info_persona_id)
        .subscribe(res => {
          if (res !== null) {
            this.info_info_persona = <InfoPersona>res;
            // NuxeoService.cargar(documento.Enlace, this.formInfoPersona.campos[this.getIndexForm('Foto')].url)
            // .then(function (resolve: any) {
            //   if (resolve.url !== null) {
            //     console.info(resolve);
            //     // this.formInfoPersona.campos[this.getIndexForm('Foto')].url = resolve.url;
            //     // this.nuxeoService.cargar(documento.Enlace)
            //   }
            // }, function (reject) {
            //   console.info(reject);
            // });
          }
        });
    } else {
      this.info_info_persona = undefined
      this.clean = !this.clean;
    }
  }

  updateInfoPersona(infoPersona: any): void {
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
          this.info_info_persona = <InfoPersona>infoPersona;
          this.campusMidService.put('persona/ActualizarPersona', this.info_info_persona)
            .subscribe(res => {
              this.loadInfoPersona();
              this.eventChange.emit(true);
              this.showToast('info', this.translate.instant('GLOBAL.actualizar'),
                this.translate.instant('GLOBAL.info_persona') + ' ' +
                this.translate.instant('GLOBAL.confirmarActualizar'));
            });
        }
      });
  }

  createInfoPersona(infoPersona: any): void {
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
          const array = []
          this.info_info_persona = <InfoPersona>infoPersona;
          array.push({ nombre: this.autenticationService.getPayload().sub, file: this.info_info_persona.Foto, IdDocumento: 1 });
          //          this.filesUp = array;
          NuxeoService.guardar(array, this.documentoService)
            .then(function (resolveOutput) {
              if (resolveOutput !== null) {
                const documento = <Documento>resolveOutput;
                console.info(resolveOutput);
              }

            }, function (rejectOutput) {
              // console.info(rejectOutput);
            });
          this.campusMidService.post('persona/GuardarPersona', this.info_info_persona)
            .subscribe(res => {
              this.info_info_persona = <InfoPersona>res;
              this.eventChange.emit(true);
              this.showToast('info', this.translate.instant('GLOBAL.crear'),
                this.translate.instant('GLOBAL.info_persona') + ' ' + this.translate.instant('GLOBAL.confirmarCrear'));
            });
        }
      });
  }

  ngOnInit() {
    this.loadInfoPersona();
  }

  validarForm(event) {
    if (event.valid) {
      if (this.info_info_persona === undefined) {
        this.createInfoPersona(event.data.InfoPersona);
      } else {
        this.updateInfoPersona(event.data.InfoPersona);
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

  // Nuxeo functions
  guardarFileService(event) {
    console.info('file', event);
    this.uidFile = event.uid;
  }
  getUrlFile(event) {
    console.info('url', event);
    this.showToast('info', this.translate.instant('GLOBAL.crear'),
      this.translate.instant('GLOBAL.alerta_documental_image'));
  }

}
