import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';

import { BaMenuService } from '../theme';
import { PAGES_MENU } from './pages.menu';

@Component({
  selector: 'pages',
  template: `
    <ba-sidebar></ba-sidebar>
    <ba-page-top></ba-page-top>
    <div class="al-main">
      <div class="al-content">
        <ba-content-top></ba-content-top>
        <router-outlet></router-outlet>
      </div>
      <a href="http://akveo.com/ngx-admin?utm_source=ng2-admin&utm_medium=banner" 
         target="_blank" class="banner-container" *ngIf="showBanner()">
        <div class="banner">
          <div class="title">
            Hey, we've just released a new Angular 4+ version, check out here!
          </div>
          <i class="close ion-close" (click)="closeBanner($event)"></i>
        </div>
      </a>
    </div>
    <footer class="al-footer clearfix">
      <div class="al-footer-right" translate>{{'general.created_with'}} <i class="ion-heart"></i></div>
      <div class="al-footer-main clearfix">
        <div class="al-copy">&copy; <a href="http://akveo.com" translate>{{'general.akveo'}}</a> 2016</div>
        <ul class="al-share clearfix">
          <li><a href="https://www.facebook.com/akveo" target="_blank"><i class="socicon socicon-facebook"></i></a></li>
          <li><a href="https://twitter.com/akveo_inc" target="_blank"><i class="socicon socicon-twitter"></i></a></li>
          <li><a href="mailto:contact@akveo.com"><i class="socicon socicon-google"></i></a></li>
          <li><a href="https://github.com/akveo" target="_blank"><i class="socicon socicon-github"></i></a></li>
        </ul>
      </div>
    </footer>
    <ba-back-top position="200"></ba-back-top>
  `,
  styles: [`
    .banner-container {
      position: fixed;
      bottom: 50px;
      right: 50px;
      width: 568px;
      height: 322px;
      background-image: url('assets/img/ngx-admin-banner.png');
      background-size: contain;
    }
    .banner {
      position: relative;
      width: 100%;
      height: 100%;
    }
    .title {
      position: absolute;
      top: 40px;
      left: 10%;
      width: 80%;
      text-align: center;
      font-size: 1.75rem;
      line-height: 1.25;
      color: #ffffff;
    }
    .close {
      position: absolute;
      top: 10px;
      right: 10px;
      padding: 10px;
      cursor: pointer;
      text-shadow: none;
      color: #ffffff;
      font-size: 1rem;
    }
  `],
})
export class Pages implements OnInit {

  constructor(private _menuService: BaMenuService) {
  }

  ngOnInit() {
    this._menuService.updateMenuByRoutes(<Routes>PAGES_MENU);
  }

  showBanner() {
    return !localStorage.getItem('hideBanner');
  }

  closeBanner(event: any) {
    localStorage.setItem('hideBanner', 'true');
    event.preventDefault();
    event.stopPropagation();
  }
}
