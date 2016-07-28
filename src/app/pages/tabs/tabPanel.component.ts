//our root app component
import {Component} from '@angular/core'
import {Tabs} from './tabs.component';
import { Tab } from './tab.component';


import {BaCard} from '../../theme/components';


@Component({
  selector: 'tabPanel',
  template: `
     <ba-card title="Optional Card Panel" baCardClass="with-scroll table-panel"><tabs>
      <tab [tabTitle]="'Tab 1'">Tab 1 Content</tab>
      <tab tabTitle="Tab 2">Tab 2 Content</tab>
        <tab tabTitle="Tab 3">Tab 3 Content</tab>
    </tabs></ba-card>
  `,
  directives: [Tabs, Tab,BaCard]
})
export class tabPanel {
  constructor() {
  // this.name = 'Angular2'
  }
}
