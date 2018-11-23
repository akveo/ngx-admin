import { Inject, Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Location } from '@angular/common';
import { filter } from 'rxjs/operators';
import { NB_WINDOW } from '@nebular/theme';

declare const ga: any;

@Injectable()
export class AnalyticsService {
  private enabled = false;

  constructor(@Inject(NB_WINDOW) private window,
              private location: Location,
              private router: Router) {
    this.enabled = this.window.location.href.indexOf('akveo.com') >= 0;
  }

  trackPageViews() {
    if (this.enabled) {
      this.router.events.pipe(
        filter((event) => event instanceof NavigationEnd),
      )
        .subscribe(() => {
          this.gtm({'pageview': this.location.path()});
        });
    }
  }

  trackEvent(eventName: string, eventVal: string = '') {
    if (this.enabled) {
      this.gtm({ event: eventName, value: eventVal });
    }
  }

  private isGaLoaded() {
    return this.window.ga;
  }

  private gtm(params) {
    if (this.isGaLoaded()) {
      this.window.dataLayer.push(params);
    } else {
      setTimeout(() => {
        this.gtm(params);
      }, 500);
    }
  }
}
