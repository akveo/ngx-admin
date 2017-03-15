import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'nga-tabset-test',
  template: `
    <nga-tabset>
      <nga-tab tabTitle="Tab #1">
        <span>Content #1</span>
      </nga-tab>
      <nga-tab tabTitle="Tab #2">
        <span>Content #2</span>
      </nga-tab>
      <nga-tab tabTitle="Tab #3">
        <span>Content #3</span>
      </nga-tab>
    </nga-tabset>
    <nga-tabset>
      <nga-tab tabTitle="Tab #1">
        <span>Content #1</span>
      </nga-tab>
      <nga-tab tabTitle="Tab #2" [active]="true">
        <span>Content #2</span>
      </nga-tab>
      <nga-tab tabTitle="Tab #3">
        <span>Content #3</span>
      </nga-tab>
    </nga-tabset>
    <nga-tabset>
      <nga-tab tabTitle="Tab #1">
        <span>Content #1</span>
      </nga-tab>
      <nga-tab tabTitle="Tab #2">
        <span>Content #2</span>
      </nga-tab>
      <nga-tab tabTitle="Tab #3" [active]="true">
        <span>Content #3</span>
      </nga-tab>
    </nga-tabset>
    <nga-tabset (changeTab)="changeTab($event)" [routes]="true">
      <nga-tab tabTitle="Tab #1" route="tab1">
        <span>Content #1</span>
      </nga-tab>
      <nga-tab tabTitle="Tab #2" route="tab2">
        <span>Content #2</span>
      </nga-tab>
      <nga-tab tabTitle="Tab #3" route="tab3">
        <span>Content #3</span>
      </nga-tab>
    </nga-tabset>
    <nga-tabset full-width>
      <nga-tab tabTitle="Tab #1">
        <span>Content #1</span>
      </nga-tab>
      <nga-tab tabTitle="Tab #2">
        <span>Content #2</span>
      </nga-tab>
      <nga-tab tabTitle="Tab #3">
        <span>Content #3</span>
      </nga-tab>
    </nga-tabset>
  `,
})
export class NgaTabsetTestComponent {
  constructor(private router: Router) {
  }

  changeTab($event: any) {
    this.router.navigate(['tabset', $event.route]);
  }
}
