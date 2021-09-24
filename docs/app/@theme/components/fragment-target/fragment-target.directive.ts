import { Directive, ElementRef, Inject, Input, OnDestroy, OnInit, PLATFORM_ID, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NB_WINDOW, NbLayoutScrollService } from '@nebular/theme';
import { debounce, filter, publish, refCount, takeUntil, tap } from 'rxjs/operators';
import { Subject, timer } from 'rxjs';

import { NgxVisibilityService } from '../../services/visibility.service';

const OBSERVER_OPTIONS = { rootMargin: '-100px 0px 0px' };

@Directive({
  // tslint:disable-next-line
  selector: '[ngxFragment]',
})
export class NgxFragmentTargetDirective implements OnInit, OnDestroy {

  private readonly marginFromTop = 120;
  private isCurrentlyViewed: boolean = false;
  private isScrolling: boolean = false;
  private destroy$ = new Subject<void>();

  @Input() ngxFragment: string;
  @Input() ngxFragmentClass: string;
  @Input() ngxFragmentSync: boolean = true;

  constructor(
    private activatedRoute: ActivatedRoute,
    @Inject(NB_WINDOW) private window,
    private el: ElementRef<HTMLElement>,
    private renderer: Renderer2,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId,
    private visibilityService: NgxVisibilityService,
    private scrollService: NbLayoutScrollService,
  ) {}

  ngOnInit() {
    this.activatedRoute.fragment
      .pipe(
        publish(null),
        refCount(),
        takeUntil(this.destroy$),
        filter(() => this.ngxFragmentSync),
      )
      .subscribe((fragment: string) => {
        if (fragment && this.ngxFragment === fragment) {
          this.selectFragment();
        } else {
          this.deselectFragment();
        }
      });

    this.visibilityService.isTopmostVisible(this.el.nativeElement, OBSERVER_OPTIONS)
      .pipe(takeUntil(this.destroy$))
      .subscribe((isTopmost: boolean) => {
        this.isCurrentlyViewed = isTopmost;
        if (isTopmost) {
          this.updateUrl();
        }
      });

    this.scrollService.onScroll()
      .pipe(
        tap(() => this.isScrolling = true),
        debounce(() => timer(100)),
        takeUntil(this.destroy$),
      )
      .subscribe(() => this.isScrolling = false);
  }

  selectFragment() {
    this.ngxFragmentClass && this.renderer.addClass(this.el.nativeElement, this.ngxFragmentClass);

    const shouldScroll = !this.isCurrentlyViewed || !this.isScrolling;
    if (shouldScroll) {
      this.window.scrollTo(0, this.el.nativeElement.offsetTop - this.marginFromTop);
    }
  }

  deselectFragment() {
    this.renderer.removeClass(this.el.nativeElement, this.ngxFragmentClass);
  }

  updateUrl() {
    const urlFragment = this.activatedRoute.snapshot.fragment;
    const alreadyThere = urlFragment && urlFragment.includes(this.ngxFragment);
    if (!alreadyThere) {
      this.router.navigate([], { fragment: this.ngxFragment, replaceUrl: true });
    }
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    this.visibilityService.unobserve(this.el.nativeElement, OBSERVER_OPTIONS);
  }
}
