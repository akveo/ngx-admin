import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableService } from '../../../../@core/data/smart-table.service';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

@Component({
  selector: 'ngx-formacion-laboral',
  templateUrl: './formacion-laboral.component.html',
  styleUrls: ['./formacion-laboral.component.scss'],
})
export class FormacionLaboralComponent implements OnInit {
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
      empresa: {
        title: this.translate.instant('FORMACION_LABORAL.EMPRESA'),
        type: 'string',
      },
      anoinicio: {
        title: this.translate.instant('FORMACION_LABORAL.ANIO_INICIO'),
        type: 'date',
      },
      anofin: {
        title: this.translate.instant('FORMACION_LABORAL.ANIO_FIN'),
        type: 'date',
      },
      cargo: {
        title: this.translate.instant('FORMACION_LABORAL.CARGO'),
        type: 'string',
      },
      acciones: {
        title: this.translate.instant('FORMACION_LABORAL.ELIMINAR'),
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
            empresa: {
              title: this.translate.instant('FORMACION_LABORAL.EMPRESA'),
              type: 'string',
            },
            anoinicio: {
              title: this.translate.instant('FORMACION_LABORAL.ANIO_INICIO'),
              type: 'date',
            },
            anofin: {
              title: this.translate.instant('FORMACION_LABORAL.ANIO_FIN'),
              type: 'date',
            },
            cargo: {
              title: this.translate.instant('FORMACION_LABORAL.CARGO'),
              type: 'string',
            },
            acciones: {
              title: this.translate.instant('FORMACION_LABORAL.ELIMINAR'),
              type: 'string',
            },
          },
        },
      );
      this.source.refresh();
    });
  }
  onDeleteConfirm(event): void {
    if (window.confirm(this.translate.instant('FORMACION_LABORAL.MENSAJE'))) {
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
