import { Component } from '@angular/core';

@Component({
  selector: 'nga-layout-test',
  template: `
    <nga-layout>
      <nga-layout-sidebar></nga-layout-sidebar>
      <nga-layout-content></nga-layout-content>
    </nga-layout>
`,
})
export class NgaLayoutTestComponent {
}
