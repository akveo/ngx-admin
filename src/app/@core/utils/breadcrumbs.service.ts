import { Injectable } from '@angular/core';

@Injectable()
export class BreadcrumbsService {

  private routesFriendlyNames: Map<string, string> = new Map<string, string>();
  private routesFriendlyNamesRegex: Map<string, string> = new Map<string, string>();
  private routesWithCallback: Map<string, (string: string) => string> = new Map<string, (string: string) => string>();
  private routesWithCallbackRegex: Map<string, (string: string) => string> = new Map<string, (string: string) => string>();
  private hideRoutes: any = new Array<string>();
  private hideRoutesRegex: any = new Array<string>();
  private noBreadcrumbsRoutes: any = new Array<string>();
  private noBreadcrumbsRoutesRegex: any = new Array<string>();

  /**
   * Specify a friendly name for the corresponding route.
   *
   * @param route
   * @param name
   */
  addFriendlyNameForRoute(route: string, name: string): void {
    this.routesFriendlyNames.set(route, name);
  }

  /**
   * Specify a friendly name for the corresponding route matching a regular expression.
   *
   * @param route
   * @param name
   */
  addFriendlyNameForRouteRegex(routeRegex: string, name: string): void {
    this.routesFriendlyNamesRegex.set(routeRegex, name);
  }

  /**
   * Specify a callback for the corresponding route.
   * When a matching url is navigated to, the callback function is invoked to get the name to be displayed in the breadcrumb.
   */
  addCallbackForRoute(route: string, callback: (id: string) => string): void {
    this.routesWithCallback.set(route, callback);
  }

  /**
   * Specify a callback for the corresponding route matching a regular expression.
   * When a mathing url is navigatedd to, the callback function is invoked to get the name to be displayed in the breadcrumb.
   */
  addCallbackForRouteRegex(routeRegex: string, callback: (id: string) => string): void {
    this.routesWithCallbackRegex.set(routeRegex, callback);
  }

  /**
   * Show the friendly name for a given route (url). If no match is found the url (without the leading '/') is shown.
   *
   * @param route
   * @returns {*}
   */
  getFriendlyNameForRoute(route: string): string {
    let name: string;
    const routeEnd = route.substr(route.lastIndexOf('/') + 1, route.length);

    this.routesFriendlyNames.forEach((value, key, map) => {
      if (key === route) {
        name = value;
      }
    });

    this.routesFriendlyNamesRegex.forEach((value, key, map) => {
      if (new RegExp(key).exec(route)) {
        name = value;
      }
    });

    this.routesWithCallback.forEach((value, key, map) => {
      if (key === route) {
        name = value(routeEnd);
      }
    });

    this.routesWithCallbackRegex.forEach((value, key, map) => {
      if (new RegExp(key).exec(route)) {
        name = value(routeEnd);
      }
    });

    return name ? name : routeEnd;
  }

  /**
   * Specify a route (url) that should not be shown in the breadcrumb.
   */
  hideRoute(route: string): void {
    if (this.hideRoutes.indexOf(route) === -1) {
      this.hideRoutes.push(route);
    }
  }

  /**
   * Specify a route (url) regular expression that should not be shown in the breadcrumb.
   */
  hideRouteRegex(routeRegex: string): void {
    if (this.hideRoutesRegex.indexOf(routeRegex) === -1) {
      this.hideRoutesRegex.push(routeRegex);
    }
  }

  /**
   * Returns true if a route should be hidden.
   */
  isRouteHidden(route: string): boolean {
    let hide = this.hideRoutes.indexOf(route) > -1;

    this.hideRoutesRegex.forEach((value: any) => {
      if (new RegExp(value).exec(route)) {
        hide = true;
      }
    });

    return hide;
  }

  /**
   * Specify a route (url) that should not show the breadcrumbs component.
   */
  removeBreadcrumbsRoute(route: string): void {
    if (this.noBreadcrumbsRoutes.indexOf(route) === -1) {
      this.noBreadcrumbsRoutes.push(route);
    }
  }

  /**
   * Specify a route (url) regular expression that should not show the breadcrumbs component.
   */
  removeBreadcrumbsRouteRegex(routeRegex: string): void {
    if (this.noBreadcrumbsRoutesRegex.indexOf(routeRegex) === -1) {
      this.noBreadcrumbsRoutesRegex.push(routeRegex);
    }
  }

  /**
   * Returns true if a route should not show the breadcrumbs component.
   */
  breadcrumbsRemoved(route: string): boolean {
    let remove = this.noBreadcrumbsRoutes.indexOf(route) > -1;

    this.noBreadcrumbsRoutesRegex.forEach((value: any) => {
      if (new RegExp(value).exec(route)) {
        remove = true;
      }
    });

    return remove;
  }

}
