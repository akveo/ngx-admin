import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { NB_WINDOW } from '@nebular/theme';
import { EMPTY, Observable, Subject } from 'rxjs';
import { distinctUntilChanged, filter, finalize, map, publish, refCount, takeUntil, tap } from 'rxjs/operators';

interface ObserverWithStream {
  intersectionObserver: IntersectionObserver;
  visibilityChange$: Observable<IntersectionObserverEntry[]>;
}

@Injectable()
export class NgxVisibilityService {

  private readonly isBrowser: boolean;
  private readonly supportsIntersectionObserver: boolean;

  private readonly visibilityObservers = new Map<IntersectionObserverInit, ObserverWithStream>();
  private readonly topmostObservers = new Map<IntersectionObserverInit, Observable<Element>>();
  private readonly visibleElements = new Map<IntersectionObserverInit, Element[]>();
  private readonly unobserve$ = new Subject<{ target: Element, options: IntersectionObserverInit }>();

  constructor(
    @Inject(PLATFORM_ID) platformId: Object,
    @Inject(NB_WINDOW) private window,
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
    this.supportsIntersectionObserver = !!this.window.IntersectionObserver;
  }

  visibilityChange(target: Element, options: IntersectionObserverInit): Observable<IntersectionObserverEntry> {
    if (!this.isBrowser || !this.supportsIntersectionObserver) {
      return EMPTY;
    }

    let visibilityObserver = this.visibilityObservers.get(options);
    if (!visibilityObserver) {
      visibilityObserver = this.addVisibilityChangeObserver(options);
    }
    const { intersectionObserver, visibilityChange$ } = visibilityObserver;
    intersectionObserver.observe(target);

    const targetUnobserved$ = this.unobserve$.pipe(filter(e => e.target === target && e.options === options));

    return visibilityChange$.pipe(
      map((entries: IntersectionObserverEntry[]) => entries.find(entry => entry.target === target)),
      filter((entry: IntersectionObserverEntry | undefined) => !!entry),
      finalize(() => {
        intersectionObserver.unobserve(target);
        this.removeFromVisible(options, target);
      }),
      takeUntil(targetUnobserved$),
    );
  }

  isTopmostVisible(target: Element, options: IntersectionObserverInit): Observable<boolean> {
    if (!this.isBrowser || !this.supportsIntersectionObserver) {
      return EMPTY;
    }

    const targetUnobserve$ = this.unobserve$.pipe(filter(e => e.target === target && e.options === options));
    const topmostChange$ = this.topmostObservers.get(options) || this.addTopmostChangeObserver(options);

    const { intersectionObserver } = this.visibilityObservers.get(options);
    intersectionObserver.observe(target);

    return topmostChange$.pipe(
      finalize(() => {
        intersectionObserver.unobserve(target);
        this.removeFromVisible(options, target);
      }),
      map((element: Element) => element === target),
      distinctUntilChanged(),
      takeUntil(targetUnobserve$),
    );
  }

  unobserve(target: Element, options: IntersectionObserverInit): void {
    this.unobserve$.next({ target, options });
  }

  private addVisibilityChangeObserver(options: IntersectionObserverInit): ObserverWithStream {
    const visibilityChange$ = new Subject<IntersectionObserverEntry[]>();
    const intersectionObserver = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => visibilityChange$.next(entries),
      options,
    );
    const refCountedObserver = visibilityChange$.pipe(
      finalize(() => {
        this.visibilityObservers.delete(options);
        this.visibleElements.delete(options);
        intersectionObserver.disconnect();
      }),
      tap((entries: IntersectionObserverEntry[]) => this.updateVisibleItems(options, entries)),
      publish(),
      refCount(),
    );

    const observerWithStream = { intersectionObserver, visibilityChange$: refCountedObserver };
    this.visibilityObservers.set(options, observerWithStream);
    return observerWithStream;
  }

  private addTopmostChangeObserver(options: IntersectionObserverInit): Observable<Element> {
    const { visibilityChange$ } = this.visibilityObservers.get(options) || this.addVisibilityChangeObserver(options);

    const topmostChange$ = visibilityChange$.pipe(
      finalize(() => this.topmostObservers.delete(options)),
      map(() => this.findTopmostElement(options)),
      distinctUntilChanged(),
      publish(),
      refCount(),
    );

    this.topmostObservers.set(options, topmostChange$);
    return topmostChange$;
  }

  private updateVisibleItems(options, entries: IntersectionObserverEntry[]) {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        this.addToVisible(options, entry.target);
      } else {
        this.removeFromVisible(options, entry.target);
      }
    }
  }

  private addToVisible(options: IntersectionObserverInit, element: Element): void {
    if (!this.visibleElements.has(options)) {
      this.visibleElements.set(options, []);
    }

    const existing = this.visibleElements.get(options);
    if (existing.indexOf(element) === -1) {
      existing.push(element);
    }
  }

  private removeFromVisible(options: IntersectionObserverInit, element: Element): void {
    const visibleEntries = this.visibleElements.get(options);
    if (!visibleEntries) {
      return;
    }

    const index = visibleEntries.indexOf(element);
    if (index !== -1) {
      visibleEntries.splice(index, 1);
    }
  }

  private findTopmostElement(options: IntersectionObserverInit): Element | undefined {
    const visibleElements = this.visibleElements.get(options);
    if (!visibleElements) {
      return;
    }

    let topmost: Element;
    for (const element of visibleElements) {
      if (!topmost || element.getBoundingClientRect().top < topmost.getBoundingClientRect().top) {
        topmost = element;
      }
    }
    return topmost;
  }
}
