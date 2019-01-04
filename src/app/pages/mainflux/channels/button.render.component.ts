import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ViewCell, Cell, DefaultEditor, Editor } from 'ng2-smart-table';

@Component({
  template: `
    <button (click)="example()">{{value}}</button>
  `,
})
export class ButtonRenderComponent implements OnInit {

  public renderValue;

  @Input() value;

  constructor() {  }

  ngOnInit() {
    this.renderValue = this.value;
  }

  example() {
    alert(this.renderValue);
  }


}
