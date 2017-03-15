import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'nga-route-tabset',
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
  @Input() tabs: Array<any>;

  @Output() changeTab = new EventEmitter<any>();

  constructor(private router: Router) {
  }

  selectTab(tab) {
    this.changeTab.emit(tab);

    this.router.navigate([tab.route]);
  }
}
