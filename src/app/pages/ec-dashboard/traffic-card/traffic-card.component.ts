import { Component } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'ngx-traffic-card',
  styleUrls: ['./traffic-card.component.scss'],
  template: `
    <nb-card size="xsmall">
      <nb-card-header>
        <span>Traffic</span>
        <div class="dropdown ghost-dropdown" ngbDropdown>
          <button type="button" class="btn btn-sm" ngbDropdownToggle
                  [ngClass]="{ 'btn-success': currentTheme == 'default', 'btn-primary': currentTheme != 'default'}">
            {{ type }}
          </button>
          <ul ngbDropdownMenu class="dropdown-menu">
            <li class="dropdown-item" *ngFor="let t of types" (click)="type = t">{{ t }}</li>
          </ul>
        </div>
      </nb-card-header>
      <nb-card-body>
        <ngx-traffic-bar-chart></ngx-traffic-bar-chart>
      </nb-card-body>
    </nb-card>`,
})
export class TrafficCardComponent {

  type = 'month';
  types = ['week', 'month', 'year'];
  currentTheme: string;
  themeSubscription: any;

  constructor(private themeService: NbThemeService) {
    this.themeSubscription = this.themeService.getJsTheme().subscribe(theme => {
      this.currentTheme = theme.name;
    });
  }

}
