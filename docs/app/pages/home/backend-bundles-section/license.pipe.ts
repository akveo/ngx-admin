import { Pipe, PipeTransform } from '@angular/core';
import { ProductVariant } from '../../../@core/data/service/bundles.service';

@Pipe({ name: 'license' })
export class LicensePipe implements PipeTransform {
  transform(variants: ProductVariant[], license: string): ProductVariant {
    const result = variants
      .find(variant => variant.title.toLowerCase().includes(license.toLowerCase()));
    return result ? result : variants[0];
  }
}
