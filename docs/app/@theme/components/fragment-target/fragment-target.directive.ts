import { Directive, ElementRef, Inject, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NB_WINDOW } from '@nebular/theme';
import { takeWhile, publish, refCount } from 'rxjs/operators';
import { NgxTocElement, NgxTocStateService } from '../../services/toc-state.service';
import { delay } from 'rxjs/internal/operators';

@Directive({
  // tslint:disable-next-line
  selector: '[ngxFragment]',
})
export class NgxFragmentTargetDirective implements OnInit, OnDestroy, NgxTocElement {
  @Input() ngxFragment: string;
  @Input() ngxFragmentClass: string;
  @Input() ngxFragmentSync: boolean = true;

  private inView = false;
  private alive = true;
  private readonly marginFromTop = 120;

  get fragment(): string {
    return this.ngxFragment;
  }

  get element(): any {
    return this.el.nativeElement;
  }

  get y(): number {
    return this.element.getBoundingClientRect().y;
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    @Inject(NB_WINDOW) private window,
    private tocState: NgxTocStateService,
    private el: ElementRef,
    private renderer: Renderer2,
  ) {}

  ngOnInit() {
    this.ngxFragmentSync && this.tocState.add(this);

    this.activatedRoute.fragment
      .pipe(publish(null), refCount(), takeWhile(() => this.alive), delay(10))
      .subscribe((fragment: string) => {
        if (fragment && this.fragment === fragment && !this.inView) {
          this.selectFragment();
        } else {
          this.deselectFragment();
        }
      });
  }

  selectFragment() {
    this.ngxFragmentClass && this.renderer.addClass(this.el.nativeElement, this.ngxFragmentClass);
    this.setInView(true);
    this.window.scrollTo(0, this.el.nativeElement.offsetTop - this.marginFromTop);
  }

  deselectFragment() {
    this.renderer.removeClass(this.el.nativeElement, this.ngxFragmentClass);
  }

  setInView(val: boolean) {
    this.inView = val;
  }

  ngOnDestroy() {
    this.alive = false;
    this.ngxFragmentSync && this.tocState.remove(this);
  }
}
