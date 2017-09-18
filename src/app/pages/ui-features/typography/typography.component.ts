import { Component } from '@angular/core';
import { NbThemeService, NbMediaBreakpoint, NbMediaBreakpointsService } from '@nebular/theme';

@Component({
  selector: 'ngx-typography',
  styleUrls: ['./typography.component.scss'],
  templateUrl: './typography.component.html',
})
export class TypographyComponent {
  breakpoint: NbMediaBreakpoint;
  breakpoints: any;

  constructor(private themeService: NbThemeService,
              private breakpointService: NbMediaBreakpointsService) {

    this.breakpoints = breakpointService.getBreakpointsMap();
    themeService.onMediaQueryChange()
      .subscribe(([oldValue, newValue]) => {
        this.breakpoint = newValue;
      });
  }
}
