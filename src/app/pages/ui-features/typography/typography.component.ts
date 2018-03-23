import { Component, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { NbThemeService, NbMediaBreakpoint, NbMediaBreakpointsService } from '@nebular/theme';
import { isPlatformServer } from '@angular/common';

@Component({
  selector: 'ngx-typography',
  styleUrls: ['./typography.component.scss'],
  templateUrl: './typography.component.html',
})
export class TypographyComponent implements OnDestroy {
  breakpoint: NbMediaBreakpoint;
  breakpoints: any;
  themeSubscription: any;

  constructor(private themeService: NbThemeService,
              private breakpointService: NbMediaBreakpointsService,
              @Inject(PLATFORM_ID) private platformId: Object,
  ) {

    this.breakpoints = this.breakpointService.getBreakpointsMap();
    this.themeSubscription = this.themeService.onMediaQueryChange()
      .subscribe(([oldValue, newValue]) => {
        this.breakpoint = newValue;
      });
  }

  getCardSize() {
    return isPlatformServer(this.platformId) || this.breakpoint.width >= this.breakpoints.xxxl
      ? 'xxlarge'
      : 'large';
  }

  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }
}
