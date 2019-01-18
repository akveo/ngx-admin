import { Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators';

import { UserActivityData, UserActive } from '../../../@core/data/user-activity';

@Component({
  selector: 'ngx-user-activity',
  styleUrls: ['./user-activity.component.scss'],
  template: `
    <nb-card size="medium">
      <nb-card-header>
        <span>User Activity</span>
        <div class="dropdown ghost-dropdown" ngbDropdown>
          <button type="button" class="btn btn-sm" ngbDropdownToggle
                  [ngClass]="{ 'btn-success': currentTheme == 'default', 'btn-primary': currentTheme != 'default'}">
            {{ type }}
          </button>
          <ul ngbDropdownMenu class="dropdown-menu">
            <li class="dropdown-item"
                *ngFor="let t of types"
                (click)="getUserActivity(t); type = t">
              {{ t }}
            </li>
          </ul>
        </div>
      </nb-card-header>
      <nb-card-body>
        <ul class="user-activity-list">
          <li *ngFor="let item of userActivity">
            <div class="visited-date">
              {{ item.date }}
            </div>
            <div class="visited-pages-count">
              <div class="title">Pages Visit</div>
              <div class="value">{{ item.pagesVisitCount }}</div>
            </div>
            <div class="visited-percentages">
              <div class="title">New visits, %</div>
              <div class="delta value"
                   [class.up]="item.deltaUp"
                   [class.down]="!item.deltaUp">
                {{ item.newVisits }}%
              </div>
            </div>
          </li>
        </ul>
      </nb-card-body>
    </nb-card>
  `,
})
export class ECommerceUserActivityComponent implements OnDestroy {

  private alive = true;

  userActivity: UserActive[] = [];
  type = 'month';
  types = ['week', 'month', 'year'];
  currentTheme: string;

  constructor(private themeService: NbThemeService,
              private userActivityService: UserActivityData) {
    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
        this.currentTheme = theme.name;
    });

    this.getUserActivity(this.type);
  }

  getUserActivity(period: string) {
    this.userActivityService.getUserActivityData(period)
      .pipe(takeWhile(() => this.alive))
      .subscribe(userActivityData => {
        this.userActivity = userActivityData;
      });
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
