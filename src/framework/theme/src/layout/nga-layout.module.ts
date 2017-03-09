import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// nga-card
import {
  NgaCardComponent,
  NgaCardHeaderComponent,
  NgaCardBodyComponent,
  NgaCardFooterComponent,
} from './nga-card/nga-card.component';

// nga-layout
import {
  NgaLayoutComponent,
  NgaLayoutHeaderComponent,
  NgaLayoutColumnComponent,
  NgaLayoutContentComponent,
  NgaLayoutFooterComponent,
} from './nga-layout/nga-layout.component';

// nga-sidebar
import {
  NgaSidebarComponent,
  NgaSidebarHeaderComponent,
  NgaSidebarContentComponent,
  NgaSidebarFooterComponent,
} from './nga-sidebar/nga-sidebar.component';

// nga-tabset
import {
  NgaTabsetComponent,
} from './nga-tabset/nga-tabset.component';

// nga-tabset-tab
import {
  NgaTabsetTabComponent,
  NgaTabsetTabHeaderComponent,
  NgaTabsetTabContentComponent,
} from './nga-tabset-tab/nga-tabset-tab.component';

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
  NgaTabsetTabComponent,
  NgaTabsetTabHeaderComponent,
  NgaTabsetTabContentComponent,
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
