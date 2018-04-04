import { Directive, Input } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[leaflet]',
})
export class LeafletDirective {
  @Input() leafletOptions;
}
