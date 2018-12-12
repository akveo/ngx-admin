import { Injectable } from '@angular/core';
import { of as observableOf,  Observable } from 'rxjs';

import { NbMenuItem } from '@nebular/theme';

@Injectable()
export class HeaderMenuService {

  private headerMenu: NbMenuItem[] = [
    {
      title: 'Home',
      link: '/home',
    },
    {
      title: 'Demo',
      link: '/demo',
    },
    {
      title: 'Docs',
      link: '/docs',
    },
  ];

  getHeaderMenu(): Observable<NbMenuItem[]> {
    return observableOf(this.headerMenu);
  }
}
