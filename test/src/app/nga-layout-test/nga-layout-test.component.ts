import { Component } from '@angular/core';

@Component({
  selector: 'nga-layout-test',
  styleUrls: ['./nga-layout-test.component.scss'],
  template: `
    <nga-layout id="default-layout">
      <nga-layout-sidebar class="sidebar">
        <span>Sidebar</span>
      </nga-layout-sidebar>
      <nga-layout-content class="content">
        <span>Content</span>
      </nga-layout-content>
    </nga-layout>
    <nga-layout id="left-sidebar-layout">
      <nga-layout-sidebar class="sidebar" left>
        <span>Sidebar</span>
      </nga-layout-sidebar>
      <nga-layout-content class="content">
        <span>Content</span>
      </nga-layout-content>
    </nga-layout>
    <nga-layout id="right-sidebar-layout">
      <nga-layout-sidebar class="sidebar" right>
        <span>Sidebar</span>
      </nga-layout-sidebar>
      <nga-layout-content class="content">
        <span>Content</span>
      </nga-layout-content>
    </nga-layout>
    <nga-layout id="two-sidebars-layout">
      <nga-layout-sidebar class="sidebar" left>
        <span>Sidebar</span>
      </nga-layout-sidebar>
      <nga-layout-sidebar class="sidebar" right>
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
