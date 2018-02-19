import { Component } from '@angular/core';
import { NgxPopoverCardComponent, NgxPopoverTabsComponent } from './popover-examples.component';

@Component({
  selector: 'ngx-popovers',
  styleUrls: ['./popovers.component.scss'],
  templateUrl: './popovers.component.html',
})
export class PopoversComponent {
  tabsComponent = NgxPopoverTabsComponent;
  cardComponent = NgxPopoverCardComponent;
  formComponent = NgxPopoverCardComponent;
}
