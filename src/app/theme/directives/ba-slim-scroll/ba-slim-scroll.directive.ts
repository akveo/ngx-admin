import { Directive, ElementRef, EventEmitter, Input, OnChanges, Output } from '@angular/core';

import 'jquery-slimscroll';

@Directive({
  selector: '[baSlimScroll]'
})
export class BaSlimScroll implements OnChanges {

  @Input() public baSlimScrollOptions: any;

  constructor(private _elementRef: ElementRef) { }

  ngOnChanges(changes) {
    this._scroll();
  }

  private _scroll() {
    this._destroy();
    this._init();
  }

  private _init() {
    jQuery(this._elementRef.nativeElement).slimScroll(this.baSlimScrollOptions);
  }

  private _destroy() {
    jQuery(this._elementRef.nativeElement).slimScroll({ destroy: true });
  }
}
