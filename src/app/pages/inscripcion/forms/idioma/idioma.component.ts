import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableService } from '../../../../@core/data/smart-table.service';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

@Component({
  selector: 'ngx-idiomas',
  templateUrl: './idioma.component.html',
  styleUrls: ['./idioma.component.scss'],
})
export class IdiomaComponent implements OnInit {
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
      idioma: {
        title: this.translate.instant('IDIOMAS.IDIOMA'),
        type: 'string',
      },
      nativo: {
        title: this.translate.instant('IDIOMAS.IDIOMA_NATAL'),
        type: 'string',
      },
      habla: {
        title: this.translate.instant('IDIOMAS.NIVEL_HABLA'),
        type: 'string',
      },
      escucha: {
        title: this.translate.instant('IDIOMAS.NIVEL_ESCUCHA'),
        type: 'string',
      },
      lectura: {
        title: this.translate.instant('IDIOMAS.NIVEL_LECTURA'),
        type: 'string',
      },
      escritura: {
        title: this.translate.instant('IDIOMAS.NIVEL_ESCRITURA'),
        type: 'string',
      },
      acciones: {
        title: this.translate.instant('IDIOMAS.ELIMINAR'),
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
            idioma: {
              title: this.translate.instant('IDIOMAS.IDIOMA'),
              type: 'string',
            },
            nativo: {
              title: this.translate.instant('IDIOMAS.IDIOMA_NATAL'),
              type: 'string',
            },
            habla: {
              title: this.translate.instant('IDIOMAS.NIVEL_HABLA'),
              type: 'string',
            },
            escucha: {
              title: this.translate.instant('IDIOMAS.NIVEL_ESCUCHA'),
              type: 'string',
            },
            lectura: {
              title: this.translate.instant('IDIOMAS.NIVEL_LECTURA'),
              type: 'string',
            },
            escritura: {
              title: this.translate.instant('IDIOMAS.NIVEL_ESCRITURA'),
              type: 'string',
            },
            acciones: {
              title: this.translate.instant('IDIOMAS.ELIMINAR'),
              type: 'string',
            },
          },
        },
      );
      this.source.refresh();
    });
  }
  onDeleteConfirm(event): void {
    if (window.confirm(this.translate.instant('IDIOMAS.MENSAJE'))) {
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
