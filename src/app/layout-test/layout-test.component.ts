import { Component } from '@angular/core';

@Component({
  selector: 'nga-layout-test',
  styles: [
    `
    :host /deep/ nga-layout-column {
      background-color: #fb75ff;
    } 
    :host /deep/ nga-layout-column.right {
      background-color: #aeff34;
    }
    :host /deep/ nga-layout-column.left {
      background-color: #76ecff;
    }
    
    `
  ],
  template: `
    <nga-layout id="layout-fluid">
      <nga-layout-header>
        <a href="#" class="navbar-brand">Akveo</a>
      </nga-layout-header>
      
      <nga-layout-column left>
        Left
      </nga-layout-column>
      <nga-layout-column>
        Center
      </nga-layout-column>
      <nga-layout-column right>
        Right
      </nga-layout-column>
      
      <nga-layout-footer>
        &copy; Akveo 2017
      </nga-layout-footer>
    </nga-layout>
    
    <nga-layout center id="layout-center">
      <nga-layout-header>
        <a href="#" class="navbar-brand">Akveo</a>
      </nga-layout-header>
      
      <nga-layout-column left>
        Left
      </nga-layout-column>
      <nga-layout-column>
        Center
      </nga-layout-column>
      <nga-layout-column right>
        Right
      </nga-layout-column>
      
      <nga-layout-footer>
        &copy; Akveo 2017
      </nga-layout-footer>
    </nga-layout>
`,
})
export class NgaLayoutTestComponent {
}
