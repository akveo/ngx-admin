import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Location } from '@angular/common';

import { filter } from 'rxjs/operator/filter';

declare const ga: any;

@Injectable()
export class AnalyticsService {
  private enabled = true;

  constructor(private location: Location, private router: Router) {
  }

  trackPageViews() {
    if (this.enabled) {
      filter.call(this.router.events, (event) => event instanceof NavigationEnd)
        .subscribe(() => {
          ga('send', {hitType: 'pageview', page: this.location.path()});
        });
    }
  }

  trackEvent(eventName: string, eventVal: string = '') {
    if (this.enabled) {
      ga('send', 'event', eventName, eventVal);
    }
  }
}
