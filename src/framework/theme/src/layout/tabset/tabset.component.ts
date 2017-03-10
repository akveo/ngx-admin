import { Component, Input, ContentChildren, QueryList, AfterContentInit } from '@angular/core';

@Component({
  selector: 'nga-tab',
  template: `
    <div [hidden]="!active">
      <ng-content></ng-content>
    </div>
  `,
})
export class NgaTabComponent {
  @Input() tabTitle: string;
  @Input() active: boolean = false;
}

@Component({
  selector: 'nga-tabset',
  styleUrls: ['./tabset.component.scss'],
  template: `
    <ul class="nga-tabset">
      <li *ngFor="let tab of tabs" (click)="$event.preventDefault();selectTab(tab)" [class.active]="tab.active">
        <a href="#">{{tab.tabTitle}}</a>
      </li>
    </ul>
    <ng-content></ng-content>
    <ng-content select="nga-tab"></ng-content>
  `,
})
export class NgaTabsetComponent implements AfterContentInit {
  @ContentChildren(NgaTabComponent) tabs: QueryList<NgaTabComponent>;

  ngAfterContentInit() {
    const activeTabs = this.tabs.filter(tab => tab.active);

    if (!activeTabs.length) {
      this.selectTab(this.tabs.first);
    }
  }

  selectTab(tab: NgaTabComponent) {
    this.tabs.forEach(tb => tb.active = false);

    tab.active = true;
  }
}
