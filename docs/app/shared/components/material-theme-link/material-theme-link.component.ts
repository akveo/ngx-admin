/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { Component, ViewChild, AfterViewInit, Input, OnDestroy } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Subject, merge } from 'rxjs';
import { map, take, takeUntil } from 'rxjs/operators';
import { NbMediaBreakpointsService, NbMediaBreakpoint, NbPopoverDirective, NbThemeService } from '@nebular/theme';

@Component({
  selector: 'ngx-material-theme-link',
  templateUrl: './material-theme-link.component.html',
  styleUrls: ['./material-theme-link.component.scss'],
})
export class MaterialThemeLinkComponent implements AfterViewInit, OnDestroy {

  private destroy$ = new Subject<void>();
  private hidePopover$ = new Subject<void>();

  showPopover: boolean = false;

  @Input()
  set withPopover(value: any) {
    this.showPopover = coerceBooleanProperty(value);
  }

  @ViewChild(NbPopoverDirective) popover: NbPopoverDirective;

  constructor(
    private breakpointService: NbMediaBreakpointsService,
    private themeService: NbThemeService,
  ) {}

  ngAfterViewInit(): void {
    if (!this.showPopover) {
      return;
    }

    this.themeService.onMediaQueryChange()
      .pipe(
        map(([, currentBreakpoint]: NbMediaBreakpoint[]) => this.shouldShowPopover(currentBreakpoint)),
        takeUntil(merge(this.destroy$, this.hidePopover$)),
      )
      .subscribe((showPopover: boolean) => {
        if (showPopover) {
          this.popover.show();
        } else {
          this.popover.hide();
        }
      });

    this.hidePopover$
      .pipe(
        take(1),
        takeUntil(this.destroy$),
      )
      .subscribe(() => this.popover.hide());
  }

  ngOnDestroy() {
    this.destroy$.next();
  }

  hidePopover(): void {
    this.hidePopover$.next();
  }

  private shouldShowPopover(breakpoint: NbMediaBreakpoint): boolean {
    return breakpoint.width >= this.breakpointService.getByName('is').width;
  }
}
