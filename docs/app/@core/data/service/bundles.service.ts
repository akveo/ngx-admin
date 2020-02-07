import { Injectable } from '@angular/core';
import { of as observableOf,  Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

export interface Product {
  id: string;
  imageUrl: string;
  storeUrl: string;
  tags: string[];
  title: string;
  description: string;
  variants: ProductVariant[];
}

export interface ProductVariant {
  available: boolean;
  compare_at_price: string;
  price: string;
  title: string;
}

export const BUNDLE_LICENSE = {
  personal: 'personal',
  developer: 'developer',
};

export class Feature {
  text: string;
  availableInPersonalLicence: boolean;
  availableInCommercialLicence: boolean;
}

@Injectable()
export class BundlesService {

  private readonly STORE_PRODUCTS: string = 'https://store.akveo.com/collections/frontpage/products.json';
  private readonly STORE: string = 'https://store.akveo.com/collections/all/products';

  private features: Feature[] = [
    {
      text: 'ngx-admin template with 100+ UI components integrated with Backend Services',
      availableInPersonalLicence: true,
      availableInCommercialLicence: true,
    },
    {
      text: 'Backend Services and Repository layers with data access',
      availableInPersonalLicence: true,
      availableInCommercialLicence: true,
    },
    {
      text: 'JWT Authentication setup for UI and Backend',
      availableInPersonalLicence: true,
      availableInCommercialLicence: true,
    },
    {
      text: 'Running instructions and code documentation',
      availableInPersonalLicence: true,
      availableInCommercialLicence: true,
    },
    {
      text: 'Commercial Usage',
      availableInPersonalLicence: true,
      availableInCommercialLicence: true,
    },
    {
      text: 'Create multiple end products using bundle',
      availableInPersonalLicence: false,
      availableInCommercialLicence: true,
    },
    {
      text: 'Bug fixes and questions according to license terms',
      availableInPersonalLicence: false,
      availableInCommercialLicence: true,
    },
  ];

  constructor(private http: HttpClient) {}

  getFeatures(): Observable<Feature[]> {
    return observableOf(this.features);
  }

  getProducts(): Observable<Product[]> {
    return this.http.get(this.STORE_PRODUCTS)
      .pipe(map((result: any) => {
        return result.products.map((item: any) => {
          return {
            id: item.id,
            imageUrl: this.getDefaultImage(item.images),
            storeUrl: `${this.STORE}/${item.handle}`,
            tags: item.tags,
            title: item.title,
            description: (item.body_html as string).trim().replace(/<(?:.|\n)*?>/gm, ' ').replace(/  +/gm, ' '),
            variants: item.variants.map(variant => {
              return {
                available: variant.available,
                compare_at_price: variant.compare_at_price,
                price: variant.price,
                title: variant.title,
              };
            }),
          };
        });
      }));
  }

  getDefaultImage(images: any[]): any {
    const defaultImage = images.reduce((value, current) => {
      if (!value) {
        value = current;
      }
      return value;
    });
    return defaultImage ? this.trimImageUrl(defaultImage.src) : undefined;
  }

  trimImageUrl(url: string): string {
    return url.substring(0, url.indexOf('?'));
  }
}
