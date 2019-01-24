/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { Component, HostBinding, Inject, OnInit } from '@angular/core';
import { NB_WINDOW } from '@nebular/theme';

const HIDE_BANNER_KEY = 'HIDE_PRODUCT_HUNT_BANNER';

@Component({
  selector: 'ngx-release-banner',
  template: `
    <div class="heading-with-icon">
      <img class="icon" src="assets/img/product-hunt-cat.png" alt="Product Hunt">
      <div class="banner-content">
        <h2 class="banner-heading">ngx-admin is on Product Hunt today!</h2>
        <p class="cta">Please
          <a class="cta-link"
             href="https://www.producthunt.com/posts/ngx-admin"
             target="_blank">
            share
          </a>
          your feedback :)
        </p>
      </div>
      <button class="close-button" aria-label="close" (click)="closeBanner()">
        <span class="nb-close"></span>
      </button>
    </div>
  `,
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {

  storage: Storage;

  @HostBinding('attr.hidden')
  isHidden: true | null = null;

  @HostBinding('attr.dir')
  dir = 'ltr';

  constructor(
    @Inject(NB_WINDOW) private window,
  ) {}

  ngOnInit() {
    this.storage = this.window.localStorage;

    this.isHidden = this.storage && this.storage.getItem(HIDE_BANNER_KEY)
      ? true
      : null;
  }

  closeBanner() {
    if (this.storage) {
      this.storage.setItem(HIDE_BANNER_KEY, 'true');
    }
    this.isHidden = true;
  }
}
