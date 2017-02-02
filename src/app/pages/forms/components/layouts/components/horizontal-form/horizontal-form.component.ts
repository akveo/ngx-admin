import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'horizontal-form',
  templateUrl: './horizontal-form.component.html'
})
export class HorizontalFormComponent implements OnInit {

  isRemember: boolean;

  constructor() { }

  ngOnInit(): void {
  	this.isRemember = false;
  }

}
