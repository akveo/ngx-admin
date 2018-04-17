import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableService } from '../../../../@core/data/smart-table.service';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

@Component({
  selector: 'ngx-formacion-academica',
  templateUrl: './formacion-academica.component.html',
  styleUrls: ['./formacion-academica.component.scss'],
})
export class FormacionAcademicaComponent implements OnInit {
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
    columns: {
      nivelformacion: {
        title: this.translate.instant('FORMACION_ACADEMICA.NIVEL_FORMACION'),
        type: 'string',
      },
      anogrado: {
        title: this.translate.instant('FORMACION_ACADEMICA.ANIO_FIN'),
        type: 'date',
      },
      titulo: {
        title: this.translate.instant('FORMACION_ACADEMICA.TITULO_OBTENIDO'),
        type: 'string',
      },
      universidad: {
        title: this.translate.instant('FORMACION_ACADEMICA.NOMBRE_UNIVERSIDAD'),
        type: 'string',
      },
      acciones: {
        title: this.translate.instant('FORMACION_ACADEMICA.ELIMINAR'),
        type: 'string',
      },
    },
  };
  source: LocalDataSource = new LocalDataSource();
  constructor(private service: SmartTableService, private translate: TranslateService) {
    this.translate = translate;
    const data = this.service.getData();
    this.source.load(data);
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.settings = Object.assign({},
        {
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
          columns: {
            nivelformacion: {
              title: this.translate.instant('FORMACION_ACADEMICA.NIVEL_FORMACION'),
              type: 'string',
            },
            anogrado: {
              title: this.translate.instant('FORMACION_ACADEMICA.ANIO_FIN'),
              type: 'date',
            },
            titulo: {
              title: this.translate.instant('FORMACION_ACADEMICA.TITULO_OBTENIDO'),
              type: 'string',
            },
            universidad: {
              title: this.translate.instant('FORMACION_ACADEMICA.NOMBRE_UNIVERSIDAD'),
              type: 'string',
            },
            acciones: {
              title: this.translate.instant('FORMACION_ACADEMICA.ELIMINAR'),
              type: 'string',
            },
          },
        },
      );
      this.source.refresh();
    });
  }
  onDeleteConfirm(event): void {
    if (window.confirm(this.translate.instant('FORMACION_ACADEMICA.MENSAJE'))) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
  useLanguage(language: string) {
    this.translate.use(language);
  }
  ngOnInit() {
  }
}
