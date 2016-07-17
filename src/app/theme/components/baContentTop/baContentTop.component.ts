import {Component} from '@angular/core';

import {AppState} from "../../../app.state";
import {Router} from "@angular/router";

@Component({
  selector: 'ba-content-top',
  styles: [require('./baContentTop.scss')],
  template: require('./baContentTop.html'),
})
export class BaContentTop {

  public activePageTitle:string = '';
  public breadcrumb = [];

  private _allowOverdrivePageTitle: boolean = true;
  private _allowOverdriveBreadcrumb: boolean = true;
  private _urlBlocked: string = '';

  constructor(private _state:AppState, private _route: Router) {
    this._state.subscribe('menu.activeLink', (activeLink) => {
      if (activeLink) {
        // reset block
        if (this._allowOverdrivePageTitle == false && this._urlBlocked !== this._route.url){
          this._allowOverdrivePageTitle = true;
        }

        if (this._allowOverdriveBreadcrumb == false && this._urlBlocked !== this._route.url){
          this._allowOverdriveBreadcrumb = true;
        }

        // Set page title if allow to overdrive
        if (this._allowOverdrivePageTitle) {
          this.activePageTitle = activeLink.pageTitle;
        }

        // Set breadcrumb if allow to overdrive
        if (this._allowOverdriveBreadcrumb) {
          this.breadcrumb = [];
          if (activeLink.breadcrumb) {
            this.breadcrumb = activeLink.breadcrumb;
          }
        }
      }
    });

    this._state.subscribe('page.activePage', (activePage) => {
      if (activePage) {
        if (activePage.title){
          this.activePageTitle = activePage.title;
          this._allowOverdrivePageTitle = false;
          this._urlBlocked = this._route.url;
        }

        if (activePage.breadcrumb){
          if (!Array.isArray(activePage.breadcrumb)){
            activePage.breadcrumb = [activePage.breadcrumb];
          }
          this.breadcrumb = activePage.breadcrumb;
          this._allowOverdriveBreadcrumb = false;
          this._urlBlocked = this._route.url;
        }
      }
    });
  }

  public resolveURL(url):string{
    var base = [];

    if(url[0]==='/'){
      return url;
    }
    else{
      base = window.location.href.substr(window.location.href.indexOf('#') + 1).split('/');
      base.pop(); // remove current page
    }

    url = url.split('/');
    for(var i=0; i < url.length; ++i){
      if(url[i] === '.' || url[i] === ''){
        continue;
      }
      if(url[i] === '..'){
        if(typeof base.pop() === null || base.length===0){
          return '/';
        }
      }
      else{ // child directory
        base.push(url[i]);
      }
    }
    return base.join('/');
  }
}
