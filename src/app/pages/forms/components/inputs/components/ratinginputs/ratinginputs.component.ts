import { RatingComponent } from 'ng2-bootstrap/ng2-bootstrap';
import { Component } from '@angular/core';

@Component({
  selector: 'rating-inputs',
  directives: [RatingComponent],
  template: require('./ratinginputs.html')
})

export class Rating {
  private _rate1:number = 3;
  private _rate2:number = 4;

  private _max1:number = 5;
  private _max2:number = 10;

  constructor() {
  }

}
