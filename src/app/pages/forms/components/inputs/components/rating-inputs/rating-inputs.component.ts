import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rating-inputs',
  templateUrl: './rating-inputs.component.html'
})
export class RatingComponent implements OnInit {

  rate1: number;
  rate2: number;
  max1: number;
  max2: number;

  constructor() { }

  ngOnInit(): void {
  	this.rate1 = 3;
    this.rate2 = 4;
    this.max1 = 5;
    this.max2 = 10;
  }

}
