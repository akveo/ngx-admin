import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { UbicacionesService } from '../../../@core/data/ubicaciones.service';
import { ToasterService, ToasterConfig, Toast, BodyOutputType } from 'angular2-toaster';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import 'style-loader!angular2-toaster/toaster.css';

@Component({
  selector: 'ngx-list-lugar-ubicacion',
  templateUrl: './list-lugar_ubicacion.component.html',
  styleUrls: ['./list-lugar_ubicacion.component.scss'],
  })
export class ListLugarUbicacionComponent implements OnInit {
  uid: number;
  cambiotab: boolean = false;
  config: ToasterConfig;
  settings: any;

  source: LocalDataSource = new LocalDataSource();

  constructor(private translate: TranslateService, private ubicacionesService: UbicacionesService, private toasterService: ToasterService) {
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
        Id: {
          title: this.translate.instant('GLOBAL.id'),
          // type: 'number;',
          valuePrepareFunction: (value) => {
            return value;
          },
        },
        Lugar: {
          title: this.translate.instant('GLOBAL.lugar'),
          // type: 'lugar;',
          valuePrepareFunction: (value) => {
            return value;
          },
        },
        Direccion: {
          title: this.translate.instant('GLOBAL.direccion'),
          // type: 'string;',
          valuePrepareFunction: (value) => {
            return value;
          },
        },
        CodigoPostal: {
          title: this.translate.instant('GLOBAL.codigo_postal'),
          // type: 'string;',
          valuePrepareFunction: (value) => {
            return value;
          },
        },
        Estrato: {
          title: this.translate.instant('GLOBAL.estrato'),
          // type: 'number;',
          valuePrepareFunction: (value) => {
            return value;
          },
        },
      },
    };
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }

  loadData(): void {
    this.ubicacionesService.get('lugar_ubicacion/?limit=0').subscribe(res => {
      if (res !== null) {
        const data = <Array<any>>res;
        this.source.load(data);
          }
    });
  }

  ngOnInit() {
  }

  onEdit(event): void {
    this.uid = event.data.Id;
    this.activetab();
  }

  onCreate(event): void {
    this.uid = 0;
    this.activetab();
  }

  onDelete(event): void {
    const opt: any = {
      title: 'Deleting?',
      text: 'Delete LugarUbicacion!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
      showCancelButton: true,
    };
    Swal(opt)
    .then((willDelete) => {

      if (willDelete.value) {
        this.ubicacionesService.delete('lugar_ubicacion/', event.data).subscribe(res => {
          if (res !== null) {
            this.loadData();
            this.showToast('info', 'deleted', 'LugarUbicacion deleted');
            }
         });
      }
    });
  }

  activetab(): void {
    this.cambiotab = !this.cambiotab;
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
    // console.log("afssaf");
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
