import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { PersonaService } from '../../../@core/data/persona.service';
import { ToasterService, ToasterConfig, Toast, BodyOutputType } from 'angular2-toaster';
import Swal from 'sweetalert2';
import 'style-loader!angular2-toaster/toaster.css';

@Component({
  selector: 'ngx-list-info-persona',
  templateUrl: './list-info_persona.component.html',
  styleUrls: ['./list-info_persona.component.scss'],
  })
export class ListInfoPersonaComponent implements OnInit {
  uid: number;
  cambiotab: boolean = false;
  config: ToasterConfig;
  settings = {
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
      PrimerNombre: {
        title: 'PrimerNombre',
        // type: 'string;',
        valuePrepareFunction: (value) => {
          return value;
        },
      },
      SegundoNombre: {
        title: 'SegundoNombre',
        // type: 'string;',
        valuePrepareFunction: (value) => {
          return value;
        },
      },
      PrimerApellido: {
        title: 'PrimerApellido',
        // type: 'string;',
        valuePrepareFunction: (value) => {
          return value;
        },
      },
      SegundoApellido: {
        title: 'SegundoApellido',
        // type: 'string;',
        valuePrepareFunction: (value) => {
          return value;
        },
      },
      FechaNacimiento: {
        title: 'FechaNacimiento',
        // type: 'Date;',
        valuePrepareFunction: (value) => {
          return value;
        },
      },
      Foto: {
        title: 'Foto',
        // type: 'string;',
        valuePrepareFunction: (value) => {
          return value;
        },
      },
      EstadoCivil: {
        title: 'EstadoCivil',
        // type: 'estado_civil;',
        valuePrepareFunction: (value) => {
          return value;
        },
      },
      Genero: {
        title: 'Genero',
        // type: 'genero;',
        valuePrepareFunction: (value) => {
          return value;
        },
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private personaService: PersonaService, private toasterService: ToasterService) {
    this.loadData();
  }

  loadData(): void {
    this.personaService.get('info_persona/?limit=0').subscribe(res => {
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
      text: 'Delete InfoPersona!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
      showCancelButton: true,
    };
    Swal(opt)
    .then((willDelete) => {

      if (willDelete.value) {
        this.personaService.delete('info_persona/', event.data).subscribe(res => {
          if (res !== null) {
            this.loadData();
            this.showToast('info', 'deleted', 'InfoPersona deleted');
            }
         });
      }
    });
  }

  activetab(): void {
    this.cambiotab = !this.cambiotab;
  }

  selectTab(event): void {
    if (event.tabTitle === 'Lista') {
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
