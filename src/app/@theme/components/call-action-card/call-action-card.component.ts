import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NbComponentSize, NbComponentStatus, NbMediaBreakpointsService, NbThemeService } from '@nebular/theme';
import { map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'ngx-call-action-card',
  styleUrls: ['./call-action-card.component.scss'],
  template: `
    <nb-card>
      <div class="icon-container">
        <div class="icon">
          <nb-icon [icon]="type"></nb-icon>
        </div>
      </div>

      <div class="details">
        <div class="title h6">{{ title }}</div>
      </div>

      <div class="actions">
        <a nbButton [size]="buttonSize" [status]="getButtonStatus()" hero [href]="link">
          {{ linkTitle }}
        </a>
      </div>
    </nb-card>
  `,
})
export class CallActionCardComponent implements OnInit, OnDestroy {

  private destroy$ = new Subject<void>();

  @Input() title: string;
  @Input() type: string;
  @Input() link: string;
  @Input() linkTitle: string;

  currentTheme: string;
  buttonSize: NbComponentSize;

  constructor(
    private themeService: NbThemeService,
    private breakpointService: NbMediaBreakpointsService,
  ) {}

  ngOnInit() {
    this.themeService.getJsTheme()
      .pipe(takeUntil(this.destroy$))
      .subscribe(theme => {
        this.currentTheme = theme.name;
      });

    const { xxl } = this.breakpointService.getBreakpointsMap();
    this.themeService.onMediaQueryChange()
      .pipe(
        map(([, currentBreakpoint]) => currentBreakpoint.width < xxl),
        takeUntil(this.destroy$),
      )
      .subscribe((isLessThanXxl: boolean) => {
        this.buttonSize = isLessThanXxl
          ? 'small'
          : 'large';
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  getButtonStatus(): NbComponentStatus {
    switch (this.currentTheme) {
      case 'cosmic': return 'primary';
      case 'corporate': return 'warning';
      default: return 'danger';
    }
  }
}
