/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { Injectable } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

import { NgxStructureService } from './structure.service';
import { NgxTextService } from './text.service';

interface IItemLink {
  title: string;
  parent?: {
    link?: string;
  };
}

@Injectable()
export class NgxMenuService {

  constructor(private structureService: NgxStructureService,
              private textService: NgxTextService) {
  }

  getPreparedMenu(basePath: string): any {
    return this.prepareMenu(this.structureService.getPreparedStructure(), { link: basePath });
  }

  prepareMenu(structure, parent = null) {
    return structure
      .filter(item => item.name && item.type !== 'block')
      .map((item: any) => {
        const menuItem: NbMenuItem = {
          title: item.name,
          pathMatch: 'prefix',
          parent: parent,
          data: item,
          group: item.type === 'group',
        };
        menuItem.link = this.createItemLink<NbMenuItem>(menuItem);

        if (item.children && item.children.some(child => child.type === 'page' || child.type === 'tabs')) {
          menuItem.expanded = true;
          menuItem.children = this.prepareMenu(item.children, menuItem);
        }

        return menuItem;
      });
  }

  protected prepareToc(item: any) {
    return item.children.reduce((acc: any[], child: any) => {
      if (child.block === 'markdown') {
        return acc.concat(this.getTocForMd(child));
      } else if (child.block === 'tabbed') {
        return acc.concat(this.getTocForTabbed(child));
      }
      acc.push(child.source.name);
      return acc;
    }, []);
  }

  protected getTocForMd(block: any) {
    return block.children.map((section: any) => ({
      title: section.title,
      fragment: section.fragment,
    }));
  }

  protected getTocForTabbed(block: any) {
    return block.children.map((component: any) => (
      {
        title: component.name,
        fragment: this.textService.createSlag(component.name),
      }
    ));
  }

  createItemLink<T extends IItemLink>(item: T): string {
    const url = this.textService.createSlag(item.title);

    return item.parent ? `${item.parent.link}/${url}` : url;
  }
}
