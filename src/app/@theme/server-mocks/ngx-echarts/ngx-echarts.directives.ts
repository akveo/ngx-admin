import { Directive, Input } from '@angular/core';

@Directive({
  // tslint:disable-next-line
  selector: '[echarts]',
})
export class EchartsMockDirective {
  @Input()
  options
}
