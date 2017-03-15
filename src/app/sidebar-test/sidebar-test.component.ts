import { Component, ViewChild } from '@angular/core';
import { NgaSidebarComponent } from '../../framework/theme/src/layout/sidebar/sidebar.component';

@Component({
  selector: 'nga-sidebar-test',
  styles: [
    `
    :host /deep/ nga-layout-column {
      background-color: #76ecff;
    }
    `
  ],
  template: `
    <nga-layout>
      <nga-layout-header>
        <a href="#" class="navbar-brand">Akveo</a>
        
        <button id="collapse-left" (click)="collapseLeft()">Collapse Left</button>
        <button id="collapse-right" (click)="collapseRight()">Collapse Right</button>
      </nga-layout-header>
      
      <nga-sidebar state="collapsed" fixed #left>
        Sidebar
      </nga-sidebar>
      
      <nga-sidebar right state="compacted" #right>
        Small
      </nga-sidebar>
      
      <nga-layout-column>
       
       Content
      </nga-layout-column>

      
      <nga-layout-footer>
        &copy; Akveo 2017
      </nga-layout-footer>
    </nga-layout>
`,
})
export class NgaSidebarTestComponent {

  @ViewChild('left') leftSidebar: NgaSidebarComponent;
  @ViewChild('right') rightSidebar: NgaSidebarComponent;

  collapseLeft(): void {
    this.leftSidebar.toggle();
  }

  collapseRight(): void {
    this.rightSidebar.toggle(true);
  }
}
