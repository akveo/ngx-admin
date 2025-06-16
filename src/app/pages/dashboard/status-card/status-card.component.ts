import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-status-card',
  styleUrls: ['./status-card.component.scss'],
  template: `
    <nb-card>
      <div class="icon-container">
        <div class="icon status-{{ type }}">
          <ng-content></ng-content>
        </div>
      </div>

      <div class="details">
        <div class="title h5">{{ title }}</div>
        <div class="status-value">
          <span class="value h2">{{ value }}</span>
          <span class="unit">{{ unitOfMeasurement }}</span>
        </div>
      </div>
    </nb-card>
  `,
})
export class StatusCardComponent {
  @Input() title: string;
  @Input() type: string;
  @Input() value: string;
  @Input() unitOfMeasurement: string;
}