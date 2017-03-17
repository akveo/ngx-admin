import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// nga-card
import {
  NgaCardComponent,
  NgaCardHeaderComponent,
  NgaCardBodyComponent,
  NgaCardFooterComponent,
} from './card/card.component';

// nga-layout
import {
  NgaLayoutComponent,
  NgaLayoutHeaderComponent,
  NgaLayoutColumnComponent,
  NgaLayoutFooterComponent,
} from './layout/layout.component';

// nga-sidebar
import {
  NgaSidebarComponent,
  NgaSidebarHeaderComponent,
  NgaSidebarContentComponent,
  NgaSidebarFooterComponent,
} from './sidebar/sidebar.component';

// nga-tabset
import {
  NgaTabsetComponent,
  NgaTabComponent,
} from './tabset/tabset.component';

// nga-route-tabset
import { NgaRouteTabsetComponent } from './route-tabset/route-tabset.component';

// nga-menu
import { NgaMenuComponent, NgaMenuItemComponent } from './menu/menu.component';

const NGA_LAYOUT_COMPONENTS = [
  NgaCardComponent,
  NgaCardHeaderComponent,
  NgaCardBodyComponent,
  NgaCardFooterComponent,
  NgaLayoutComponent,
  NgaLayoutHeaderComponent,
  NgaLayoutColumnComponent,
  NgaSidebarComponent,
  NgaSidebarHeaderComponent,
  NgaSidebarContentComponent,
  NgaSidebarFooterComponent,
  NgaLayoutFooterComponent,
  NgaTabsetComponent,
  NgaTabComponent,
  NgaRouteTabsetComponent,
  NgaMenuComponent,
  NgaMenuItemComponent,
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    ...NGA_LAYOUT_COMPONENTS,
  ],
  exports: [
    ...NGA_LAYOUT_COMPONENTS,
  ],
})
export class NgaLayoutModule {
}
