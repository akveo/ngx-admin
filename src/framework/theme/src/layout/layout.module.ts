import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
  NgaLayoutContentComponent,
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
  NgaLayoutContentComponent,
  NgaLayoutFooterComponent,
  NgaTabsetComponent,
  NgaTabComponent,
];

@NgModule({
  imports: [
    CommonModule,
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
