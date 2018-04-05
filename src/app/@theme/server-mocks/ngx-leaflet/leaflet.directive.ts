import { Directive, Input } from '@angular/core';
import { LoadingPlaceholder } from '../loader/loader.directive';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[leaflet]',
})
export class LeafletDirective extends LoadingPlaceholder {
  @Input() leafletOptions;
}
