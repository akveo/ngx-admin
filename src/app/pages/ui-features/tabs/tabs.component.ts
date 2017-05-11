import { Component } from '@angular/core';

@Component({
  selector: 'ngx-tab1',
  template: `
    <p>Tab 1 works!</p>
  `,
})
export class Tab1Component { }

@Component({
  selector: 'ngx-tab2',
  template: `
    <p>Tab 2 works!</p>
  `,
})
export class Tab2Component { }

@Component({
  selector: 'ngx-tabs',
  styleUrls: ['./tabs.component.scss'],
  templateUrl: './tabs.component.html',
})
export class TabsComponent {

  tabs: any[] = [
    {
      title: 'Tab #1',
      route: '/pages/ui-features/tabs/tab1',
    },
    {
      title: 'Tab #2',
      route: '/pages/ui-features/tabs/tab2',
    },
  ];

}
