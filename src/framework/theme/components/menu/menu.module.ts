/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgaMenuComponent, NgaMenuItemComponent } from './menu.component';
import { NgaMenuService } from './menu.service';

import { NgaMenuModuleConfig, NgaMenuItem } from './menu.interfaces';

const NGA_MENU_COMPONENTS = [
  NgaMenuComponent,
  NgaMenuItemComponent,
];

const NGA_MENU_PROVIDERS = [
  NgaMenuService,
];

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    ...NGA_MENU_COMPONENTS,
  ],
  exports: [
    ...NGA_MENU_COMPONENTS,
  ],
})
export class NgaMenuModule {
  static forRoot(config: NgaMenuModuleConfig): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: NgaMenuModule,
      providers: [
        ...NGA_MENU_PROVIDERS,
        { provide: NgaMenuModuleConfig, useValue: config },
      ],
    };
  }
}
