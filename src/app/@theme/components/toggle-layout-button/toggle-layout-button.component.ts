import { Component } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';
import { StateService } from '../../../@core/utils';

@Component({
  selector: 'ngx-toggle-layout-button',
  styleUrls: ['./toggle-layout-button.component.scss'],
  template: `
    <button class="toggle-layout"
            (click)="toggleSettings()"
            [class.expanded]="expanded"
            [class.sidebarEnd]="sidebarEnd">
      <i class="nb-gear"></i>
    </button>
  `,
})
export class ToggleLayoutButtonComponent {

  sidebarEnd = false;
  expanded = false;

  constructor(private sidebarService: NbSidebarService, protected stateService: StateService) {
    this.stateService.onSidebarState()
      .subscribe(({id}) => {
        this.sidebarEnd = id === 'end';
      });
  }

  toggleSettings() {
    this.sidebarService.toggle(false, 'settings-sidebar');
    this.expanded = !this.expanded;
  }
}
