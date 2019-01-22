import { Component } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';
import { StateService } from '../../../@core/utils';

@Component({
  selector: 'ngx-toggle-settings-button',
  styleUrls: ['./toggle-settings-button.component.scss'],
  template: `
    <button class="toggle-settings"
            (click)="toggleSettings()"
            [class.expanded]="expanded"
            [class.sidebar-end]="sidebarEnd"
            [class.was-expanded]="wasExpanded"
    >
      <i class="nb-gear"></i>
    </button>
  `,
})
export class ToggleSettingsButtonComponent {

  sidebarEnd = false;
  expanded = false;
  wasExpanded = false;

  constructor(private sidebarService: NbSidebarService, protected stateService: StateService) {
    this.stateService.onSidebarState()
      .subscribe(({id}) => {
        this.sidebarEnd = id === 'end';
      });
  }

  toggleSettings() {
    this.sidebarService.toggle(false, 'settings-sidebar');
    this.expanded = !this.expanded;
    this.wasExpanded = true;
  }
}
