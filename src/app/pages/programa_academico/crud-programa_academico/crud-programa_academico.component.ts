import { Metodologia } from './../../../@core/data/models/metodologia';
import { NivelFormacion } from './../../../@core/data/models/nivel_formacion';
import { Titulacion } from './../../../@core/data/models/titulacion';

import { ProgramaAcademico } from './../../../@core/data/models/programa_academico';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProgramaAcademicoService } from '../../../@core/data/programa_academico.service';
import { FORM_PROGRAMA_ACADEMICO } from './form-programa_academico';
import { ToasterService, ToasterConfig, Toast, BodyOutputType } from 'angular2-toaster';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import 'style-loader!angular2-toaster/toaster.css';

@Component({
  selector: 'ngx-crud-programa-academico',
  templateUrl: './crud-programa_academico.component.html',
  styleUrls: ['./crud-programa_academico.component.scss'],
})
export class CrudProgramaAcademicoComponent implements OnInit {
  config: ToasterConfig;
  programa_academico_id: number;

  @Input('programa_academico_id')
  set name(programa_academico_id: number) {
    this.programa_academico_id = programa_academico_id;
    this.loadProgramaAcademico();
  }

  @Output() eventChange = new EventEmitter();

  info_programa_academico: ProgramaAcademico;
  formProgramaAcademico: any;
  regProgramaAcademico: any;
  clean: boolean;

  constructor(private translate: TranslateService, private programaAcademicoService: ProgramaAcademicoService, private toasterService: ToasterService) {
    this.formProgramaAcademico = FORM_PROGRAMA_ACADEMICO;
    this.construirForm();
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.construirForm();
    });
    this.loadOptionsMetodologia();
    this.loadOptionsNivelFormacion();
    this.loadOptionsTitulacion();
   }

  construirForm() {
    this.formProgramaAcademico.titulo = this.translate.instant('GLOBAL.programa_academico');
    this.formProgramaAcademico.btn = this.translate.instant('GLOBAL.guardar');
    for (let i = 0; i < this.formProgramaAcademico.campos.length; i++) {
      this.formProgramaAcademico.campos[i].label = this.translate.instant('GLOBAL.' + this.formProgramaAcademico.campos[i].label_i18n);
      this.formProgramaAcademico.campos[i].placeholder = this.translate.instant('GLOBAL.placeholder_' + this.formProgramaAcademico.campos[i].label_i18n);
    }
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }

  loadOptionsMetodologia(): void {
    let metodologia: Array<any> = [];
      this.programaAcademicoService.get('metodologia/?limit=0')
        .subscribe(res => {
          if (res !== null) {
            metodologia = <Array<Metodologia>>res;
          }
          this.formProgramaAcademico.campos[ this.getIndexForm('Metodologia') ].opciones = metodologia;
        });
  }
  loadOptionsNivelFormacion(): void {
    let nivelFormacion: Array<any> = [];
      this.programaAcademicoService.get('nivel_formacion/?limit=0')
        .subscribe(res => {
          if (res !== null) {
            nivelFormacion = <Array<NivelFormacion>>res;
          }
          this.formProgramaAcademico.campos[ this.getIndexForm('NivelFormacion') ].opciones = nivelFormacion;
        });
  }
  loadOptionsTitulacion(): void {
    let titulacion: Array<any> = [];
      this.programaAcademicoService.get('titulacion/?limit=0')
        .subscribe(res => {
          if (res !== null) {
            titulacion = <Array<Titulacion>>res;
          }
          this.formProgramaAcademico.campos[ this.getIndexForm('Titulacion') ].opciones = titulacion;
        });
  }

  getIndexForm(nombre: String): number {
    for (let index = 0; index < this.formProgramaAcademico.campos.length; index++) {
      const element = this.formProgramaAcademico.campos[index];
      if (element.nombre === nombre) {
        return index
      }
    }
    return 0;
  }


  public loadProgramaAcademico(): void {
    if (this.programa_academico_id !== undefined && this.programa_academico_id !== 0) {
      this.programaAcademicoService.get('programa_academico/?query=id:' + this.programa_academico_id)
        .subscribe(res => {
          if (res !== null) {
            this.info_programa_academico = <ProgramaAcademico>res[0];
          }
        });
    } else  {
      this.info_programa_academico = undefined;
      this.clean = !this.clean;
    }
  }

  updateProgramaAcademico(programaAcademico: any): void {

    const opt: any = {
      title: 'Update?',
      text: 'Update ProgramaAcademico!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
      showCancelButton: true,
    };
    Swal(opt)
    .then((willDelete) => {
      if (willDelete.value) {
        this.info_programa_academico = <ProgramaAcademico>programaAcademico;
        this.programaAcademicoService.put('programa_academico', this.info_programa_academico)
          .subscribe(res => {
            this.loadProgramaAcademico();
            this.eventChange.emit(true);
            this.showToast('info', 'updated', 'ProgramaAcademico updated');
          });
      }
    });
  }

  createProgramaAcademico(programaAcademico: any): void {
    const opt: any = {
      title: 'Create?',
      text: 'Create ProgramaAcademico!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
      showCancelButton: true,
    };
    Swal(opt)
    .then((willDelete) => {
      if (willDelete.value) {
        this.info_programa_academico = <ProgramaAcademico>programaAcademico;
        this.programaAcademicoService.post('programa_academico', this.info_programa_academico)
          .subscribe(res => {
            this.info_programa_academico = <ProgramaAcademico>res;
            this.eventChange.emit(true);
            this.showToast('info', 'created', 'ProgramaAcademico created');
          });
      }
    });
  }

  ngOnInit() {
    this.loadProgramaAcademico();
  }

  validarForm(event) {
    if (event.valid) {
      if (this.info_programa_academico === undefined) {
        this.createProgramaAcademico(event.data.ProgramaAcademico);
      } else {
        this.updateProgramaAcademico(event.data.ProgramaAcademico);
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
