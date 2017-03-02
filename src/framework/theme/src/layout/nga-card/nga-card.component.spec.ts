import { TestBed, async } from '@angular/core/testing';

import { NgaCardComponent } from './nga-card.component';


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
