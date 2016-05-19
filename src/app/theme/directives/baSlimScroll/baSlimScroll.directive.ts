import {Directive, Input, Output, ElementRef, EventEmitter} from '@angular/core';

import './baSlimScroll.loader.ts';

@Directive({
  selector: '[baSlimScroll]'
})
export class BaSlimScroll {

  @Input() public baSlimScrollOptions:Object;

  constructor(private _elementRef:ElementRef) {
  }

  ngOnChanges(changes) {
    this._scroll();
  }

  private _scroll() {
    this._destroy();
    this._init();
  }

  private _init() {
    $(this._elementRef.nativeElement).slimScroll(this.baSlimScrollOptions);
  }

  private _destroy() {
    $(this._elementRef.nativeElement).slimScroll({ destroy: true });
  }
}
