import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
  isChecked = false;
  constructor() { }

  ngOnInit() {
  }

}
