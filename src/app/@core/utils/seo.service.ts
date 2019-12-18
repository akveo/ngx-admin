import { Injectable, Inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { filter } from 'rxjs/operators';

@Injectable()
export class SeoService {

  private linkCanonical: HTMLLinkElement;

  constructor(
    private router: Router,
    @Inject(DOCUMENT) private dom,
    ) {
    this.createCanonicalTag();
  }

  createCanonicalTag() {
    this.linkCanonical = this.dom.createElement('link');
    this.linkCanonical.setAttribute('rel', 'canonical');
    this.dom.head.appendChild(this.linkCanonical);
    this.linkCanonical.setAttribute('href', this.dom.URL);
  }

  trackCanonicalChanges() {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
    )
      .subscribe(() => {
        this.linkCanonical.setAttribute('href', this.dom.URL);
      });
  }

}
