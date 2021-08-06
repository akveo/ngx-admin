/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { AfterViewInit, Component, ElementRef, EventEmitter, Inject, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { delay, filter, take } from 'rxjs/operators';
import { NB_WINDOW } from '@nebular/theme';

import {
  BUNDLE_LICENSE,
  STORE_PRODUCTS_URL,
  BundlesService,
  Feature,
  Product,
  ProductVariant,
} from '../../../@core/data/service/bundles.service';
import { Descriptions, DescriptionsService } from '../../../@core/data/service/descriptions.service';
import { LicensePipe } from '../backend-bundles-section/license.pipe';

@Component({
  selector: 'ngx-backend-bundles-section',
  templateUrl: 'backend-bundles-section.component.html',
  styleUrls: ['./backend-bundles-section.component.scss'],
})
export class BackendBundlesSectionComponent implements AfterViewInit {

  @Output() loaded = new EventEmitter();
  @Input()
  set material(value: boolean | undefined) {
    if (value) {
      this.productUrl = STORE_PRODUCTS_URL.material;

      this.getProducts();
    }
  }

  selectedLicenseType = BUNDLE_LICENSE.personal;
  productUrl = STORE_PRODUCTS_URL.base;

  licenses = Object.values(BUNDLE_LICENSE);

  descriptions: Observable<Descriptions[]> = this.descriptionService.getBundleDescriptions();
  products: Observable<Product[]>;
  features: Observable<Feature[]> = this.bundlesService.getFeatures();

  constructor(private descriptionService: DescriptionsService,
              private bundlesService: BundlesService,
              private activatedRoute: ActivatedRoute,
              private el: ElementRef<HTMLElement>,
              @Inject(NB_WINDOW) private window,
              private licensePipe: LicensePipe) {
    this.getProducts();
  }

  ngAfterViewInit() {
    this.activatedRoute.fragment
      .pipe(
        filter(fragment => fragment === 'backend-bundles'),
        delay(500),
        take(1),
      )
      .subscribe((fragment: string) => {
        this.window.scrollTo(0, this.el.nativeElement.offsetTop);
      });
  }

  getProducts() {
    this.products = this.bundlesService.getProducts(this.productUrl);
  }

  shouldShowOldPrice(variants: ProductVariant[], selectedLicenseType: string): boolean {
    const product = this.licensePipe.transform(variants, selectedLicenseType);

    return !!parseFloat(product.compare_at_price);
  }
}
