import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-metric-card',
  styleUrls: ['./metric-card.component.scss'],
  template: `
    <nb-card>
      <div class="icon-container">
        <div class="icon status-{{ type }}">
          <i [ngClass]="iconClass"></i>
        </div>
      </div>

      <div class="details">
        <div class="title">{{ title }}</div>
        <div class="status-value">
          <span class="value">{{ value }}</span>
          <span class="unit">{{ unitOfMeasurement }}</span>
        </div>
      </div>
    </nb-card>
  `,
})
export class MetricCardComponent {
  @Input() title: string;
  @Input() type: string;
  @Input() value: string;
  @Input() unitOfMeasurement: string;
  @Input() iconClass: string;
}