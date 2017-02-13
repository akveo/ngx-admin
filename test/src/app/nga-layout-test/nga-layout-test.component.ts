import { Component } from '@angular/core';

@Component({
  selector: 'nga-layout-test',
  template: `
    <nga-layout>
      <nga-layout-sidebar>
        <span>Sidebar</span>
      </nga-layout-sidebar>
      <nga-layout-content>
        <span>Content</span>
      </nga-layout-content>
    </nga-layout>
`,
})
export class NgaLayoutTestComponent {
}
