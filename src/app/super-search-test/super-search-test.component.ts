/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit } from '@angular/core';
import { NgaSuperSearchService } from "../../framework/theme/components/super-search/super-search.service";

@Component({
  selector: 'nga-search-test',
  template: `
    <nga-layout>
      <nga-layout-header fixed>
        <a class="navbar-brand" href="#">ngx-admin</a>
        <nga-search type="modal-half"></nga-search>  
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

  sizes = ['small', 'xsmall', 'medium', 'xmedium', 'large'];
  statuses = ['primary', 'success', 'info', 'warning', 'danger', 'active', 'disabled'];

  cards: any[];

  constructor(private searchService: NgaSuperSearchService) {
    this.cards = this.prepareCards();
  }

  private prepareCards(): any[] {
    const result = [];

    this.statuses.forEach(status => {
      this.sizes.forEach(size => {
        result.push({
          size: size,
          status: status,
        });
      });
    });

    return result;
  }

  ngOnInit(): void {
    this.searchService.onSearch().subscribe(term => {
      console.log(term);
    })
  }
}
