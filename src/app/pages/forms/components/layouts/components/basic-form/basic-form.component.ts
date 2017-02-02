import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'basic-form',
  templateUrl: './basic-form.component.html'
})
export class BasicFormComponent implements OnInit {

  isChecked: boolean;

  constructor() { }

  ngOnInit(): void {
    this.isChecked = false;
  }

}
