import {Component, OnInit, OnDestroy} from '@angular/core';
import {NbAuthJWTToken, NbAuthService} from '@nebular/auth';
import {Router} from '@angular/router';
import {MENU_ITEMS} from './pages-menu';

@Component({
  selector: 'ngx-pages',
  template: `
    <ngx-sample-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-sample-layout>
  `,
})
export class PagesComponent implements OnInit, OnDestroy {

  menu = MENU_ITEMS;
  user = {};
  $isAuthenticated: any;

  constructor(private authService: NbAuthService, private router: Router) {
  }

  ngOnInit() {
    this.$isAuthenticated = this.authService.getToken()
      .subscribe((isAuth: NbAuthJWTToken) => {
        if (!isAuth.getValue()) {
          const link = ['/auth/login'];
          this.router.navigate(link);
        }
      });
  }


  ngOnDestroy(): void {
    this.$isAuthenticated.unsubscribe();
  }
}
