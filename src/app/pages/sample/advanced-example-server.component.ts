import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServerDataSource } from 'ng2-smart-table';

@Component({
  selector: 'ngx-advanced-example-server',
  styleUrls: ['./examples.component.scss'],
  template: `
    <ng2-smart-table [settings]="settings" [source]="source"></ng2-smart-table>
  `,
})
export class AdvancedExampleServerComponent {

  settings = {
    columns: {
      id: {
        title: 'ID',
      },
      albumId: {
        title: 'Album',
      },
      title: {
        title: 'Title',
      },
      url: {
        title: 'Url',
      },
    },
  };

  source: ServerDataSource;

  constructor(http: HttpClient) {
    this.source = new ServerDataSource(http, { endPoint: 'https://jsonplaceholder.typicode.com/photos' });
  }
}
