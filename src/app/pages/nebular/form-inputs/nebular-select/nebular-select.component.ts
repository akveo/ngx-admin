import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'ngx-nebular-select',
  templateUrl: 'nebular-select.component.html',
  styleUrls: ['nebular-select.component.scss'],
})
export class NebularSelectComponent {

  commonSelectedItem = '2';

  selectedItemNgModel;
  selectedItemFormControl = new FormControl();

  selectedItem;
}
