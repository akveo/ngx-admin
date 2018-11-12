import { ImplicitAutenticationService } from '../../../@core/utils/implicit_autentication.service';
import { NuxeoService } from '../../../@core/utils/nuxeo.service';
import { InfoPersona } from './../../../@core/data/models/info_persona';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DocumentoService } from '../../../@core/data/documento.service';
import { CampusMidService } from '../../../@core/data/campus_mid.service';
import { FORM_INFO_PERSONA } from './form-info_persona';
import { ToasterService, ToasterConfig, Toast, BodyOutputType } from 'angular2-toaster';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { HttpErrorResponse } from '@angular/common/http';
import Swal from 'sweetalert2';
import 'style-loader!angular2-toaster/toaster.css';
import { IAppState } from '../../../@core/store/app.state';
import { Store } from '@ngrx/store';
import { ListService } from '../../../@core/store/services/list.service';

@Component({
  selector: 'ngx-crud-info-persona',
  templateUrl: './crud-info_persona.component.html',
  styleUrls: ['./crud-info_persona.component.scss'],
})
export class CrudInfoPersonaComponent implements OnInit {
  filesUp: any;
  Foto: any;
  SoporteDocumento: any;
  config: ToasterConfig;
  info_persona_id: number;

  @Input('info_persona_id')
  set name(info_persona_id: number) {
    this.info_persona_id = info_persona_id;
    this.loadInfoPersona();
  }

  @Output() eventChange = new EventEmitter();
  @Output('result') result: EventEmitter<any> = new EventEmitter();

  info_info_persona: any;
  formInfoPersona: any;
  regInfoPersona: any;
  clean: boolean;
  loading: boolean;
  percentage: number;

