import {Directive, Input, Output, EventEmitter, HostListener} from 'angular2/core';

@Directive({
  selector: '[scrollPosition]'
})
export class ScrollPosition {
  @Input() maxHeight:Number;
  @Output() scrollChange:EventEmitter<Boolean> = new EventEmitter<Boolean>();

  private _isScrolled:Boolean;

  ngOnInit() {
    this.onWindowScroll();
  }

  @HostListener('window:scroll')
  onWindowScroll():void {
    let isScrolled = window.scrollY > this.maxHeight;
    if (isScrolled !== this._isScrolled) {
      this._isScrolled = isScrolled;
      this.scrollChange.emit(isScrolled);
    }
  }
}
