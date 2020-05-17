import { Component } from '@angular/core';

import { LocalDataSource } from 'ng2-smart-table';
import { BasicExampleLoadService } from './basic-example-load.service';

@Component({
  selector: 'ngx-basic-example-load',
  providers: [BasicExampleLoadService],
  styleUrls: ['./examples.component.scss'],
  template: `
    <ng2-smart-table [settings]="settings" [source]="source"></ng2-smart-table>
  `,
})
export class BasicExampleLoadComponent {

  source: LocalDataSource;

  settings = {
    columns: {
      id: {
        title: 'ID',
        editable: false,
        addable: false,
      },

      name: {
        title: 'Full Name',
      },
      username: {
        title: 'User Name',
      },
      email: {
        title: 'Email',
      },
    },
  };

  constructor(protected service: BasicExampleLoadService) {
    this.source = new LocalDataSource();

    this.service.getData().then((data) => {
      this.source.load(data);
    });
  }
}
