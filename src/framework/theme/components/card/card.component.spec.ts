/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { TestBed, async } from '@angular/core/testing';

import { NgaCardComponent } from './card.component';


describe('nga-card', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NgaCardComponent,
      ],
    }).compileComponents();
  }));

  it(`should have as title 'nga-card'`, async(() => {
    const fixture = TestBed.createComponent(NgaCardComponent);
    const ngaCard = fixture.debugElement.componentInstance;
    expect(ngaCard.title).toEqual('nga-card');
  }));
});
