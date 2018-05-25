
import { Persona } from './../../../@core/data/models/persona';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PersonaService } from '../../../@core/data/persona.service';
import { FORM_PERSONA } from './form-persona';
import { ToasterService, ToasterConfig, Toast, BodyOutputType } from 'angular2-toaster';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import 'style-loader!angular2-toaster/toaster.css';

@Component({
  selector: 'ngx-crud-persona',
  templateUrl: './crud-persona.component.html',
  styleUrls: ['./crud-persona.component.scss'],
})
export class CrudPersonaComponent implements OnInit {

  filesUp: any;
  uidFile: any;
  config: ToasterConfig;
  persona_id: number;

  @Input('persona_id')
  set name(persona_id: number) {
    this.persona_id = persona_id;
    this.loadPersona();
  }

  @Output() eventChange = new EventEmitter();

  info_persona: Persona;
  formPersona: any;
  regPersona: any;
  clean: boolean;

  constructor(private translate: TranslateService, private personaService: PersonaService, private toasterService: ToasterService) {
    this.formPersona = FORM_PERSONA;
    this.construirForm();
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.construirForm();
    });
  }

  construirForm() {
    this.formPersona.titulo = this.translate.instant('GLOBAL.persona');
    this.formPersona.btn = this.translate.instant('GLOBAL.guardar');
    for (let i = 0; i < this.formPersona.campos.length; i++) {
      this.formPersona.campos[i].label = this.translate.instant('GLOBAL.' + this.formPersona.campos[i].label_i18n);
      this.formPersona.campos[i].placeholder = this.translate.instant('GLOBAL.placeholder_' + this.formPersona.campos[i].label_i18n);
    }
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }


  getIndexForm(nombre: String): number {
    for (let index = 0; index < this.formPersona.campos.length; index++) {
      const element = this.formPersona.campos[index];
      if (element.nombre === nombre) {
        return index
      }
    }
    return 0;
  }


  public loadPersona(): void {
    if (this.persona_id !== undefined && this.persona_id !== 0) {
      this.personaService.get('persona/?query=id:' + this.persona_id)
        .subscribe(res => {
          if (res !== null) {
            this.info_persona = <Persona>res[0];
          }
        });
    } else {
      this.info_persona = undefined;
      this.clean = !this.clean;
    }
  }

  updatePersona(persona: any): void {

    const opt: any = {
      title: 'Update?',
      text: 'Update Persona!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
      showCancelButton: true,
    };
    Swal(opt)
      .then((willDelete) => {
        if (willDelete.value) {
          this.info_persona = <Persona>persona;
          this.personaService.put('persona', this.info_persona)
            .subscribe(res => {
              this.loadPersona();
              this.eventChange.emit(true);
              this.showToast('info', 'updated', 'Persona updated');
            });
        }
      });
  }

  createPersona(persona: any): void {
    const opt: any = {
      title: 'Create?',
      text: 'Create Persona!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
      showCancelButton: true,
    };
    Swal(opt)
      .then((willDelete) => {
        if (willDelete.value) {
          this.info_persona = <Persona>persona;
          this.personaService.post('persona', this.info_persona)
            .subscribe(res => {
              this.info_persona = <Persona>res;
              this.eventChange.emit(true);
              this.showToast('info', 'created', 'Persona created');
            });
        }
      });
  }

  ngOnInit() {
    this.loadPersona();
  }

  guardarFileService(event) {
    console.info('file', event);
    this.uidFile = event.uid;
  }
  getUrlFile(event) {
    console.info('url', event);
  }
  validarForm(event) {
    if (event.valid) {
      if (this.info_persona === undefined) {
        this.createPersona(event.data.Persona);
      } else {
        this.updatePersona(event.data.Persona);
      }
      this.filesUp = event.files;
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
