import { EnteService } from './../../../@core/data/ente.service';
import { CampusMidService } from './../../../@core/data/campus_mid.service';
import { Organizacion } from './../../../@core/data/models/organizacion';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { InfoExperienciaLaboral } from './../../../@core/data/models/info_experiencia_laboral';
import { FORM_EXPERIENCIA_LABORAL } from './form-experiencia_laboral';
import { ToasterService, ToasterConfig, Toast, BodyOutputType } from 'angular2-toaster';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import 'style-loader!angular2-toaster/toaster.css';
import { OrganizacionService } from '../../../@core/data/organizacion.service';
import { UbicacionesService } from '../../../@core/data/ubicaciones.service';
import { Lugar } from '../../../@core/data/models/lugar';
import { ExperienciaService } from '../../../@core/data/experiencia.service';

@Component({
  selector: 'ngx-crud-experiencia-laboral',
  templateUrl: './crud-experiencia_laboral.component.html',
  styleUrls: ['./crud-experiencia_laboral.component.scss'],
})
export class CrudExperienciaLaboralComponent implements OnInit {
  config: ToasterConfig;
  info_experiencia_laboral_id: number;
  organizacion: Organizacion;

  @Input('info_experiencia_laboral_id')
  set name(info_experiencia_laboral_id: number) {
    this.info_experiencia_laboral_id = info_experiencia_laboral_id;
    this.loadInfoExperienciaLaboral();
  }
  @Output() eventChange = new EventEmitter();
  @Output('result') result: EventEmitter<any> = new EventEmitter();

  info_experiencia_laboral: InfoExperienciaLaboral;
  formInfoExperienciaLaboral: any;
  regInfoExperienciaLaboral: any;
  clean: boolean;

