import { TestBed, inject } from '@angular/core/testing';

import { CurrentLocationProvider } from './calc.service';

describe('CurrentLocationProvider', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CurrentLocationProvider]
    });
  });

  it('should be created', inject([CurrentLocationProvider], (service: CurrentLocationProvider) => {
    expect(service).toBeTruthy();
  }));
});
