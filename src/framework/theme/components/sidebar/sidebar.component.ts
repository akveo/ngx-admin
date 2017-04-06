/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, HostBinding, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { convertToBoolProperty } from '../helpers';

import { NgaSidebarService } from './sidebar.service';

@Component({
  selector: 'nga-sidebar-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ng-content></ng-content>
  `,
})
export class NgaSidebarHeaderComponent {
}

@Component({
  selector: 'nga-sidebar-content',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ng-content></ng-content>
  `,
})
export class NgaSidebarContentComponent {
}

@Component({
  selector: 'nga-sidebar-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ng-content></ng-content>
  `,
})
export class NgaSidebarFooterComponent {
}

@Component({
  selector: 'nga-sidebar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./sidebar.component.scss'],
  template: `
    <div class="scrollable">
      <ng-content select="nga-sidebar-header"></ng-content>
      <div class="main-container">
        <ng-content></ng-content>
      </div>
      <ng-content select="nga-sidebar-footer"></ng-content>
    </div>
  `,
})
export class NgaSidebarComponent implements OnInit {

  static readonly STATE_EXPANDED: string = 'expanded';
  static readonly STATE_COLLAPSED: string = 'collapsed';
  static readonly STATE_COMPACTED: string = 'compacted';

  protected stateValue: string;

  @HostBinding('class.fixed') fixedValue: boolean = false;
  @HostBinding('class.right') rightValue: boolean = false;
  @HostBinding('class.left') leftValue: boolean = false;

  @HostBinding('class.expanded')
  get expanded() {
    return this.stateValue === NgaSidebarComponent.STATE_EXPANDED;
  }
  @HostBinding('class.collapsed')
  get collapsed() {
    return this.stateValue === NgaSidebarComponent.STATE_COLLAPSED;
  }
  @HostBinding('class.compacted')
  get compacted() {
    return this.stateValue === NgaSidebarComponent.STATE_COMPACTED;
  }

  @Input()
  set right(val: boolean) {
    this.rightValue = convertToBoolProperty(val);
  }
  @Input()
  set left(val: boolean) {
    this.leftValue = convertToBoolProperty(val);
  }
  @Input()
  set fixed(val: boolean) {
    this.fixedValue = convertToBoolProperty(val);
  }
  @Input()
  set state(val: string) {
    this.stateValue = val;
  }

  @Input() tag: string;

  constructor(private sidebarService: NgaSidebarService) { }

  ngOnInit() {
    this.sidebarService.toggleChanges.subscribe((data: any) => {
      if (!this.tag || this.tag === data.tag) {
        this.toggle(data.compact);
      }
    });

    this.sidebarService.expandChanges.subscribe((data: any) => {
      if (!this.tag || this.tag === data.tag) {
        this.expand();
      }
    });

    this.sidebarService.collapseChanges.subscribe((data: any) => {
      if (!this.tag || this.tag === data.tag) {
        this.collapse();
      }
    });
  }

  collapse(): void {
    this.state = NgaSidebarComponent.STATE_COLLAPSED;
  }

  expand(): void {
    this.state = NgaSidebarComponent.STATE_EXPANDED;
  }

  compact(): void {
    this.state = NgaSidebarComponent.STATE_COMPACTED;
  }

  toggle(compact: boolean = false): void {
    const closedStates = [NgaSidebarComponent.STATE_COMPACTED, NgaSidebarComponent.STATE_COLLAPSED];
    if (compact) {
      this.state = closedStates.indexOf(this.stateValue) >= 0 ?
        NgaSidebarComponent.STATE_EXPANDED : NgaSidebarComponent.STATE_COMPACTED;
    } else {
      this.state = closedStates.indexOf(this.stateValue) >= 0 ?
        NgaSidebarComponent.STATE_EXPANDED : NgaSidebarComponent.STATE_COLLAPSED;
    }
  }
}
