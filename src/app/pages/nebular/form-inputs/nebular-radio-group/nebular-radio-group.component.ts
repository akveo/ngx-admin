import { Component } from '@angular/core';

@Component({
  selector: 'ngx-nebular-radio-group',
  templateUrl: 'nebular-radio-group.component.html',
  styleUrls: ['nebular-radio-group.component.scss'],
})
export class NebularRadioGroupComponent {
  options = [
    { value: 'This is value 1', label: 'Option 1' },
    { value: 'This is value 2', label: 'Option 2 Disabled', disabled: true },
    { value: 'This is value 3', label: 'Option 3' },
    { value: 'This is value 5', label: 'Option 4' },
  ];
  option;
}
