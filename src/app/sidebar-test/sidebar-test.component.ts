import { Component, ViewChild, OnInit } from '@angular/core';
import { NgaSidebarComponent } from '../../framework/theme/src/layout/sidebar/sidebar.component';

@Component({
  selector: 'nga-sidebar-test',
  styles: [
    `
    :host /deep/ nga-layout-column {
      background-color: #76ecff;
    }
    `,
  ],
  template: `
    <nga-layout>
      <nga-layout-header>
        <a href="#" class="navbar-brand">Akveo</a>
        
        <button id="collapse-left" (click)="collapseLeft()">Collapse Left</button>
        <button id="collapse-right" (click)="collapseRight()">Collapse Right</button>
      </nga-layout-header>
      
      <nga-sidebar state="collapsed" fixed #left>
      </nga-sidebar>
      
      <nga-sidebar right state="compacted" #right>
        {{ content }}
      </nga-sidebar>
      
      <nga-layout-column left>
       {{ content }}
      </nga-layout-column>
      <nga-layout-column>
       {{ content }}
      </nga-layout-column>
      <nga-layout-column right>
       {{ content }}
      </nga-layout-column>

      
      <nga-layout-footer>
        &copy; Akveo 2017
      </nga-layout-footer>
    </nga-layout>
`,
})
export class NgaSidebarTestComponent implements OnInit {

  @ViewChild('left') leftSidebar: NgaSidebarComponent;
  @ViewChild('right') rightSidebar: NgaSidebarComponent;

  content = 'First ';

  collapseLeft() {
    this.leftSidebar.toggle();
  }

  collapseRight() {
    this.rightSidebar.toggle(true);
  }

  ngOnInit() {

    for (let i = 0; i < 1000; i++) {
      this.content += 'Akveo ';
    }
    this.content += ' Last';
  }
}
