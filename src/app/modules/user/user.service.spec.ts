import { TestBed } from '@angular/core/testing';

import { UserServiceImpl } from './user.service.impl';

describe('UserService', () => {
  let service: UserServiceImpl;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserServiceImpl);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
