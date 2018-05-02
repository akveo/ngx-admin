import { Genero } from './../../../@core/data/models/genero';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PersonaService } from '../../../@core/data/persona.service';
import { FORM_GENERO } from './form-genero';
import { ToasterService, ToasterConfig, Toast, BodyOutputType } from 'angular2-toaster';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import 'style-loader!angular2-toaster/toaster.css';

@Component({
  selector: 'ngx-crud-genero',
  templateUrl: './crud-genero.component.html',
  styleUrls: ['./crud-genero.component.scss'],
})
export class CrudGeneroComponent implements OnInit {
  config: ToasterConfig;
  genero_id: number;

  @Input('genero_id')
  set name(genero_id: number) {
    this.genero_id = genero_id;
    this.loadGenero();
  }

  @Output() eventChange = new EventEmitter();

  info_genero: Genero;
  formGenero: any;
  regGenero: any;
  clean: boolean;
  formAux: any;

  constructor(private translate: TranslateService, private personaService: PersonaService, private toasterService: ToasterService) {
    this.translate = translate;
    this.construirForm();
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.construirForm();
    });
  }

  construirForm() {
    this.formAux = FORM_GENERO;
    // console.log(this.formAux);
    this.formAux.titulo = this.translate.instant('FORM_GENERO.Genero');
    this.formAux.btn = this.translate.instant('FORM_GENERO.Guardar');
    for (let i = 0; i < this.formAux.campos.length; i++) {
      if (this.formAux.campos[i].requerido) {
        this.formAux.campos[i].label = '* ' + this.translate.instant('FORM_GENERO.' + this.formAux.campos[i].nombre);
      }else {
        this.formAux.campos[i].label = this.translate.instant('FORM_GENERO.' + this.formAux.campos[i].nombre);
      }
      this.formAux.campos[i].placeholder = this.translate.instant('FORM_GENERO.Place' + this.formAux.campos[i].nombre);
    }
    this.formGenero = this.formAux;
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }

  getIndexForm(nombre: String): number {
    for (let index = 0; index < this.formGenero.campos.length; index++) {
      const element = this.formGenero.campos[index];
      if (element.nombre === nombre) {
        return index
      }
    }
    return 0;
  }


  public loadGenero(): void {
    if (this.genero_id !== undefined && this.genero_id !== 0) {
      this.personaService.get('genero/?query=id:' + this.genero_id)
        .subscribe(res => {
          if (res !== null) {
            this.info_genero = <Genero>res[0];
          }
        });
    } else  {
      this.info_genero = undefined;
      this.clean = !this.clean;
    }
  }

  updateGenero(genero: any): void {

    const opt: any = {
      title: 'Update?',
      text: 'Update Genero!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
      showCancelButton: true,
    };
    Swal(opt)
    .then((willDelete) => {
      if (willDelete.value) {
        this.info_genero = <Genero>genero;
        this.personaService.put('genero', this.info_genero)
          .subscribe(res => {
            this.loadGenero();
            this.eventChange.emit(true);
            this.showToast('info', 'updated', 'Genero updated');
          });
      }
    });
  }

  createGenero(genero: any): void {
    const opt: any = {
      title: 'Create?',
      text: 'Create Genero!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
      showCancelButton: true,
    };
    Swal(opt)
    .then((willDelete) => {
      if (willDelete.value) {
        this.info_genero = <Genero>genero;
        this.personaService.post('genero', this.info_genero)
          .subscribe(res => {
            this.info_genero = <Genero>res;
            this.eventChange.emit(true);
            this.showToast('info', 'created', 'Genero created');
          });
      }
    });
  }

  ngOnInit() {
    this.loadGenero();
  }

  validarForm(event) {
    if (event.valid) {
      if (this.info_genero === undefined) {
        this.createGenero(event.data.Genero);
      } else {
        this.updateGenero(event.data.Genero);
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
