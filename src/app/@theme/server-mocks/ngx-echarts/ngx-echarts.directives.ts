import { Directive, Input } from '@angular/core';
import { LoadingPlaceholder } from '../loader/loader.directive';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[echarts]',
})
export class EchartsMockDirective extends LoadingPlaceholder {
  @Input() options;
}
