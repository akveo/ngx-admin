import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { IdiomaService } from '../../../@core/data/idioma.service';
import { ToasterService, ToasterConfig, Toast, BodyOutputType } from 'angular2-toaster';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { UserService } from '../../../@core/data/users.service';
import { HttpErrorResponse } from '@angular/common/http';
import Swal from 'sweetalert2';
import 'style-loader!angular2-toaster/toaster.css';

@Component({
    selector: 'ngx-list-idiomas',
    templateUrl: './list-idiomas.component.html',
    styleUrls: ['./list-idiomas.component.scss'],
    })
export class ListIdiomasComponent implements OnInit {
    uid: number;
    cambiotab: boolean = false;
    config: ToasterConfig;
    settings: any;
    source: LocalDataSource = new LocalDataSource();

    constructor(private translate: TranslateService,
        private idiomaService: IdiomaService,
        private userService: UserService,
        private toasterService: ToasterService) {
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
                Idioma: {
                    title: this.translate.instant('GLOBAL.idioma'),
                    valuePrepareFunction: (value) => {
                        return value.Nombre;
                    },
                },
                NivelEscribe: {
                    title: this.translate.instant('GLOBAL.nivel_escribe'),
                    valuePrepareFunction: (value) => {
                        return value.Nombre;
                    },
                },
                NivelEscucha: {
                    title: this.translate.instant('GLOBAL.nivel_escucha'),
                    valuePrepareFunction: (value) => {
                        return value.Nombre;
                    },
                },
                NivelHabla: {
                    title: this.translate.instant('GLOBAL.nivel_habla'),
                    valuePrepareFunction: (value) => {
                        return value.Nombre;
                    },
                },
                NivelLee: {
                    title: this.translate.instant('GLOBAL.nivel_lee'),
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
        this.idiomaService.get('conocimiento_idioma/?query=persona:' + this.userService.getEnte())
        .subscribe(res => {
            if (res !== null) {
                const data = <Array<any>>res;
                this.source.load(data);
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
    }

    onCreate(event): void {
        this.uid = 0;
    }

    itemselec(event): void {
    }

    onChange(event) {
      if (event) {
        this.loadData();
      }
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
            this.idiomaService.delete('conocimiento_idioma/', event.data).subscribe(res => {
              if (res !== null) {
                this.loadData();
                this.showToast('info', this.translate.instant('GLOBAL.eliminar'),
                this.translate.instant('GLOBAL.idioma') + ' ' +
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
