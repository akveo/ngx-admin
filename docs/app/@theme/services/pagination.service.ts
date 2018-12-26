/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { Injectable } from '@angular/core';
import { NgxStructureService } from './structure.service';
import { NgxMenuService } from './menu.service';

/**
 * Pagination Item options
 */
class NgxPaginationItem {
  title: string;
  slag: string;
  link?: string;
  prev?: {
    title: string;
    link: string;
  };
  next?: {
    title: string;
    link: string;
  };
  parent: NgxPaginationItem;
}

@Injectable()
export class NgxPaginationService {

  protected paginationItems;

  constructor(private structureService: NgxStructureService,
              private menuService: NgxMenuService) {
  }

  setPaginationItems(basePath: string) {
    this.paginationItems = this.addPrevNextPointers(
      this.prepareItems(
        this.structureService.getPreparedStructure(),
        { link: basePath },
        ),
    );
  }

  protected prepareItems(structure, parent = null): NgxPaginationItem[] {
    return structure
        .filter(item => item.name)
        .reduce((result, item: any) => {
          const paginationItem: NgxPaginationItem = {
            title: item.name,
            parent: parent,
            slag: item.slag,
          };
          paginationItem.link = this.menuService.createItemLink<NgxPaginationItem>(paginationItem);

          if (item.name && item.type === 'page' || item.type === 'tabs') {
            result.push(paginationItem);
          }

          if (item.children) {
            return result.concat(this.prepareItems(item.children, paginationItem));
          }

          return result;
      }, [] as NgxPaginationItem[]);
  }

  protected addPrevNextPointers(items): NgxPaginationItem[] {
    return items
      .map((paginationItem, index, paginationItems) => {
        const prev = paginationItems[index - 1];
        const next = paginationItems[index + 1];

        if (prev) {
          paginationItem.prev = {
            link: prev.link,
            title: prev.title,
          };
        }

        if (next) {
          paginationItem.next = {
            link: next.link,
            title: next.title,
          };
        }

        return paginationItem;
      });
  }

  getPaginationItem(slag: string): NgxPaginationItem {
    return this.paginationItems.find(item => item.slag === slag);
  }
}
