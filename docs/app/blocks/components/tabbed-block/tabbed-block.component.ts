/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { BehaviorSubject,  combineLatest } from 'rxjs';
import { filter, takeWhile } from 'rxjs/operators';
import { NgxTabbedService } from '../../../@theme/services/tabbed.service';

@Component({
  selector: 'ngx-tabbed-block',
  templateUrl: './tabbed-block.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxTabbedBlockComponent implements OnDestroy {

  currentTab;

  @Input() source;

  @Input()
  set tabs(value) {
    if (value) {
      value = Object
        .entries(value)
        .filter(([key, val]) => val)
        .map(([key, val]) => ({ tab: key }));

      this.tabs$.next(value);
    }
  }

  private tabs$ = new BehaviorSubject(null);
  private alive = true;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private cd: ChangeDetectorRef,
              private titleService: Title,
              private tabbedService: NgxTabbedService) {

    combineLatest([
      this.activatedRoute.params.pipe(filter((params) => !params.tab)),
      this.tabs$.pipe(filter((tabs) => tabs && tabs.length)),
    ])
      .pipe(takeWhile(() => this.alive))
      .subscribe(([params, tabs]) => {
        this.router.navigate([tabs[0].tab], { relativeTo: activatedRoute, replaceUrl: true });
      });

    combineLatest([
      this.activatedRoute.params.pipe(filter((params) => params.tab)),
      this.tabs$.pipe(filter((tabs) => tabs && tabs.length)),
    ])
      .pipe(takeWhile(() => this.alive))
      .subscribe(([params, tabs]) => {
        this.currentTab = tabs.find(tab => tab.tab === params.tab);
        if (this.currentTab) {
          this.titleService.setTitle(`${this.titleService.getTitle()} - component ${this.currentTab.tab}`);
        }
        this.cd.detectChanges();
      });
  }

  hasOverview(component) {
    return this.tabbedService.componentHasOverview(component);
  }

  hasExamples(component) {
    return this.tabbedService.componentHasExamples(component);
  }

  hasTheme(component) {
    return this.tabbedService.componentHasTheme(component);
  }

  hasMethods(component) {
    return this.tabbedService.componentHasMethods(component);
  }

  hasProps(component) {
    return this.tabbedService.componentHasProps(component);
  }

  hasAPI(component) {
    return this.hasMethods(component) || this.hasProps(component);
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