  constructor(
    private translate: TranslateService,
    private campusMidService: CampusMidService,
    private autenticationService: ImplicitAutenticationService,
    private documentoService: DocumentoService,
    private nuxeoService: NuxeoService,
    private store: Store < IAppState > ,
    private listService: ListService,
    private toasterService: ToasterService) {
    this.formInfoPersona = FORM_INFO_PERSONA;
    this.construirForm();
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.construirForm();
    });
    this.listService.findGenero();
    this.listService.findEstadoCivil();
    this.listService.findTipoIdentificacion();
    this.loading = false;
    this.loadLists();
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
    this.loading = true;
    if (this.info_persona_id !== undefined && this.info_persona_id !== 0 &&
      this.info_persona_id.toString() !== '') {
      this.campusMidService.get('persona/ConsultaPersona/?id=' + this.info_persona_id)
        .subscribe(res => {
          if (res !== null) {
            const temp = <InfoPersona>res;
            const files = []
            if (temp.Foto + '' !== '0') {
              files.push({ Id: temp.Foto, key: 'Foto' });
            }
            if (temp.SoporteDocumento + '' !== '0') {
              files.push({ Id: temp.SoporteDocumento, key: 'SoporteDocumento' });
            }
            this.nuxeoService.getDocumentoById$(files, this.documentoService)
              .subscribe(response => {
                const filesResponse = <any>response;
                if (Object.keys(filesResponse).length === files.length) {
                  this.info_info_persona = temp;
                  this.Foto = this.info_info_persona.Foto;
                  this.SoporteDocumento = this.info_info_persona.SoporteDocumento;
                  this.info_info_persona.Foto = filesResponse['Foto'] + '';
                  this.info_info_persona.SoporteDocumento = filesResponse['SoporteDocumento'] + '';
                  this.loading = false;
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
    } else {
      this.info_info_persona = undefined
      this.clean = !this.clean;
      this.loading = false;
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
          this.loading = true;
          this.info_info_persona = <any>infoPersona;
          const files = [];
          if (this.info_info_persona.Foto.file !== undefined) {
            files.push({ file: this.info_info_persona.Foto.file, documento: this.Foto, key: 'Foto' });
          }
          if (this.info_info_persona.SoporteDocumento.file !== undefined) {
            files.push({ file: this.info_info_persona.SoporteDocumento.file, documento: this.SoporteDocumento, key: 'SoporteDocumento' });
          }
          if (files.length !== 0) {
            this.nuxeoService.updateDocument$(files, this.documentoService)
              .subscribe(response => {
                if (Object.keys(response).length === files.length) {
                  const documentos_actualizados = <any>response;
                  this.info_info_persona.Foto = this.Foto;
                  this.info_info_persona.SoporteDocumento = this.SoporteDocumento;
                  this.campusMidService.put('persona/ActualizarPersona', this.info_info_persona)
                    .subscribe(res => {
                      if (documentos_actualizados['Foto'] !== undefined) {
                        this.info_info_persona.Foto = documentos_actualizados['Foto'].url + '';
                      }
                      if (documentos_actualizados['SoporteDocumento'] !== undefined) {
                        this.info_info_persona.SoporteDocumento = documentos_actualizados['SoporteDocumento'].url + '';
                      }
                      this.loading = false;
                      this.eventChange.emit(true);
                      this.loadInfoPersona();
                      this.showToast('info', this.translate.instant('GLOBAL.actualizar'),
                        this.translate.instant('GLOBAL.info_persona') + ' ' +
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
              },
              (error: HttpErrorResponse) => {
                Swal({
                  type: 'error',
                  title: error.status + '',
                  text: this.translate.instant('ERROR.' + error.status),
                  confirmButtonText: this.translate.instant('GLOBAL.aceptar'),
                });
              });
          } else {
            console.info(this.info_info_persona);
            this.info_info_persona.Foto = this.Foto;
            this.info_info_persona.SoporteDocumento = this.SoporteDocumento;
            this.campusMidService.put('persona/ActualizarPersona', this.info_info_persona)
              .subscribe(res => {
                this.eventChange.emit(true);
                this.loadInfoPersona();
                this.loading = false;
                this.showToast('info', this.translate.instant('GLOBAL.actualizar'),
                  this.translate.instant('GLOBAL.info_persona') + ' ' +
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
        this.loading = true;
        if (willDelete.value) {
          const files = []
          this.info_info_persona = <any>infoPersona;
          console.info(this.info_info_persona);
          if (this.info_info_persona.Foto.file !== undefined) {
            files.push({
              nombre: this.autenticationService.getPayload().sub, key: 'Foto',
              file: this.info_info_persona.Foto.file, IdDocumento: 1});
          }
          if (this.info_info_persona.SoporteDocumento.file !== undefined) {
            files.push({
              nombre: this.autenticationService.getPayload().sub, key: 'SoporteDocumento',
              file: this.info_info_persona.SoporteDocumento.file, IdDocumento: 2});
          }
          this.nuxeoService.getDocumentos$(files, this.documentoService)
            .subscribe(response => {
              if (Object.keys(response).length === files.length) {
                this.filesUp = <any>response;
                if (this.filesUp['Foto'] !== undefined) {
                  this.info_info_persona.Foto = this.filesUp['Foto'].Id;
                }
                if (this.filesUp['SoporteDocumento'] !== undefined) {
                  this.info_info_persona.SoporteDocumento = this.filesUp['SoporteDocumento'].Id;
                }
                this.info_info_persona.Usuario = this.autenticationService.getPayload().sub;
                console.info(this.info_info_persona);
                this.campusMidService.post('persona/GuardarPersona', this.info_info_persona)
                  .subscribe(res => {
                    const r = <any>res
                    if (r !== null && r.Type !== 'error') {
                      this.info_persona_id = r.Body.Ente;
                      this.loadInfoPersona();
                      this.loading = false;
                      this.eventChange.emit(true);
                      this.showToast('info', this.translate.instant('GLOBAL.crear'),
                      this.translate.instant('GLOBAL.info_persona') + ' ' + this.translate.instant('GLOBAL.confirmarCrear'));
                    } else {
                      this.showToast('error', this.translate.instant('GLOBAL.error'),
                      this.translate.instant('GLOBAL.error'));
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
              }
            },
            (error: HttpErrorResponse) => {
              Swal({
                type: 'error',
                title: error.status + '',
                text: this.translate.instant('ERROR.' + error.status),
                confirmButtonText: this.translate.instant('GLOBAL.aceptar'),
              });
            })
        }
      });
  }

  ngOnInit() {
  }

  validarForm(event) {
    if (event.valid) {
      if (this.info_info_persona === undefined) {
        this.createInfoPersona(event.data.InfoPersona);
      } else {
        this.updateInfoPersona(event.data.InfoPersona);
      }
    }
  }

  setPercentage(event) {
    this.percentage = event;
    this.result.emit(this.percentage);
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

  public loadLists() {
    this.store.select((state) => state).subscribe(
      (list) => {
        this.formInfoPersona.campos[this.getIndexForm('Genero')].opciones = list.listGenero[0];
        this.formInfoPersona.campos[this.getIndexForm('EstadoCivil')].opciones = list.listEstadoCivil[0];
        this.formInfoPersona.campos[this.getIndexForm('TipoIdentificacion')].opciones = list.listTipoIdentificacion[0];
      },
    );
  }
}
