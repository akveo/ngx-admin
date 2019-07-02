import { Inject, Injectable, OnDestroy } from '@angular/core';
import { coerceCssPixelValue } from '@angular/cdk/coercion';
import {
  NB_WINDOW,
  NbLayoutComponent,
  NbLayoutDimensions,
  NbLayoutRulerService,
  NbLayoutScrollService,
  NbViewportRulerAdapter,
} from '@nebular/theme';
import { filter, map, take, takeUntil } from 'rxjs/operators';
import { fromEvent as observableFromEvent, merge, Subject } from 'rxjs';

@Injectable()
export class WindowModeBlockScrollService implements OnDestroy {

  private destroy$ = new Subject<void>();

  private blockEnabled = false;
  private unblock$ = new Subject<void>();

  private container: HTMLElement;
  private content: HTMLElement;

  private previousScrollPosition: { top: number, left: number };
  private previousContainerStyles: { overflowY: string };
  private previousContentStyles: { left: string, top: string, width: string, overflow: string, position: string };

  constructor(
    private scrollService: NbLayoutScrollService,
    private viewportRuler: NbViewportRulerAdapter,
    private layout: NbLayoutRulerService,
    @Inject(NB_WINDOW) private window,
  ) {}

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    this.unblock$.complete();
  }

  register(layout: NbLayoutComponent) {
    this.container = layout.scrollableContainerRef.nativeElement;
    this.content = this.container.children[0] as HTMLElement;

    this.scrollService.onScrollableChange()
      .pipe(
        filter(() => layout.withScrollValue),
        map((scrollable: boolean) => !scrollable),
        takeUntil(this.destroy$),
      )
      .subscribe((shouldBlock: boolean) => {
        if (shouldBlock) {
          this.blockScroll();
        } else {
          this.unblockScroll();
        }
      });
  }

  blockScroll() {
    if (!this.canBeBlocked()) {
      return;
    }

    this.previousScrollPosition = this.viewportRuler.getViewportScrollPosition();
    this.backupStyles();

    this.container.style.overflowY = 'scroll';
    this.content.style.overflow = 'hidden';
    this.content.style.position = 'fixed';
    this.updateContentSizeAndPosition();

    observableFromEvent(this.window, 'resize')
      .pipe(
        takeUntil(merge(this.destroy$, this.unblock$).pipe(take(1))),
      )
      .subscribe(() => this.updateContentSizeAndPosition());

    this.blockEnabled = true;
  }

  unblockScroll() {
    if (this.blockEnabled) {
      this.restoreStyles();
      this.scrollService.scrollTo(this.previousScrollPosition.left, this.previousScrollPosition.top);
      this.unblock$.next();
      this.blockEnabled = false;
    }
  }

  private canBeBlocked(): boolean {
    if (this.blockEnabled) {
      return false;
    }

    const { height: containerHeight } = this.viewportRuler.getViewportSize();
    return this.content.scrollHeight > containerHeight;
  }

  private updateContentSizeAndPosition() {
    const { top, left } = this.container.getBoundingClientRect();
    this.content.style.left = coerceCssPixelValue(-this.previousScrollPosition.left + left);
    this.content.style.top = coerceCssPixelValue(-this.previousScrollPosition.top + top);
    this.layout.getDimensions()
      .pipe(
        map(({ clientWidth }: NbLayoutDimensions) => coerceCssPixelValue(clientWidth)),
        take(1),
      )
      .subscribe((clientWidth: string) => this.content.style.width = clientWidth);
  }

  private backupStyles() {
    this.previousContainerStyles = { overflowY: this.container.style.overflowY };
    this.previousContentStyles = {
      overflow: this.content.style.overflow,
      position: this.content.style.position,
      left: this.content.style.left,
      top: this.content.style.top,
      width: this.content.style.width,
    };
  }

  private restoreStyles() {
    this.container.style.overflowY = this.previousContainerStyles.overflowY;
    this.content.style.overflow = this.previousContentStyles.overflow;
    this.content.style.position = this.previousContentStyles.position;
    this.content.style.left = this.previousContentStyles.left;
    this.content.style.top = this.previousContentStyles.top;
    this.content.style.width = this.previousContentStyles.width;
  }
}
