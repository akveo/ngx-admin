import { ProgramaAcademico } from './../../../@core/data/models/programa_academico';

import { Enfasis } from './../../../@core/data/models/enfasis';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProgramaAcademicoService } from '../../../@core/data/programa_academico.service';
import { FORM_ENFASIS } from './form-enfasis';
import { ToasterService, ToasterConfig, Toast, BodyOutputType } from 'angular2-toaster';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import 'style-loader!angular2-toaster/toaster.css';

@Component({
  selector: 'ngx-crud-enfasis',
  templateUrl: './crud-enfasis.component.html',
  styleUrls: ['./crud-enfasis.component.scss'],
})
export class CrudEnfasisComponent implements OnInit {
  config: ToasterConfig;
  enfasis_id: number;

  @Input('enfasis_id')
  set name(enfasis_id: number) {
    this.enfasis_id = enfasis_id;
    this.loadEnfasis();
  }

  @Output() eventChange = new EventEmitter();

  info_enfasis: Enfasis;
  formEnfasis: any;
  regEnfasis: any;
  clean: boolean;

  constructor(private translate: TranslateService, private programaAcademicoService: ProgramaAcademicoService, private toasterService: ToasterService) {
    this.formEnfasis = FORM_ENFASIS;
    this.construirForm();
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.construirForm();
    });
    this.loadOptionsProgramaAcademico();
   }

  construirForm() {
    this.formEnfasis.titulo = this.translate.instant('GLOBAL.enfasis');
    this.formEnfasis.btn = this.translate.instant('GLOBAL.guardar');
    for (let i = 0; i < this.formEnfasis.campos.length; i++) {
      this.formEnfasis.campos[i].label = this.translate.instant('GLOBAL.' + this.formEnfasis.campos[i].label_i18n);
      this.formEnfasis.campos[i].placeholder = this.translate.instant('GLOBAL.placeholder_' + this.formEnfasis.campos[i].label_i18n);
    }
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }

  loadOptionsProgramaAcademico(): void {
    let programaAcademico: Array<any> = [];
      this.programaAcademicoService.get('programa_academico/?limit=0')
        .subscribe(res => {
          if (res !== null) {
            programaAcademico = <Array<ProgramaAcademico>>res;
          }
          this.formEnfasis.campos[ this.getIndexForm('ProgramaAcademico') ].opciones = programaAcademico;
        });
  }

  getIndexForm(nombre: String): number {
    for (let index = 0; index < this.formEnfasis.campos.length; index++) {
      const element = this.formEnfasis.campos[index];
      if (element.nombre === nombre) {
        return index
      }
    }
    return 0;
  }


  public loadEnfasis(): void {
    if (this.enfasis_id !== undefined && this.enfasis_id !== 0) {
      this.programaAcademicoService.get('enfasis/?query=id:' + this.enfasis_id)
        .subscribe(res => {
          if (res !== null) {
            this.info_enfasis = <Enfasis>res[0];
          }
        });
    } else  {
      this.info_enfasis = undefined;
      this.clean = !this.clean;
    }
  }

  updateEnfasis(enfasis: any): void {

    const opt: any = {
      title: 'Update?',
      text: 'Update Enfasis!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
      showCancelButton: true,
    };
    Swal(opt)
    .then((willDelete) => {
      if (willDelete.value) {
        this.info_enfasis = <Enfasis>enfasis;
        this.programaAcademicoService.put('enfasis', this.info_enfasis)
          .subscribe(res => {
            this.loadEnfasis();
            this.eventChange.emit(true);
            this.showToast('info', 'updated', 'Enfasis updated');
          });
      }
    });
  }

  createEnfasis(enfasis: any): void {
    const opt: any = {
      title: 'Create?',
      text: 'Create Enfasis!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
      showCancelButton: true,
    };
    Swal(opt)
    .then((willDelete) => {
      if (willDelete.value) {
        this.info_enfasis = <Enfasis>enfasis;
        this.programaAcademicoService.post('enfasis', this.info_enfasis)
          .subscribe(res => {
            this.info_enfasis = <Enfasis>res;
            this.eventChange.emit(true);
            this.showToast('info', 'created', 'Enfasis created');
          });
      }
    });
  }

  ngOnInit() {
    this.loadEnfasis();
  }

  validarForm(event) {
    if (event.valid) {
      if (this.info_enfasis === undefined) {
        this.createEnfasis(event.data.Enfasis);
      } else {
        this.updateEnfasis(event.data.Enfasis);
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
