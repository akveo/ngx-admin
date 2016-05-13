import {Component, HostListener, Input, ElementRef} from '@angular/core';

@Component({
  selector: 'ba-back-top',
  styles: [require('./baBackTop.scss')],
  template: `
    <i class="fa fa-angle-up back-top ba-back-top" title="Back to Top"></i>
  `
})
export class BaBackTop {

  @Input() position:number = 400;
  @Input() showSpeed:number = 500;
  @Input() moveSpeed:number = 1000;

  constructor (private _elementRef:ElementRef) {
    this._onWindowScroll();
  }

  @HostListener('click')
  _onClick():boolean {
    $('html, body').animate({scrollTop:this.position}, {duration:this.moveSpeed});
    return false;
  }

  @HostListener('window:scroll')
  _onWindowScroll():void {
    let el = this._elementRef.nativeElement.querySelector('.ba-back-top');
    window.scrollY > this.position ? $(el).fadeIn(this.showSpeed) : $(el).fadeOut(this.showSpeed);
  }
}
