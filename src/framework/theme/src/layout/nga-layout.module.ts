import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// nga-card
import {
  NgaCardComponent,
  NgaCardHeaderComponent,
  NgaCardBodyComponent,
  NgaCardFooterComponent,
} from './nga-card';

// nga-layout
import {
  NgaLayoutComponent,
  NgaLayoutHeaderComponent,
  NgaLayoutColumnComponent,
  NgaLayoutSidebarComponent,
  NgaLayoutSidebarHeaderComponent,
  NgaLayoutSidebarContentComponent,
  NgaLayoutSidebarFooterComponent,
  NgaLayoutContentComponent,
  NgaLayoutFooterComponent,
} from './nga-layout';

// nga-tabset
import {
  NgaTabsetComponent,
  NgaTabsetTabComponent,
  NgaTabsetTabHeaderComponent,
  NgaTabsetTabContentComponent,
} from './nga-tabset';

const NGA_LAYOUT_COMPONENTS = [
  NgaCardComponent,
  NgaCardHeaderComponent,
  NgaCardBodyComponent,
  NgaCardFooterComponent,
  NgaLayoutComponent,
  NgaLayoutHeaderComponent,
  NgaLayoutColumnComponent,
  NgaLayoutSidebarComponent,
  NgaLayoutSidebarHeaderComponent,
  NgaLayoutSidebarContentComponent,
  NgaLayoutSidebarFooterComponent,
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
