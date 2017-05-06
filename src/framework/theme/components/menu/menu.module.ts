/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { NgModule, ModuleWithProviders } from '@angular/core';
import { List } from 'immutable';

import { NgaSharedModule } from '../shared/shared.module';

import { NgaMenuComponent, NgaMenuItemComponent } from './menu.component';
import { NgaMenuService } from './menu.service';

import { NgaMenuOptions, ngaMenuOptionsToken } from './menu.options';

const ngaMenuComponents = [
  NgaMenuComponent,
  NgaMenuItemComponent,
];

const NGA_MENU_PROVIDERS = [
  NgaMenuService,
];

@NgModule({
  imports: [
    NgaSharedModule,
  ],
  declarations: [
    ...ngaMenuComponents,
  ],
  exports: [
    ...ngaMenuComponents,
  ],
})
export class NgaMenuModule {
  static forRoot(ngaMenuOptions?: NgaMenuOptions): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: NgaMenuModule,
      providers: [
        ...NGA_MENU_PROVIDERS,
        { provide: ngaMenuOptionsToken, useValue: ngaMenuOptions },
      ],
    };
  }
}
