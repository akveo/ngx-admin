import { Component } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'ngx-traffic-card',
  styleUrls: ['./traffic-card.component.scss'],
  template: `
    <nb-card size="small">
      <nb-card-header>
        <span>Traffic</span>
        <div class="dropdown ghost-dropdown" ngbDropdown>
          <button type="button" class="btn btn-sm" ngbDropdownToggle
                  [ngClass]="{ 'btn-success': currentTheme == 'default', 'btn-primary': currentTheme != 'default'}">
            {{ selectedPeriod.duration }}
          </button>
          <ul ngbDropdownMenu class="dropdown-menu">
            <li class="dropdown-item" *ngFor="let p of periods" (click)="selectedPeriod = p">{{ p.duration }}</li>
          </ul>
        </div>
      </nb-card-header>
      <nb-card-body>
        <ngx-traffic-bar-chart [data]="selectedPeriod.data"
                               [labels]="selectedPeriod.labels"
                               [formatter]="selectedPeriod.formatter">
        </ngx-traffic-bar-chart>
      </nb-card-body>
    </nb-card>`,
})
export class TrafficCardComponent {


  periods = [{
    duration: 'week',
    data: [10, 15, 19, 7, 20, 13, 15],
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    formatter: '{c0} MB',
  }, {
    duration: 'month',
    data: [0.5, 0.3, 0.8, 0.2, 0.3, 0.7, 0.8, 1, 0.7, 0.8, 0.6, 0.7],
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    formatter: '{c0} GB',
  }, {
    duration: 'year',
    data: [10, 15, 19, 7, 20, 13, 15, 19, 11],
    labels: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018'],
    formatter: '{c0} GB',
  }];
  selectedPeriod = this.periods[1];
  currentTheme: string;
  themeSubscription: any;

  constructor(private themeService: NbThemeService) {
    this.themeSubscription = this.themeService.getJsTheme().subscribe(theme => {
      this.currentTheme = theme.name;
    });
  }

}
