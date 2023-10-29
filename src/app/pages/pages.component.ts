import {Component, OnDestroy, OnInit} from '@angular/core';

import {MENU_ITEMS} from './pages-menu';
import {NbMenuItem, NbMenuService} from '@nebular/theme';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';
import {MetadataService} from '../@core/utils/metadata.service';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
      <ngx-sample-layout>
          <nb-menu [items]="menu"></nb-menu>
          <router-outlet></router-outlet>
      </ngx-sample-layout>
  `,
})
export class PagesComponent implements OnInit, OnDestroy {
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private menuService: NbMenuService,
              private metaDataService: MetadataService) {
  }

  menu = MENU_ITEMS;

  ngOnInit() {
    if (window['dataLayer']) {
      window['dataLayer'].push({'event': 'optimize.activate'});
    }

    this.menuService
      .onItemSelect()
      .pipe(takeUntil(this.destroy$))
      .subscribe((data: { tag: string; item: NbMenuItem }) => {
        if (data.item.title !== 'E-commerce' && data.item.title !== 'IoT Dashboard')
          this.metaDataService.updateTitle(`Ngx-admin dashboard by Akveo | ${data.item.title}`);
          this.metaDataService.updateDescription('Ngx-admin is Angular 15+ Bootstrap 4+ admin dashboard template.' +
            ' Over 40+ Angular Components, 60+ Usage Examples and UI features.');
          this.metaDataService.updateKeywords('ngx-admin, ngx admin dashboard features, ngx admin forms,' +
            ' ngx-admin maps, ngx-admin UI features, ngx-admin tables, ngx admin overlays, ngx-admin extra components');
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
