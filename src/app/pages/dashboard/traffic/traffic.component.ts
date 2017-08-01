import { Component } from '@angular/core';

@Component({
  selector: 'ngx-traffic',
  styleUrls: ['./traffic.component.scss'],
  template: `
    <nb-card size="xsmall">
      <nb-card-header>
        <span>Traffic Consumption</span>
        <div class="ghost-dropdown" ngbDropdown>
          <button type="button" class="btn btn-sm btn-primary" ngbDropdownToggle>
            {{ type }}
          </button>
          <ul class="dropdown-menu">
            <li class="dropdown-item" *ngFor="let t of types" (click)="type = t">{{ t }}</li>
          </ul>
        </div>
      </nb-card-header>
      <nb-card-body class="p-0">
        <ngx-traffic-chart></ngx-traffic-chart>
      </nb-card-body>
    </nb-card>
  `,
})
export class TrafficComponent {
  type: string = 'month';
  types = ['week', 'month', 'year'];
}
