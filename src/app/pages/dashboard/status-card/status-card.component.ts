import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-status-card',
  styleUrls: ['./status-card.component.scss'],
  template: `
    <nga-card (click)="on = !on" [ngClass]="{'off': !on}">
      <div class="icon-container {{ type }}">
        <ng-content></ng-content>
      </div>

      <div class="details">
        <div class="title">{{ title }}</div>
        <div class="status">{{ on ? 'ON' : 'OFF' }}</div>
      </div>
    </nga-card>
  `,
})
export class StatusCardComponent {

  @Input() title: string;
  @Input() type: string;
  @Input() on: boolean = true;
}
