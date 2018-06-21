import { Component } from '@angular/core';

@Component({
  selector: 'ngx-button-groups',
  styleUrls: ['./button-groups.component.scss'],
  templateUrl: './button-groups.component.html',
})
export class ButtonGroupsComponent {

  radioModel = 'left';

  checkboxModel = {
    left: false,
    middle: false,
    right: false,
  };

  dividedCheckboxModel = {
    monday: true,
    tuesday: true,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
  };

  paginationModel = 1;

  iconToolbarModel = {
    one: false,
    two: false,
    three: true,
    four: false,
    five: false,
  };

  dividedButtonGroupOne = 'left';

  dividedButtonGroupTwo = {
    left: false,
    middle: false,
    right: false,
  };
}
