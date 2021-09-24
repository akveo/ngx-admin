/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { Component, Inject, NgZone, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  filter,
  map,
  publishReplay,
  refCount,
  tap,
  takeWhile,
} from 'rxjs/operators';
import { NB_WINDOW } from '@nebular/theme';

import { NgxStructureService } from '../../../@theme/services/structure.service';
import { NgxTocStateService } from '../../../@theme/services/toc-state.service';
import {MetadataService} from '../../../../../src/app/@core/utils/metadata.service';

@Component({
  selector: 'ngx-admin-landing-page',
  templateUrl: './ngx-admin-landing-page.component.html',
  styleUrls: ['./ngx-admin-landing-page.component.scss'],
})
export class NgxAdminLandingPageComponent implements OnDestroy, OnInit {

  currentItem;
  private alive = true;

  constructor(@Inject(NB_WINDOW) private window,
              private ngZone: NgZone,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private structureService: NgxStructureService,
              private tocState: NgxTocStateService,
              private metaDataService: MetadataService) {
  }

  get showSettings() {
    return this.currentItem && this.currentItem.children
      .some((item) => ['markdown', 'component', 'tabbed'].includes(item.block));
  }

  ngOnInit() {
    this.handlePageNavigation();
    this.window.history.scrollRestoration = 'manual';
  }

  handlePageNavigation() {
    this.activatedRoute.params
      .pipe(
        takeWhile(() => this.alive),
        filter((params: any) => params.subPage),
        map((params: any) => {
          const slag = `${params.page}_${params.subPage}`;
          return this.structureService.findPageBySlag(this.structureService.getPreparedStructure(), slag);
        }),
        filter(item => item),
        tap((item: any) => {
          this.metaDataService.updateTitle(item.title);
          this.metaDataService.updateDescription(item.description);
          this.metaDataService.updateKeywords(item.keywords);
        }),
        publishReplay(),
        refCount(),
      )
      .subscribe((item) => {
        this.currentItem = item;
      });
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
