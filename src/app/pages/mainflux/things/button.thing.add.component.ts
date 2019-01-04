
import { Component, Input, OnInit, ViewContainerRef } from '@angular/core';

import { ViewCell, Cell, DefaultEditor, Editor } from 'ng2-smart-table';

// <input (change)="change($event)">

@Component({
  template: `

  `,
})
export class ButtonAddComponent extends DefaultEditor implements OnInit {

  @Input() value;

  //constructor() {  }

  ngOnInit() {
    console.log(this.cell)
  }

  public change(event) {
    let value = event.srcElement.value
    console.log(value)
    //this.cell.newValue = event.srcElement.value;
  }

}
