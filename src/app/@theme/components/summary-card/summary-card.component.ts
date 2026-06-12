import { Component, Input } from '@angular/core';

export interface SummaryCardEntry {
  label: string;
  value: string | number;
  icon?: string;
}

@Component({
  selector: 'ngx-summary-card',
  templateUrl: './summary-card.component.html',
  styleUrls: ['./summary-card.component.scss'],
})
export class SummaryCardComponent {
  @Input() title = '';
  @Input() subtitle = '';
  @Input() entries: SummaryCardEntry[] = [];
}
