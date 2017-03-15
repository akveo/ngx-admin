import { Component, ViewChild } from '@angular/core';
import { NgaSidebarComponent } from '../../framework/theme/src/layout/sidebar/sidebar.component';

@Component({
  selector: 'nga-sidebar-test-one',
  styles: [
    `
    :host /deep/ nga-layout-column {
      background-color: #76ecff;
    }
    `
  ],
  template: `
    <nga-layout>
    
      <nga-layout-header></nga-layout-header>
    
      <nga-sidebar>
        Left
      </nga-sidebar>
      
      <nga-sidebar right fixed>
        Right
      </nga-sidebar>
      
      <nga-layout-footer></nga-layout-footer>
      
    </nga-layout>
`,
})
export class NgaSidebarTestTwoComponent {
}
