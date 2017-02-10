import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// nga-card
import { NgaCardComponent } from './nga-card/nga-card.component';
import { NgaCardHeaderComponent } from './nga-card/nga-card-header/nga-card-header.component';
import { NgaCardBodyComponent } from './nga-card/nga-card-body/nga-card-body.component';
import { NgaCardFooterComponent } from './nga-card/nga-card-footer/nga-card-footer.component';

// nga-layout
import { NgaLayoutComponent } from './nga-layout/nga-layout.component';
import { NgaLayoutSidebarComponent } from './nga-layout/nga-layout-sidebar/nga-layout-sidebar.component';
import { NgaLayoutContentComponent } from './nga-layout/nga-layout-content/nga-layout-content.component';

const NGA_LAYOUT_COMPONENTS = [
  NgaCardComponent,
  NgaCardHeaderComponent,
  NgaCardBodyComponent,
  NgaCardFooterComponent,
  NgaLayoutComponent,
  NgaLayoutSidebarComponent,
  NgaLayoutContentComponent,
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
