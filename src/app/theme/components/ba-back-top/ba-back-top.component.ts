import { AfterViewInit, Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'ba-back-top',
  styleUrls: ['./ba-back-top.component.scss'],
  template: `
    <i #baBackTop class="fa fa-angle-up back-top ba-back-top" title="Back to Top"></i>
  `
})
export class BaBackTop implements AfterViewInit {

  @Input() position: number = 400;
  @Input() showSpeed: number = 500;
  @Input() moveSpeed: number = 1000;

  @ViewChild('baBackTop') _selector: ElementRef;

  ngAfterViewInit(): void {
    this._onWindowScroll();
  }

  @HostListener('click')
  _onClick(): boolean {
    jQuery('html, body').animate({scrollTop: 0}, {duration: this.moveSpeed});
    return false;
  }

  @HostListener('window:scroll')
  _onWindowScroll(): void {
    const el: any = this._selector.nativeElement;
    window.scrollY > this.position ? jQuery(el).fadeIn(this.showSpeed) : jQuery(el).fadeOut(this.showSpeed);
  }
}
