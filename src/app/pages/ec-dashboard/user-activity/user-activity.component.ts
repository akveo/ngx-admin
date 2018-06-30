import { Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators';

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
            <li class="dropdown-item" *ngFor="let t of types" (click)="type = t">{{ t }}</li>
          </ul>
        </div>
      </nb-card-header>
      <nb-card-body>
        <ul class="user-activity-list">
          <li>
            <div class="visited-date">
              1 May
            </div>
            <div class="visited-pages-count">
              <div class="title">Pages Visit</div>
              <div class="value">336</div>
            </div>
            <div class="visited-percentages">
              <div class="title">New visits, %</div>
              <div class="value">100%</div>
            </div>
          </li>
          <li>
            <div class="visited-date">
              1 May
            </div>
            <div class="visited-pages-count">
              <div class="title">Pages Visit</div>
              <div class="value">336</div>
            </div>
            <div class="visited-percentages">
              <div class="title">New visits, %</div>
              <div class="value">100%</div>
            </div>
          </li>
          <li>
            <div class="visited-date">
              1 May
            </div>
            <div class="visited-pages-count">
              <div class="title">Pages Visit</div>
              <div class="value">336</div>
            </div>
            <div class="visited-percentages">
              <div class="title">New visits, %</div>
              <div class="value">100%</div>
            </div>
          </li>
          <li>
            <div class="visited-date">
              1 May
            </div>
            <div class="visited-pages-count">
              <div class="title">Pages Visit</div>
              <div class="value">336</div>
            </div>
            <div class="visited-percentages">
              <div class="title">New visits, %</div>
              <div class="value">100%</div>
            </div>
          </li>
          <li>
            <div class="visited-date">
              1 May
            </div>
            <div class="visited-pages-count">
              <div class="title">Pages Visit</div>
              <div class="value">336</div>
            </div>
            <div class="visited-percentages">
              <div class="title">New visits, %</div>
              <div class="value">100%</div>
            </div>
          </li>
          <li>
            <div class="visited-date">
              1 May
            </div>
            <div class="visited-pages-count">
              <div class="title">Pages Visit</div>
              <div class="value">336</div>
            </div>
            <div class="visited-percentages">
              <div class="title">New visits, %</div>
              <div class="value">100%</div>
            </div>
          </li>
          <li>
            <div class="visited-date">
              1 May
            </div>
            <div class="visited-pages-count">
              <div class="title">Pages Visit</div>
              <div class="value">336</div>
            </div>
            <div class="visited-percentages">
              <div class="title">New visits, %</div>
              <div class="value">100%</div>
            </div>
          </li>
          <li>
            <div class="visited-date">
              1 May
            </div>
            <div class="visited-pages-count">
              <div class="title">Pages Visit</div>
              <div class="value">336</div>
            </div>
            <div class="visited-percentages">
              <div class="title">New visits, %</div>
              <div class="value">100%</div>
            </div>
          </li>
        </ul>
      </nb-card-body>
    </nb-card>
  `,
})
export class EcUserActivityComponent implements OnDestroy {

  private alive = true;

  type = 'month';
  types = ['week', 'month', 'year'];
  currentTheme: string;

  constructor(private themeService: NbThemeService) {
    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
        this.currentTheme = theme.name;
    });
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
