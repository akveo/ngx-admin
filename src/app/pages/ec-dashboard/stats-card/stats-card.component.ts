import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-stats-card',
  styleUrls: ['./stats-card.component.scss'],
  templateUrl: './stats-card.component.html',
})
export class StatsCardComponent {

  @Input() title: string;
  @Input() value: number;
  @Input() percent: number;
  @Input() label: string;
  @Input() icon: string;
}
