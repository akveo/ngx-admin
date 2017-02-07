import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgaCardComponent } from './nga-card/nga-card.component';
import { NgaCardHeaderComponent } from './nga-card/nga-card-header/nga-card-header.component';
import { NgaCardBodyComponent } from './nga-card/nga-card-body/nga-card-body.component';
import { NgaCardFooterComponent } from './nga-card/nga-card-footer/nga-card-footer.component';

const NGA_LAYOUT_COMPONENTS = [
  NgaCardComponent,
  NgaCardHeaderComponent,
  NgaCardBodyComponent,
  NgaCardFooterComponent,
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
