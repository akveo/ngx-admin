import { Component, Input } from '@angular/core';

@Component({
  selector: 'ba-card',
  templateUrl: './ba-card.component.html',
})
export class BaCard {
  @Input() title: string;
  @Input() baCardClass: string;
  @Input() cardType: string;
}
