import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'validation-inputs',
  templateUrl: './validation-inputs.component.html'
})
export class ValidationInputsComponent implements OnInit {

  checkboxModel: Array<any>;
  checkboxPropertiesMapping: any;

  constructor() { }

  ngOnInit(): void {
    this.checkboxModel = [{
      name: 'Checkbox with success',
      state: false,
      class: 'has-success checkbox'
    }, {
      name: 'Checkbox with warning',
      state: false,
      class: 'has-warning checkbox',
    }, {
      name: 'Checkbox with error',
      state: false,
      class: 'has-error checkbox'
    }];

    this.checkboxPropertiesMapping = {
      model: 'state',
      value: 'name',
      label: 'name',
      baCheckboxClass: 'class'
    };
  }

}
