import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ViewCell, Cell, DefaultEditor, Editor } from 'ng2-smart-table';

@Component({
  template: `
          <li *ngFor="let item of rowData.connected "> {{item.name}} </li>
  `,
})
export class ConnectedRenderComponent implements ViewCell, OnInit {

  renderValue: string;

  @Input() value: string | number;
  @Input() rowData: any;

  ngOnInit() {
	console.log(this.rowData.connected)
    this.renderValue = this.rowData.connected;
  }

}
