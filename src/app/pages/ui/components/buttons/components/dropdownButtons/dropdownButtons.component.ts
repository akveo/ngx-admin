import {Component, HostListener} from '@angular/core';
import { DROPDOWN_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  selector: 'dropdown-buttons',
  template: require('./dropdownButtons.html'),
  directives: [DROPDOWN_DIRECTIVES]
})

// TODO: appendToBody does not implemented yet, waiting for it
export class DropdownButtons {

  constructor() {
  }
}
