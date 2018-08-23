
import { Metodologia } from './../../../@core/data/models/metodologia';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProgramaAcademicoService } from '../../../@core/data/programa_academico.service';
import { FORM_METODOLOGIA } from './form-metodologia';
import { ToasterService, ToasterConfig, Toast, BodyOutputType } from 'angular2-toaster';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import 'style-loader!angular2-toaster/toaster.css';

@Component({
  selector: 'ngx-crud-metodologia',
  templateUrl: './crud-metodologia.component.html',
  styleUrls: ['./crud-metodologia.component.scss'],
})
export class CrudMetodologiaComponent implements OnInit {
  config: ToasterConfig;
  metodologia_id: number;

  @Input('metodologia_id')
  set name(metodologia_id: number) {
    this.metodologia_id = metodologia_id;
    this.loadMetodologia();
  }

  @Output() eventChange = new EventEmitter();

  info_metodologia: Metodologia;
  formMetodologia: any;
  regMetodologia: any;
  clean: boolean;

  constructor(private translate: TranslateService, private programaAcademicoService: ProgramaAcademicoService, private toasterService: ToasterService) {
    this.formMetodologia = FORM_METODOLOGIA;
    this.construirForm();
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.construirForm();
    });
   }

  construirForm() {
    this.formMetodologia.titulo = this.translate.instant('GLOBAL.metodologia');
    this.formMetodologia.btn = this.translate.instant('GLOBAL.guardar');
    for (let i = 0; i < this.formMetodologia.campos.length; i++) {
      this.formMetodologia.campos[i].label = this.translate.instant('GLOBAL.' + this.formMetodologia.campos[i].label_i18n);
      this.formMetodologia.campos[i].placeholder = this.translate.instant('GLOBAL.placeholder_' + this.formMetodologia.campos[i].label_i18n);
    }
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }


  getIndexForm(nombre: String): number {
    for (let index = 0; index < this.formMetodologia.campos.length; index++) {
      const element = this.formMetodologia.campos[index];
      if (element.nombre === nombre) {
        return index
      }
    }
    return 0;
  }


  public loadMetodologia(): void {
    if (this.metodologia_id !== undefined && this.metodologia_id !== 0) {
      this.programaAcademicoService.get('metodologia/?query=id:' + this.metodologia_id)
        .subscribe(res => {
          if (res !== null) {
            this.info_metodologia = <Metodologia>res[0];
          }
        });
    } else  {
      this.info_metodologia = undefined;
      this.clean = !this.clean;
    }
  }

  updateMetodologia(metodologia: any): void {

    const opt: any = {
      title: 'Update?',
      text: 'Update Metodologia!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
      showCancelButton: true,
    };
    Swal(opt)
    .then((willDelete) => {
      if (willDelete.value) {
        this.info_metodologia = <Metodologia>metodologia;
        this.programaAcademicoService.put('metodologia', this.info_metodologia)
          .subscribe(res => {
            this.loadMetodologia();
            this.eventChange.emit(true);
            this.showToast('info', 'updated', 'Metodologia updated');
          });
      }
    });
  }

  createMetodologia(metodologia: any): void {
    const opt: any = {
      title: 'Create?',
      text: 'Create Metodologia!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
      showCancelButton: true,
    };
    Swal(opt)
    .then((willDelete) => {
      if (willDelete.value) {
        this.info_metodologia = <Metodologia>metodologia;
        this.programaAcademicoService.post('metodologia', this.info_metodologia)
          .subscribe(res => {
            this.info_metodologia = <Metodologia>res;
            this.eventChange.emit(true);
            this.showToast('info', 'created', 'Metodologia created');
          });
      }
    });
  }

  ngOnInit() {
    this.loadMetodologia();
  }

  validarForm(event) {
    if (event.valid) {
      if (this.info_metodologia === undefined) {
        this.createMetodologia(event.data.Metodologia);
      } else {
        this.updateMetodologia(event.data.Metodologia);
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
