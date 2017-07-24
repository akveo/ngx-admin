import { Component } from '@angular/core';

@Component({
  selector: 'ngx-traffic',
  styleUrls: ['./traffic.component.scss'],
  template: `
    <nga-card size="xsmall">
      <nga-card-header>
        <span>Traffic Consumption</span>
        <div class="ghost-dropdown" ngbDropdown>
          <button type="button" class="btn btn-sm btn-primary" ngbDropdownToggle>
            {{ type }}
          </button>
          <ul class="dropdown-menu">
            <li class="dropdown-item" *ngFor="let t of types" (click)="type = t">{{ t }}</li>
          </ul>
        </div>
      </nga-card-header>
      <nga-card-body class="p-0">
        <ngx-traffic-chart></ngx-traffic-chart>
      </nga-card-body>
    </nga-card>
  `,
})
export class TrafficComponent {
  type: string = 'month';
  types = ['week', 'month', 'year'];
}
