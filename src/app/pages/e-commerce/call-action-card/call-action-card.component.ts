import { Component, Input, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'ngx-call-action-card',
  styleUrls: ['./call-action-card.component.scss'],
  template: `
    <nb-card>
      <div class="icon-container hidden-sm-down">
        <div class="icon" [innerHTML]="type | eva">
        </div>
      </div>

      <div class="details">
        <div class="title">{{ title }}</div>
      </div>
      <div class="actions">
        <a nbButton size="large" hero href="{{ link }}" [ngClass]="{
              'btn-primary': currentTheme === 'cosmic',
              'btn-warning': currentTheme === 'corporate',
              'btn-danger': currentTheme === 'default'
        }">{{ linkTitle }}</a>
      </div>
    </nb-card>
  `,
})
export class CallActionCardComponent implements OnDestroy {

  private alive = true;

  @Input() title: string;
  @Input() type: string;
  @Input() link: string;
  @Input() linkTitle: string;

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
