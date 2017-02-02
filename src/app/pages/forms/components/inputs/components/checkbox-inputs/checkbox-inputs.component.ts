import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'checkbox-inputs',
  templateUrl: './checkbox-inputs.component.html'
})
export class CheckboxInputsComponent implements OnInit {

  checkboxModel: Array<any>;
  checkboxPropertiesMapping: any;
  isDisabled: boolean;

  constructor() { }

  ngOnInit(): void {
    this.checkboxModel = [{
      name: 'Check 1',
      checked: false,
      class: 'col-md-4'
    }, {
      name: 'Check 2',
      checked: true,
      class: 'col-md-4'
    }, {
      name: 'Check 3',
      checked: false,
      class: 'col-md-4'
    }];

    this.checkboxPropertiesMapping = {
      model: 'checked',
      value: 'name',
      label: 'name',
      baCheckboxClass: 'class'
    };

    this.isDisabled = false;
  }

}
