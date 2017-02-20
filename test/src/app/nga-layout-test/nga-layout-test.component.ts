import { Component } from '@angular/core';

@Component({
  selector: 'nga-layout-test',
  styleUrls: ['./nga-layout-test.component.scss'],
  template: `
    <nga-layout>
      <nga-layout-sidebar class="sidebar" left>
        <span>Sidebar</span>
      </nga-layout-sidebar>
      <nga-layout-content class="content">
        <span>Content</span>
      </nga-layout-content>
    </nga-layout>
`,
})
export class NgaLayoutTestComponent {
}
