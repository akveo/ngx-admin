import { Injectable } from '@angular/core';
import { of as observableOf,  Observable } from 'rxjs';

import { NbMenuItem } from '@nebular/theme';

@Injectable()
export class HeaderMenuService {

  private headerMenu: NbMenuItem[] = [
    {
      title: 'Home',
      link: '/',
    },
    {
      title: 'Docs',
      link: '/docs',
    },
    {
      title: 'Demo',
      url: 'https://www.akveo.com/ngx-admin?utm_campaign=ngx_admin%20-%20demo%20-%20ngx_admin%20docs&utm_source=ngx_admin&utm_medium=referral&utm_content=landing_main_section',
    },
  ];

  getHeaderMenu(): Observable<NbMenuItem[]> {
    return observableOf(this.headerMenu);
  }
}
