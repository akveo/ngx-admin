import { OrganizacionService } from './../../../@core/data/organizacion.service';
import { Component, OnInit, Input } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { ToasterService, ToasterConfig, Toast, BodyOutputType } from 'angular2-toaster';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import 'style-loader!angular2-toaster/toaster.css';
import { ExperienciaService } from '../../../@core/data/experiencia.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'ngx-list-experiencia-laboral',
  templateUrl: './list-experiencia_laboral.component.html',
  styleUrls: ['./list-experiencia_laboral.component.scss'],
})
export class ListExperienciaLaboralComponent implements OnInit {
  uid: number;
  eid: number;
  cambiotab: boolean = false;
  config: ToasterConfig;
  settings: any;
  source: LocalDataSource = new LocalDataSource();
  data: Array<any>;
  crud = false;

  @Input('ente_id')
  set name(ente_id: number) {
    this.eid = ente_id;
    this.loadData();
  }

  constructor(private translate: TranslateService, private toasterService: ToasterService,
    private experienciaService: ExperienciaService, private organizacionService: OrganizacionService) {
    this.loadData();
    this.cargarCampos();
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.cargarCampos();
    });
  }

  cargarCampos() {
    this.settings = {
      add: {
        addButtonContent: '<i class="nb-plus"></i>',
        createButtonContent: '<i class="nb-checkmark"></i>',
        cancelButtonContent: '<i class="nb-close"></i>',
      },
      edit: {
        editButtonContent: '<i class="nb-edit"></i>',
        saveButtonContent: '<i class="nb-checkmark"></i>',
        cancelButtonContent: '<i class="nb-close"></i>',
      },
      delete: {
        deleteButtonContent: '<i class="nb-trash"></i>',
        confirmDelete: true,
      },
      mode: 'external',
      columns: {
        Organizacion: {
          title: this.translate.instant('GLOBAL.nombre_empresa'),
          valuePrepareFunction: (value) => {
            return value.Nombre;
          },
        },
        FechaInicio: {
          title: this.translate.instant('GLOBAL.fecha_inicio'),
          valuePrepareFunction: (value) => {
            return value;
          },
        },
        FechaFinalizacion: {
          title: this.translate.instant('GLOBAL.fecha_fin'),
          valuePrepareFunction: (value) => {
            return value;
          },
        },
        Cargo: {
          title: this.translate.instant('GLOBAL.cargo'),
          valuePrepareFunction: (value) => {
            return value.Nombre;
          },
        },
      },
    };
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }

  loadData(): void {
     this.experienciaService.get('experiencia_laboral/?query=Persona:' + this.eid).subscribe(res => {
      if (res !== null) {
        this.data = <Array<any>>res;
        this.data.forEach(element => {
          this.organizacionService.get('organizacion/?query=Ente:' + element.Organizacion).subscribe(r => {
            if (res !== null) {
              element.Organizacion = r[0];
            }
            this.source.load(this.data);
          },
          (error: HttpErrorResponse) => {
            Swal({
              type: 'error',
              title: error.status + '',
              text: this.translate.instant('ERROR.' + error.status),
              confirmButtonText: this.translate.instant('GLOBAL.aceptar'),
            });
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
  }

  ngOnInit() {
  }

    onEdit(event): void {
    this.uid = event.data.Id;
    this.crud = true;
  }

  onCreate(event): void {
    this.uid = 0;
    this.crud = true;
  }

  selectTab(event): void {
    if (event.tabTitle === this.translate.instant('GLOBAL.lista')) {
      this.cambiotab = false;
    } else {
      this.cambiotab = true;
    }
  }

  onChange(event) {
    if (event) {
      this.loadData();
      this.cambiotab = !this.cambiotab;
    }
  }

  itemselec(event): void {
  }

  onDelete(event): void {
    const opt: any = {
      title: this.translate.instant('GLOBAL.eliminar'),
      text: this.translate.instant('GLOBAL.eliminar') + '?',
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
           this.experienciaService.delete('experiencia_laboral', event.data).subscribe(res => {
            if (res !== null) {
              this.loadData();
              this.showToast('info', this.translate.instant('GLOBAL.eliminar'),
              this.translate.instant('GLOBAL.experiencia_laboral') + ' ' +
              this.translate.instant('GLOBAL.confirmarEliminar'));
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
    });
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
