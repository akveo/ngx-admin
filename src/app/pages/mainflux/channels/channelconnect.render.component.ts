import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ViewCell, Cell, DefaultEditor, Editor } from 'ng2-smart-table';
import { NbWindowService } from '@nebular/theme';
import { ThingsFormComponent } from './channel-form/channel-form.component';

@Component({
  template: `
	<button (click)="openWindowForm()" class="btn btn-success btn-icon" type="button"><i class="nb-list"></i></button>
  `,
})

export class ChannelConnectRenderComponent implements OnInit {

  constructor(private windowService: NbWindowService) {}

  public renderValue;

  @Input() value;
  @Input() rowData: any;


  ngOnInit() {
    this.renderValue = this.rowData.name;
  }

  example() {
    alert(this.renderValue);
  }

  openWindowForm() {
    this.windowService.open(ThingsFormComponent, { title: this.renderValue , context: { name: this.renderValue } });
  }

}
