import { NgModule } from '@angular/core';
import { ToggleFullscreenDirective } from './toggle-fullscreen.directive';

@NgModule({
  declarations: [ToggleFullscreenDirective],
  exports: [ToggleFullscreenDirective],
})
export class ToggleFullscreenModule {
}
