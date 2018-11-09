import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { BreadcrumbsService } from '../../../@core/utils/breadcrumbs.service';
import { breadcrumbsConfig } from '../../../pages/breadcrumbs.config';

@Component({
  selector: 'ngx-breadcrumbs',
  templateUrl: 'breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
})
export class BreadcrumbsComponent implements OnInit, OnChanges, OnDestroy {
  @Input() prefix: string = breadcrumbsConfig.prefix;

  public isHidden = false;
  public _urls: string[];
  public _routerSubscription: any;

  constructor(
    private router: Router,
    private breadcrumbService: BreadcrumbsService,
  ) { }

  ngOnInit(): void {
    this._urls = new Array();

    if (this.prefix.length > 0) {
      this._urls.unshift(this.prefix);
    }

    this._routerSubscription = this.router.events.subscribe((navigationEnd: NavigationEnd) => {

      if (navigationEnd instanceof NavigationEnd) {
        this._urls.length = 0; // Fastest way to clear out array
        this.generateBreadcrumbTrail(navigationEnd.urlAfterRedirects ? navigationEnd.urlAfterRedirects : navigationEnd.url);

        this.hideIfNoBreadcrumbs();
      }
    });

    breadcrumbsConfig.names.forEach((item) => {
      this.breadcrumbService.addFriendlyNameForRoute(item.route, item.name);
    });
    breadcrumbsConfig.regexNames.forEach((item) => {
      this.breadcrumbService.addFriendlyNameForRouteRegex(item.route, item.name);
    });
    breadcrumbsConfig.hide.forEach((item) => {
      this.breadcrumbService.hideRoute(item.route);
    });
    breadcrumbsConfig.regexHide.forEach((item) => {
      this.breadcrumbService.hideRouteRegex(item.route);
    });
    breadcrumbsConfig.noBreadcrumbs.forEach((item) => {
      this.breadcrumbService.removeBreadcrumbsRoute(item.route);
    });
    breadcrumbsConfig.regexNoBreadcrumbs.forEach((item) => {
      this.breadcrumbService.removeBreadcrumbsRouteRegex(item.route);
    });

    this._urls.length = 0;
    this.generateBreadcrumbTrail(this.router.url);

    this.hideIfNoBreadcrumbs();
  }

  ngOnChanges(changes: any): void {
    if (!this._urls) {
      return;
    }

    this._urls.length = 0;
    this.generateBreadcrumbTrail(this.router.url);
  }

  generateBreadcrumbTrail(url: string): void {
    if (!this.breadcrumbService.isRouteHidden(url)) {
      // Add url to beginning of array (since the url is being recursively broken down from full url to its parent)
      this._urls.unshift(url);
    }

    if (url.lastIndexOf('/') > 0) {
      this.generateBreadcrumbTrail(url.substr(0, url.lastIndexOf('/'))); // Find last '/' and add everything before it as a parent route
    } else if (this.prefix.length > 0) {
      this._urls.unshift(this.prefix);
    }
  }

  navigateTo(url: string): void {
    this.router.navigateByUrl(url);
  }

  friendlyName(url: string): string {
    return !url ? '' : this.breadcrumbService.getFriendlyNameForRoute(url);
  }

  ngOnDestroy(): void {
    this._routerSubscription.unsubscribe();
  }

  private hideIfNoBreadcrumbs() {
    if (this.breadcrumbService.breadcrumbsRemoved(this.router.url)) {
      this.isHidden = true;
    } else {
      this.isHidden = false;
    }
  }

}
