/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnDestroy,
} from '@angular/core';
import { takeWhile,  map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { of as observableOf,  combineLatest } from 'rxjs';

@Component({
  selector: 'ngx-page-toc',
  styleUrls: ['./page-toc.component.scss'],
  template: `
    <ng-container *ngIf="items?.length > 0">
      <h4>Overview</h4>
      <ul>
        <li *ngFor="let item of items" [class.selected]="item.selected">
          <a [routerLink]="item.link" [fragment]="item.fragment">{{ item.title }}</a>
        </li>
      </ul>
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxPageTocComponent implements OnDestroy {

  items: any[];

  @Input()
  set toc(value) {
    combineLatest(
      observableOf(value || []),
      this.activatedRoute.fragment,
    )
      .pipe(
        takeWhile(() => this.alive),
        map(([toc, fragment]) => {
          toc = toc.map((item: any) => ({ ...item, selected: fragment === item.fragment }));
          if (toc.length && !toc.find(item => item.selected)) {
            toc[0].selected = true;
          }
          return toc;
        }),
      )
      .subscribe((toc) => {
        this.items = toc;
        this.cd.detectChanges();
      });
  }

  private alive = true;

  constructor(private activatedRoute: ActivatedRoute, private cd: ChangeDetectorRef) {
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
