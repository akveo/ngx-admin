/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { Component, OnDestroy, Input, OnInit } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { NbMediaBreakpoint, NbMediaBreakpointsService, NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'ngx-landing-main-info',
  templateUrl: './main-info-section.component.html',
  styleUrls: ['./main-info-section.component.scss'],
})
export class MainInfoSectionComponent implements OnDestroy {
  constructor(themeService: NbThemeService, breakpointService: NbMediaBreakpointsService) {
    this.breakpoints = breakpointService.getBreakpointsMap();
    themeService.onMediaQueryChange()
      .pipe(takeWhile(() => this.alive))
      .subscribe(([oldValue, newValue]) => {
        this.breakpoint = newValue;
      });
  }

  private alive = true;
  private forMaterialTheme: boolean = false;
  public readonly breakpoints: any;
  public breakpoint: NbMediaBreakpoint;

  @Input() public set material(value: any) {
    this.forMaterialTheme = coerceBooleanProperty(value);
  }

  public get imageUrl(): string {
    return this.forMaterialTheme
      ? 'assets/img/ngx-admin-material.png'
      : '/assets/img/ngx-admin.png';
  }

  public ngOnDestroy() {
    this.alive = false;
  }
}
