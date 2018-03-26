import { Directive, Input } from '@angular/core';

@Directive({
  // tslint:disable-next-line
  selector: '[leaflet]',
})
export class LeafletDirective {
  @Input() leafletOptions;
}
