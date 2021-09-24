/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { Inject, Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { combineLatest, Observable, of } from 'rxjs';

import { NgxTabbedService } from './tabbed.service';
import { NgxTextService } from './text.service';
import { DOCS, STRUCTURE } from '../../app.options';
import { NgxArticleService } from './article.service';

@Injectable()
export class NgxStructureService {

  protected prepared;

  constructor(private textService: NgxTextService,
              private tabbedService: NgxTabbedService,
              private articleService: NgxArticleService,
              @Inject(STRUCTURE) structure,
              @Inject(DOCS) docs) {
    this.prepared = this.prepareStructure(structure, docs);
  }

  getPreparedStructure(): any {
    return this.prepared;
  }

  findPageBySlag(structure: any, slag: string): any {
    for (const item of structure) {
      if (item.slag === slag) {
        return item;
      }
      if (item.type === 'section' && item.children) {
        const deep = this.findPageBySlag(item.children, slag);
        if (deep) {
          return deep;
        }
      }
    }
  }

  protected prepareStructure(structure: any, preparedDocs: any, parentSlag?: string): any {
    return structure.map((item: any) => {
      const slag = item.name ? this.textService.createSlag(item.name) : null;

      if (item.type === 'block' && typeof item.source === 'string') {

        if (item.block === 'theme') {
          item.source = preparedDocs.themes[item.source];
        }

        if (item.block === 'component') {
          item.source = this.prepareComponent(preparedDocs.classes.find((data) => data.name === item.source));
        }
      }

      if (item.block === 'markdown') {
        item.sections = this.articleService.getArticle(item.source).pipe(
          map((article) => this.textService.mdToSectionsHTML(article)),
        );
      }

      if (item.children) {
        item.children = this.prepareStructure(item.children, preparedDocs, slag);
      }

      if (item.type === 'tabs') {
        item.source = this.getComponents(item, preparedDocs);
        item.tabs = this.tabbedService.determineTabs(item);

        // we emulate a block here
        item.children = [
          {
            type: 'block',
            block: 'tabbed',
            children: item.source,
          },
        ];
      }

      if (item.type === 'page' || item.type === 'tabs') {
        item.toc = this.prepareToc(item);
        item.slag = parentSlag ? `${parentSlag}_${slag}` : slag;
      }

      return item;
    });
  }

  protected getComponents(item: any, preparedDocs) {
    return item.source
      .map(source => preparedDocs.classes.find((data) => data.name === source))
      .map(component => this.prepareComponent(component));
  }

  protected prepareComponent(component: any) {
    const textNodes = component.overview.filter(node => node.type === 'text');
    if (textNodes && textNodes.length) {
      textNodes[0].content = `## ${component.name}\n\n${textNodes[0].content}`; // TODO: this is bad
    }
    return {
      ... component,
      slag: this.textService.createSlag(component.name),
      overview: component.overview.map((node: any) => {
        if (node.type === 'text') {
          return {
            type: node.type,
            content: this.textService.mdToSectionsHTML(node.content),
          };
        }
        return node;
      }),
    };
  }

  protected prepareToc(item: any): Observable<any[]> {
    const tocList = item.children.reduce((acc: Observable<any>[], child: any) => {
      if (child.block === 'markdown') {
        return [...acc, this.getTocForMd(child)];
      }
      if (child.block === 'tabbed') {
        return [...acc, this.getTocForTabbed(child)];
      }
      if (child.block === 'component') {
        return [...acc, this.getTocForComponent(child)];
      }
      return acc;
    }, []);

    return combineLatest([...tocList]).pipe(map((toc) => [].concat(...toc)));
  }

  protected getTocForMd(block: any): Observable<any[]> {
    return (block.sections as Observable<any[]>).pipe(
      map((item) => item.map((val) => ({
        title: val.title,
        fragment: val.fragment,
      }))),
    );
  }

  protected getTocForComponent(block: any): Observable<any[]> {
    return of([{
      title: block.source.name,
      fragment: block.source.slag,
    }]);
  }

  protected getTocForTabbed(block: any): Observable<any[]> {
    return of(block.children.map((component: any) => ({
      title: component.name,
      fragment: this.textService.createSlag(component.name),
    })));
  }
}
