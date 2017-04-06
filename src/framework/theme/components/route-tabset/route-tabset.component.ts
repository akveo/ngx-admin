/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, Input, Output, EventEmitter, HostBinding, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

import { convertToBoolProperty } from '../helpers';

@Component({
  selector: 'nga-route-tabset',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./route-tabset.component.scss'],
  template: `
    <ul class="nga-route-tabset">
      <li *ngFor="let tab of tabs"
      (click)="$event.preventDefault();selectTab(tab)"
      routerLink="{{tab.route}}"
      routerLinkActive="active"
      [routerLinkActiveOptions]="{ exact: true }">
        <a href>{{tab.title}}</a>
      </li>
    </ul>
    <router-outlet></router-outlet>
  `,
})
export class NgaRouteTabsetComponent {

  @HostBinding('class.full-width') fullWidthValue: boolean = false;

  @Input() tabs: any[];

  @Input()
  set fullWidth(val: boolean) {
    this.fullWidthValue = convertToBoolProperty(val);
  }

  @Output() changeTab = new EventEmitter<any>();

  constructor(private router: Router) {
  }

  selectTab(tab: any) {
    this.changeTab.emit(tab);

    this.router.navigate([tab.route]);
  }

}
