import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'inline-form',
  styleUrls: ['./inline-form.component.scss'],
  templateUrl: './inline-form.component.html'
})
export class InlineFormComponent implements OnInit {

  isRemember: boolean;

  constructor() { }

  ngOnInit(): void {
  	this.isRemember = false;
  }

}
