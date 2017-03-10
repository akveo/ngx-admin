import { Component } from '@angular/core';

@Component({
  selector: 'nga-tabset-test',
  template: `
    <nga-tabset>
      <nga-tab tabTitle="Title #1">
        <span>Content #1</span>
      </nga-tab>
      <nga-tab tabTitle="Title #2">
        <span>Content #2</span>
      </nga-tab>
      <nga-tab tabTitle="Title #3">
        <span>Content #3</span>
      </nga-tab>
    </nga-tabset>
  `,
})
export class NgaTabsetTestComponent {
}
