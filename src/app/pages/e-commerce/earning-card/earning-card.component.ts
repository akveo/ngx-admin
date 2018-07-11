import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-earning-card',
  styleUrls: ['./earning-card.component.scss'],
  templateUrl: './earning-card.component.html',
})
export class EarningCardComponent {

  flipped = false;

  @Input() title: string;
  @Input() value: string;
  @Input() prevValue: string;
  @Input() percent: number;
  @Input() label: string;
  @Input() icon: string;

  toggleFlipView() {
    this.flipped = !this.flipped;
  }
}
