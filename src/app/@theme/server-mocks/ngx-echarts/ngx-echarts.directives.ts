import { Directive, Input } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[echarts]',
})
export class EchartsMockDirective {
  @Input()
  options
}
