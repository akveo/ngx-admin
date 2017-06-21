/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { Component, HostBinding, Input, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { convertToBoolProperty } from '../helpers';

import { NgaSidebarService } from './sidebar.service';

/**
 * Sidebar header container.
 *
 * Placeholder which contains a sidebar header content,
 * placed at the very top of the sidebar outside of the scroll area.
 */
@Component({
  selector: 'nga-sidebar-header',
  template: `
    <ng-content></ng-content>
  `,
})
export class NgaSidebarHeaderComponent {
}

/**
 * Sidebar content container.
 *
 * Placeholder which contains a sidebar main content.
 */
@Component({
  selector: 'nga-sidebar-content',
  template: `
    <ng-content></ng-content>
  `,
})
export class NgaSidebarContentComponent {
}

/**
 * Sidebar footer container.
 *
 * Placeholder which contains a sidebar footer content,
 * placed at the very bottom of the sidebar outside of the scroll area.
 */
@Component({
  selector: 'nga-sidebar-footer',
  template: `
    <ng-content></ng-content>
  `,
})
export class NgaSidebarFooterComponent {
}

/**
 * Main sidebar component.
 *
 * Sidebar can be place on the left or right side of the layout, can be fixed (shown above the content)
 * or can push the layout when opened.
 *
 * @styles Available component styles
 *
 * $nga-sidebar-foreground: $nga-foreground-inverse !default;
 * $nga-sidebar-background: $nga-background-inverse !default;
 * $nga-sidebar-height: 100vh !default;
 * $nga-sidebar-width: 12rem !default;
 * $nga-sidebar-width-compact: 4rem !default;
 * $nga-sidebar-padding: $nga-padding !default;
 * $nga-sidebar-header-height: 3.5rem !default;
 * $nga-sidebar-footer-height: 3.5rem !default;
 *
 * @example Min sidebar example
 *
 * ```
 * <nga-sidebar><nga-sidebar-content>Sidebar content</nga-sidebar-content></nga-sidebar>
 * ```
 *
 * @example Fixed sidebar
 *
 * Example of fixed sidebar located on the left side, initially collapsed.
 *
 * ```
 * <nga-sidebar left fixed state="collapsed">
 *  <nga-sidebar-header>Header</nga-sidebar-header>
 *  <nga-sidebar-content>
 *    Menu or another component here
 *  </nga-sidebar-content>
 *  <nga-sidebar-footer>
 *    Footer components here
 *  </nga-sidebar-footer>
 * </nga-sidebar>
 * ```
 */
@Component({
  selector: 'nga-sidebar',
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
export class NgaSidebarComponent implements OnInit, OnDestroy {

  static readonly STATE_EXPANDED: string = 'expanded';
  static readonly STATE_COLLAPSED: string = 'collapsed';
  static readonly STATE_COMPACTED: string = 'compacted';

  protected stateValue: string;

  @HostBinding('class.fixed') fixedValue: boolean = false;
  @HostBinding('class.right') rightValue: boolean = false;
  @HostBinding('class.left') leftValue: boolean = false;

  // TODO: rename stateValue to state (take a look to the card component)
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

  /**
   * Places sidebar on the left side
   * @type {boolean}
   */
  @Input()
  set right(val: boolean) {
    this.rightValue = convertToBoolProperty(val);
  }

  /**
   * Places sidebar on the right side
   * @type {boolean}
   */
  @Input()
  set left(val: boolean) {
    this.leftValue = convertToBoolProperty(val);
  }

  /**
   * Makes sidebar fixed (shown above the layout content)
   * @type {boolean}
   */
  @Input()
  set fixed(val: boolean) {
    this.fixedValue = convertToBoolProperty(val);
  }

  /**
   * Initial sidebar state, `expanded`|`collapsed`|`compacted`
   * @type {string}
   */
  @Input()
  set state(val: string) {
    this.stateValue = val;
  }

  /**
   * Tags a sidebar with some ID, can be later used in sidebar service
   * to determine which sidebar triggered the action, if multiple sidebars exist on the page.
   *
   * @type {string}
   */
  @Input() tag: string;

  private toggleSubscription: Subscription;
  private expandSubscription: Subscription;
  private collapseSubscription: Subscription;

  constructor(private sidebarService: NgaSidebarService) { }

  ngOnInit() {
    this.toggleSubscription = this.sidebarService.onToggle()
      .subscribe((data: { compact: boolean, tag: string }) => {
        if (!this.tag || this.tag === data.tag) {
          this.toggle(data.compact);
        }
      });

    this.expandSubscription = this.sidebarService.onExpand()
      .subscribe((data: { tag: string }) => {
        if (!this.tag || this.tag === data.tag) {
          this.expand();
        }
      });

    this.collapseSubscription = this.sidebarService.onCollapse()
      .subscribe((data: { tag: string }) => {
        if (!this.tag || this.tag === data.tag) {
          this.collapse();
        }
      });
  }

  ngOnDestroy() {
    this.toggleSubscription.unsubscribe();
    this.expandSubscription.unsubscribe();
    this.collapseSubscription.unsubscribe();
  }


  /**
   * Some Static method
   * // TODO: remove this
   *
   * @param {string} test
   * @param {any} anotherOne
   * @returns {number}
   */
  static someTestMethod(test: string, anotherOne: any) {
    return 1;
  }

  /**
   * Returns some value
   * // TODO: remove this
   *
   * @returns number
   */
  returnSomeValue() {
    return 1;
  }

  /**
   * Collapses the sidebar
   */
  collapse() {
    this.state = NgaSidebarComponent.STATE_COLLAPSED;
  }

  /**
   * Expands the sidebar
   */
  expand() {
    this.state = NgaSidebarComponent.STATE_EXPANDED;
  }

  /**
   * Compacts the sidebar (minimizes)
   */
  compact() {
    this.state = NgaSidebarComponent.STATE_COMPACTED;
  }

  /**
   * Toggles sidebar state (expanded|collapsed|compacted)
   * @param {boolean} compact If true, then sidebar state will be changed between expanded & compacted,
   * otherwise - between expanded & collapsed. False by default.
   *
   * @example Toggle sidebar state
   *
   * ```
   * this.sidebar.toggle(true);
   * ```
   */
  toggle(compact: boolean = false) {
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
