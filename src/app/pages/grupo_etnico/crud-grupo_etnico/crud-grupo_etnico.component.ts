
import { GrupoEtnico } from './../../../@core/data/models/grupo_etnico';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PersonaService } from '../../../@core/data/persona.service';
import { FORM_GRUPO_ETNICO } from './form-grupo_etnico';
import { ToasterService, ToasterConfig, Toast, BodyOutputType } from 'angular2-toaster';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import 'style-loader!angular2-toaster/toaster.css';

@Component({
  selector: 'ngx-crud-grupo-etnico',
  templateUrl: './crud-grupo_etnico.component.html',
  styleUrls: ['./crud-grupo_etnico.component.scss'],
})
export class CrudGrupoEtnicoComponent implements OnInit {
  config: ToasterConfig;
  grupo_etnico_id: number;

  @Input('grupo_etnico_id')
  set name(grupo_etnico_id: number) {
    this.grupo_etnico_id = grupo_etnico_id;
    this.loadGrupoEtnico();
  }

  @Output() eventChange = new EventEmitter();

  info_grupo_etnico: GrupoEtnico;
  formGrupoEtnico: any;
  regGrupoEtnico: any;
  clean: boolean;

  constructor(private translate: TranslateService, private personaService: PersonaService, private toasterService: ToasterService) {
    this.formGrupoEtnico = FORM_GRUPO_ETNICO;
    this.construirForm();
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.construirForm();
    });
   }

  construirForm() {
    this.formGrupoEtnico.titulo = this.translate.instant('GLOBAL.grupo_etnico');
    this.formGrupoEtnico.btn = this.translate.instant('GLOBAL.guardar');
    for (let i = 0; i < this.formGrupoEtnico.campos.length; i++) {
      this.formGrupoEtnico.campos[i].label = this.translate.instant('GLOBAL.' + this.formGrupoEtnico.campos[i].label_i18n);
      this.formGrupoEtnico.campos[i].placeholder = this.translate.instant('GLOBAL.placeholder_' + this.formGrupoEtnico.campos[i].label_i18n);
    }
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }


  getIndexForm(nombre: String): number {
    for (let index = 0; index < this.formGrupoEtnico.campos.length; index++) {
      const element = this.formGrupoEtnico.campos[index];
      if (element.nombre === nombre) {
        return index
      }
    }
    return 0;
  }


  public loadGrupoEtnico(): void {
    if (this.grupo_etnico_id !== undefined && this.grupo_etnico_id !== 0) {
      this.personaService.get('grupo_etnico/?query=id:' + this.grupo_etnico_id)
        .subscribe(res => {
          if (res !== null) {
            this.info_grupo_etnico = <GrupoEtnico>res[0];
          }
        });
    } else  {
      this.info_grupo_etnico = undefined;
      this.clean = !this.clean;
    }
  }

  updateGrupoEtnico(grupoEtnico: any): void {

    const opt: any = {
      title: 'Update?',
      text: 'Update GrupoEtnico!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
      showCancelButton: true,
    };
    Swal(opt)
    .then((willDelete) => {
      if (willDelete.value) {
        this.info_grupo_etnico = <GrupoEtnico>grupoEtnico;
        this.personaService.put('grupo_etnico', this.info_grupo_etnico)
          .subscribe(res => {
            this.loadGrupoEtnico();
            this.eventChange.emit(true);
            this.showToast('info', 'updated', 'GrupoEtnico updated');
          });
      }
    });
  }

  createGrupoEtnico(grupoEtnico: any): void {
    const opt: any = {
      title: 'Create?',
      text: 'Create GrupoEtnico!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
      showCancelButton: true,
    };
    Swal(opt)
    .then((willDelete) => {
      if (willDelete.value) {
        this.info_grupo_etnico = <GrupoEtnico>grupoEtnico;
        this.personaService.post('grupo_etnico', this.info_grupo_etnico)
          .subscribe(res => {
            this.info_grupo_etnico = <GrupoEtnico>res;
            this.eventChange.emit(true);
            this.showToast('info', 'created', 'GrupoEtnico created');
          });
      }
    });
  }

  ngOnInit() {
    this.loadGrupoEtnico();
  }

  validarForm(event) {
    if (event.valid) {
      if (this.info_grupo_etnico === undefined) {
        this.createGrupoEtnico(event.data.GrupoEtnico);
      } else {
        this.updateGrupoEtnico(event.data.GrupoEtnico);
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
