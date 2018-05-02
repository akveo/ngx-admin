import { EstadoCivil } from './../../../@core/data/models/estado_civil';
import { Genero } from './../../../@core/data/models/genero';

import { InfoPersona } from './../../../@core/data/models/info_persona';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PersonaService } from '../../../@core/data/persona.service';
import { FORM_INFO_PERSONA } from './form-info_persona';
import { ToasterService, ToasterConfig, Toast, BodyOutputType } from 'angular2-toaster';
import Swal from 'sweetalert2';
import 'style-loader!angular2-toaster/toaster.css';

@Component({
  selector: 'ngx-crud-info-persona',
  templateUrl: './crud-info_persona.component.html',
  styleUrls: ['./crud-info_persona.component.scss'],
})
export class CrudInfoPersonaComponent implements OnInit {
  config: ToasterConfig;
  info_persona_id: number;

  @Input('info_persona_id')
  set name(info_persona_id: number) {
    this.info_persona_id = info_persona_id;
    this.loadInfoPersona();
  }

  @Output() eventChange = new EventEmitter();

  info_info_persona: InfoPersona;
  formInfoPersona: any;
  regInfoPersona: any;
  clean: boolean;

  constructor(private personaService: PersonaService, private toasterService: ToasterService) {
    this.formInfoPersona = FORM_INFO_PERSONA;
    this.loadOptionsEstadoCivil();
    this.loadOptionsGenero();
   }

  loadOptionsEstadoCivil(): void {
    let estadoCivil: Array<any> = [];
      this.personaService.get('estado_civil/?limit=0')
        .subscribe(res => {
          if (res !== null) {
            estadoCivil = <Array<EstadoCivil>>res;
          }
          this.formInfoPersona.campos[ this.getIndexForm('EstadoCivil') ].opciones = estadoCivil;
        });
  }
  loadOptionsGenero(): void {
    let genero: Array<any> = [];
      this.personaService.get('genero/?limit=0')
        .subscribe(res => {
          if (res !== null) {
            genero = <Array<Genero>>res;
          }
          this.formInfoPersona.campos[ this.getIndexForm('Genero') ].opciones = genero;
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
    if (this.info_persona_id !== undefined && this.info_persona_id !== 0) {
      this.personaService.get('info_persona/?query=id:' + this.info_persona_id)
        .subscribe(res => {
          if (res !== null) {
            this.info_info_persona = <InfoPersona>res[0];
          }
        });
    } else  {
      this.info_info_persona = undefined;
      this.clean = !this.clean;
    }
  }

  updateInfoPersona(infoPersona: any): void {

    const opt: any = {
      title: 'Update?',
      text: 'Update InfoPersona!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
      showCancelButton: true,
    };
    Swal(opt)
    .then((willDelete) => {
      if (willDelete.value) {
        this.info_info_persona = <InfoPersona>infoPersona;
        this.personaService.put('info_persona', this.info_info_persona)
          .subscribe(res => {
            this.loadInfoPersona();
            this.eventChange.emit(true);
            this.showToast('info', 'updated', 'InfoPersona updated');
          });
      }
    });
  }

  createInfoPersona(infoPersona: any): void {
    const opt: any = {
      title: 'Create?',
      text: 'Create InfoPersona!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
      showCancelButton: true,
    };
    Swal(opt)
    .then((willDelete) => {
      if (willDelete.value) {
        this.info_info_persona = <InfoPersona>infoPersona;
        this.personaService.post('info_persona', this.info_info_persona)
          .subscribe(res => {
            this.info_info_persona = <InfoPersona>res;
            this.eventChange.emit(true);
            this.showToast('info', 'created', 'InfoPersona created');
          });
      }
    });
  }

  ngOnInit() {
    this.loadInfoPersona();
  }

  validarForm(event) {
    console.info('evento', event)
   /* if (event.valid) {
      if (this.info_info_persona === undefined) {
        this.createInfoPersona(event.data.InfoPersona);
      } else {
        this.updateInfoPersona(event.data.InfoPersona);
      }
    } */
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
