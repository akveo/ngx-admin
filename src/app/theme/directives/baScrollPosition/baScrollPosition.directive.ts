import {Directive, Input, Output, EventEmitter, HostListener} from '@angular/core';

@Directive({
  selector: '[baScrollPosition]'
})
export class BaScrollPosition {

  @Input() public maxHeight:number;
  @Output() public scrollChange:EventEmitter<boolean> = new EventEmitter<boolean>();

  private _isScrolled:boolean;

  public ngOnInit():void {
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
