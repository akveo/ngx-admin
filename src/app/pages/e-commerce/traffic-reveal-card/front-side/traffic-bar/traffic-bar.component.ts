import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-traffic-bar',
  styleUrls: ['./traffic-bar.component.scss'],
  templateUrl: './traffic-bar.component.html',
})
export class TrafficBarComponent {

  @Input() barData: { prevDate: string; prevValue: number; nextDate: string; nextValue: number };
  @Input() successDelta: boolean;
}
