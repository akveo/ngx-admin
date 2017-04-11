/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import {
  Component,
  Input,
  Output,
  EventEmitter,
  ContentChildren,
  QueryList,
  AfterContentInit,
  HostBinding,
  ChangeDetectionStrategy,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { convertToBoolProperty } from '../helpers';

@Component({
  selector: 'nga-tab',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div [hidden]="!active">
      <ng-content></ng-content>
    </div>
  `,
})
export class NgaTabComponent {
  @Input() tabTitle: string;
  @Input() active: boolean = false;
  @Input() route: string;
}

@Component({
  selector: 'nga-tabset',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./tabset.component.scss'],
  template: `
    <ul class="nga-tabset">
      <li *ngFor="let tab of tabs"
      (click)="selectTab(tab)"
      [class.active]="tab.active">
        <a href (click)="$event.preventDefault()">{{tab.tabTitle}}</a>
      </li>
    </ul>
    <ng-content select="nga-tab"></ng-content>
  `,
})
export class NgaTabsetComponent implements AfterContentInit {

  @ContentChildren(NgaTabComponent) tabs: QueryList<NgaTabComponent>;

  @HostBinding('class.full-width') fullWidthValue: boolean = false;

  @Input() routes: boolean = false;

  @Input()
  set fullWidth(val: boolean) {
    this.fullWidthValue = convertToBoolProperty(val);
  }

  @Output() changeTab = new EventEmitter<any>();

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngAfterContentInit() {
    this.activatedRoute.params
      .subscribe((params: any) => {
        const activeTabs = this.tabs.filter(tab => this.routes ? tab.route === params.tab : tab.active);

        if (!activeTabs.length) {
          this.selectTab(this.tabs.first);
        } else {
          this.selectTab(activeTabs[0]);
        }
      });
  }

  selectTab(tab: NgaTabComponent) {
    this.tabs.forEach(tb => tb.active = false);

    tab.active = true;

    this.changeTab.emit(tab)
  }
}
