import { Injectable } from '@angular/core';
import { Observable , of} from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';
import { mapTo, delay } from 'rxjs/operators';

import { Thing } from '../store/models';

const MOCK_THINGS = [
];

@Injectable()
export class MockThingsService {
  getThings() {
      return of(MOCK_THINGS).pipe(delay(1000));
  }

  addThing(thing: Thing) {
    MOCK_THINGS.push(thing);
    return of(1).pipe(delay(1000));
  }
}