  constructor(
    private translate: TranslateService,
    private toasterService: ToasterService,
    private organizacionService: OrganizacionService,
    private campusMidService: CampusMidService,
    private ubicacionesService: UbicacionesService,
    private experienciaService: ExperienciaService,
    private enteService: EnteService) {
    this.formInfoExperienciaLaboral = FORM_EXPERIENCIA_LABORAL;
    this.construirForm();
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.construirForm();
    });
    this.loadOptionsTipoOrganizacion();
    this.loadOptionsPais();
    this.loadOptionsCargo();
    this.loadOptionsTipoDedicacion();
    this.loadOptionsTipoVinculacion();
  }

  construirForm() {
    // this.formInfoExperienciaLaboral.titulo = this.translate.instant('GLOBAL.experiencia_laboral');
    this.formInfoExperienciaLaboral.btn = this.translate.instant('GLOBAL.guardar');
    for (let i = 0; i < this.formInfoExperienciaLaboral.campos.length; i++) {
      this.formInfoExperienciaLaboral.campos[i].label = this.translate.instant('GLOBAL.' + this.formInfoExperienciaLaboral.campos[i].label_i18n);
      this.formInfoExperienciaLaboral.campos[i].placeholder = this.translate.instant('GLOBAL.placeholder_' +
      this.formInfoExperienciaLaboral.campos[i].label_i18n);
    }
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }

  getIndexForm(nombre: String): number {
    for (let index = 0; index < this.formInfoExperienciaLaboral.campos.length; index++) {
      const element = this.formInfoExperienciaLaboral.campos[index];
      if (element.nombre === nombre) {
        return index
      }
    }
    return 0;
  }

  public loadInfoExperienciaLaboral(): void {
    if (this.info_experiencia_laboral_id !== undefined &&
      this.info_experiencia_laboral_id !== 0 &&
      this.info_experiencia_laboral_id.toString() !== '') {
      this.experienciaService.get('experiencia_laboral/?query=Id:' + this.info_experiencia_laboral_id)
        .subscribe(res => {
          if (res !== null) {
            this.info_experiencia_laboral = <InfoExperienciaLaboral>res[0];
            this.enteService.get('identificacion/?query=Ente.Id:' + this.info_experiencia_laboral.Organizacion + ',TipoIdentificacion.Id:5').subscribe(r => {
                if (r !== null) {
                  this.searchOrganizacion(r[0].NumeroIdentificacion);
                }
              });
          }
        });
    } else {
      this.info_experiencia_laboral = undefined
      this.clean = !this.clean;
    }
  }

  updateInfoExperienciaLaboral(infoExperienciaLaboral: any): void {
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
          this.info_experiencia_laboral = <InfoExperienciaLaboral>infoExperienciaLaboral;
          this.info_experiencia_laboral.Id = this.info_experiencia_laboral_id;
          this.experienciaService.put('experiencia_laboral', this.info_experiencia_laboral)
            .subscribe(res => {
              this.loadInfoExperienciaLaboral();
              this.eventChange.emit(true);
              this.showToast('info', this.translate.instant('GLOBAL.actualizar'),
                this.translate.instant('GLOBAL.experiencia_laboral') + ' ' +
                this.translate.instant('GLOBAL.confirmarActualizar'));
             });
        }
      });
  }

  loadOptionsTipoOrganizacion(): void {
    let tipoOrganizacion: Array<any> = [];
    this.organizacionService.get('tipo_organizacion/?limit=0')
      .subscribe(res => {
        if (res !== null) {
          tipoOrganizacion = <Array<any>>res;
        }
        this.formInfoExperienciaLaboral.campos[this.getIndexForm('TipoOrganizacion')].opciones = tipoOrganizacion;
      });
  }

  loadOptionsPais(): void {
    let paisNacimiento: Array<any> = [];
      this.ubicacionesService.get('lugar/?query=TipoLugar.Nombre:PAIS')
        .subscribe(res => {
          if (res !== null) {
            paisNacimiento = <Array<Lugar>>res;
          }
          this.formInfoExperienciaLaboral.campos[ this.getIndexForm('Pais') ].opciones = paisNacimiento;
        });
  }

  loadOptionsCargo(): void {
    let cargo: Array<any> = [];
      this.experienciaService.get('cargo/?limit=0')
        .subscribe(res => {
          if (res !== null) {
            cargo = <Array<any>>res;
          }
          this.formInfoExperienciaLaboral.campos[ this.getIndexForm('Cargo') ].opciones = cargo;
        });
  }

  loadOptionsTipoVinculacion(): void {
    let tipoVinculacion: Array<any> = [];
      this.experienciaService.get('tipo_vinculacion/?limit=0')
        .subscribe(res => {
          if (res !== null) {
            tipoVinculacion = <Array<any>>res;
          }
          this.formInfoExperienciaLaboral.campos[ this.getIndexForm('TipoVinculacion') ].opciones = tipoVinculacion;
        });
  }

  loadOptionsTipoDedicacion(): void {
    let dedicacion: Array<any> = [];
      this.experienciaService.get('tipo_dedicacion/?limit=0')
        .subscribe(res => {
          if (res !== null) {
            dedicacion = <Array<any>>res;
          }
          this.formInfoExperienciaLaboral.campos[ this.getIndexForm('TipoDedicacion') ].opciones = dedicacion;
        });
  }

  searchOrganizacion(data: any): void {
    const nit = typeof data === 'string' ? data : data.data.Nit;
    this.organizacion = new Organizacion();
    this.campusMidService.get('organizacion/identificacion/?id=' + nit + '&tipoid=5')
     .subscribe(res => {
        const init = this.getIndexForm('Nit');
        const inombre = this.getIndexForm('NombreEmpresa');
        const itipo = this.getIndexForm('TipoOrganizacion');
        const idir = this.getIndexForm('Direccion');
        const itel = this.getIndexForm('Telefono');
        const icorreo = this.getIndexForm('Correo');
        const ipais = this.getIndexForm('Pais');
        this.organizacion = new Organizacion();
        if (res !== null) {
          this.organizacion = <Organizacion>res;
        } else {
          this.organizacion.NumeroIdentificacion = nit;
          [this.formInfoExperienciaLaboral.campos[inombre],
          this.formInfoExperienciaLaboral.campos[itipo],
          this.formInfoExperienciaLaboral.campos[idir],
          this.formInfoExperienciaLaboral.campos[icorreo],
          this.formInfoExperienciaLaboral.campos[ipais],
          this.formInfoExperienciaLaboral.campos[itel]]
          .forEach(element => {
            element.valor = null;
          });
        }
        this.formInfoExperienciaLaboral.campos[init].valor = this.organizacion.NumeroIdentificacion;
        this.formInfoExperienciaLaboral.campos[inombre].valor = this.organizacion.Nombre;
        this.formInfoExperienciaLaboral.campos[itipo].opciones.forEach(element => {
          if (this.organizacion.TipoOrganizacion && element.Id === this.organizacion.TipoOrganizacion.Id) {
            this.formInfoExperienciaLaboral.campos[itipo].valor = element;
          }
        });
        if (this.organizacion.Ubicacion) {
          this.organizacion.Ubicacion.forEach(element => {
            // identificadores del tipo de relacion y atributo para formulario
            if (element.AtributoUbicacion.Id === 1 && element.UbicacionEnte.TipoRelacionUbicacionEnte.Id === 3) {
              this.formInfoExperienciaLaboral.campos[idir].valor = element.Valor;
              this.formInfoExperienciaLaboral.campos[ipais].opciones.forEach(e => {
                if ( e.Id === element.UbicacionEnte.Lugar) {
                  this.formInfoExperienciaLaboral.campos[ipais].valor = e;
                }
              });
            }
          });
        } else {
          this.formInfoExperienciaLaboral.campos[idir].valor = null;
          this.formInfoExperienciaLaboral.campos[ipais].valor = null;
        }
        if (this.organizacion.Contacto) {
          this.organizacion.Contacto.forEach(element => {
            if (element.TipoContacto.Id === 1) {
              this.formInfoExperienciaLaboral.campos[itel].valor = element.Valor;
            }
            if (element.TipoContacto.Id === 3) {
              this.formInfoExperienciaLaboral.campos[icorreo].valor = element.Valor;
            }
          });
        } else {
          this.formInfoExperienciaLaboral.campos[itel].valor = null;
          this.formInfoExperienciaLaboral.campos[icorreo].valor = null;
        }
        [this.formInfoExperienciaLaboral.campos[inombre],
        this.formInfoExperienciaLaboral.campos[itipo],
        this.formInfoExperienciaLaboral.campos[idir],
        this.formInfoExperienciaLaboral.campos[icorreo],
        this.formInfoExperienciaLaboral.campos[ipais],
        this.formInfoExperienciaLaboral.campos[itel]]
        .forEach(element => {
          element.deshabilitar = element.valor ? true : false
        });
    });
  }

  createInfoExperienciaLaboral(infoExperienciaLaboral: any): void {
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
          this.info_experiencia_laboral = <InfoExperienciaLaboral>infoExperienciaLaboral;
          this.experienciaService.post('experiencia_laboral', this.info_experiencia_laboral)
            .subscribe(res => {
              const r = <any>res;
              if (r !== null && r.Type !== 'error') {
                this.eventChange.emit(true);
                this.showToast('info', this.translate.instant('GLOBAL.crear'),
                  this.translate.instant('GLOBAL.experiencia_laboral') + ' ' +
                  this.translate.instant('GLOBAL.confirmarCrear'));
                  this.clean = !this.clean;
              }
            });
          }
      });
  }

  addUbicacionOrganizacion(ubicacion: any): void {
    this.campusMidService.post('persona/RegistrarUbicaciones', ubicacion).subscribe(res => {
      const r = res as any;
      if (res !== null && r.Type === 'error') {
        this.showToast('error', 'error',
              'ocurrio un error agregando la ubicación');
      }
    });
  }

  createOrganizacion(org: any, exp: any): void {
    this.campusMidService.post('organizacion', org).subscribe(res => {
      const identificacion = <any>res;
      if (identificacion !== null && identificacion.Type !== 'error') {
        exp.Organizacion = identificacion.Body.Ente.Id;
        const ubicacion = {
          Ente: identificacion.Body.Ente.Id,
          Lugar: org.Pais,
          TipoRelacionUbicacionEnte: 3,
          Atributos: [{
              AtributoUbicacion: 1,
              Valor: org.Direccion,
            }],
        };
        this.addUbicacionOrganizacion(ubicacion);
        if (this.info_experiencia_laboral === undefined) {
          this.createInfoExperienciaLaboral(exp);
        } else {
          this.updateInfoExperienciaLaboral(exp);
        }
      }
    });
  }

  ngOnInit() {
    this.loadInfoExperienciaLaboral();
  }

  validarForm(event) {
    if (event.valid) {
     const experiencia = {
          Persona: this.info_experiencia_laboral_id,
          Actividades: event.data.InfoExperienciaLaboral.Actividades,
          FechaInicio: event.data.InfoExperienciaLaboral.FechaInicio,
          FechaFinalizacion: event.data.InfoExperienciaLaboral.FechaFinalizacion,
          Organizacion: this.organizacion.Ente ? this.organizacion.Ente.Id : null,
          TipoDedicacion: event.data.InfoExperienciaLaboral.TipoDedicacion,
          Cargo: event.data.InfoExperienciaLaboral.Cargo,
          TipoVinculacion: event.data.InfoExperienciaLaboral.TipoVinculacion,
          Soportes: event.data.InfoExperienciaLaboral.Soportes,
      }
      const org = {
        NumeroIdentificacion: event.data.InfoExperienciaLaboral.Nit,
        Direccion: event.data.InfoExperienciaLaboral.Direccion,
        Pais: event.data.InfoExperienciaLaboral.Pais,
        // LugarExpedicion: ,
        Nombre: event.data.InfoExperienciaLaboral.NombreEmpresa,
        TipoOrganizacion: event.data.InfoExperienciaLaboral.TipoOrganizacion,
        TipoIdentificacion: {
          Id: 5,
        },
        Contacto: [],
        // "FechaExpedicion": "string"
      }

      if (event.data.InfoExperienciaLaboral.Telefono) {
        org.Contacto.push({
          TipoContacto: { Id: 1 }, // corresponde al tipo telefono
          Valor: event.data.InfoExperienciaLaboral.Telefono,
        });
      }
      if (event.data.InfoExperienciaLaboral.Correo) {
        org.Contacto.push({
          TipoContacto: { Id: 3 }, // corresponde al tipo correo
          Valor: event.data.InfoExperienciaLaboral.Correo,
        });
      }

      if (this.info_experiencia_laboral === undefined) {
        if (experiencia.Organizacion !== null) {
          this.createInfoExperienciaLaboral(experiencia);
        } else {
          this.createOrganizacion(org, experiencia);
        }
      } else {
        if (this.organizacion.Ente) {
          this.updateInfoExperienciaLaboral(experiencia);
        } else {
          this.createOrganizacion(org, experiencia);
        }
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
