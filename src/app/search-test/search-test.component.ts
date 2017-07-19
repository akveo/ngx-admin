/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { Component, OnInit } from '@angular/core';

import { NgaSuperSearchService } from '@akveo/nga-theme';

@Component({
  selector: 'nga-search-test',
  template: `
    <nga-layout>
      <nga-layout-header fixed>
        <a class="navbar-brand" href="#">ngx-admin</a>
        <nga-search type="rotate-layout" tag="header-search"></nga-search>
      </nga-layout-header>
      <nga-layout-column>
        <nga-card>
          <nga-card-header>
            <span>Header</span>
          </nga-card-header>
          <nga-card-body>
            <span>Body</span>
          </nga-card-body>
          <nga-card-footer>
            <span>Footer</span>
          </nga-card-footer>
        </nga-card>
        <nga-card size="small">
          <nga-card-header>
            <span>Header</span>
          </nga-card-header>
          <nga-card-body>
            <span>Body</span>
          </nga-card-body>
          <nga-card-footer>
            <span>Footer</span>
          </nga-card-footer>
        </nga-card>
        <nga-card size="medium">
          <nga-card-header>
            <span>Header</span>
          </nga-card-header>
          <nga-card-body>
            <span>Body</span>
          </nga-card-body>
          <nga-card-footer>
            <span>Footer</span>
          </nga-card-footer>
        </nga-card>
        <nga-card size="large">
          <nga-card-header>
            <span>Header</span>
          </nga-card-header>
          <nga-card-body>
            <span>Body</span>
          </nga-card-body>
          <nga-card-footer>
            <span>Footer</span>
          </nga-card-footer>
        </nga-card>
      </nga-layout-column>
    </nga-layout>
  `,
})
export class NgaSearchTestComponent implements OnInit {

  constructor(private searchService: NgaSuperSearchService) {
  }

  ngOnInit() {
    this.searchService.onSearchSubmit().subscribe((data: { term: string, tag: string }) => {
      console.info(`term: ${data.term}, from search: ${data.tag}`);
    });
  }
}
