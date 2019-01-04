import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';
import { mapTo, delay } from 'rxjs/operators';

import { Thing } from '../store/models';

const MOCK_CHANNELS = {
  channels: [
    {
      name: 'pera'
    },
    {
      name: 'dzoni'
    }
  ]
};

@Injectable()
export class MockChannelsService {
  getChannels() {
      return of(MOCK_CHANNELS).pipe(delay(1000));
  }

  addChannel(client: Thing) {
    MOCK_CHANNELS.channels.push(client);
    return of(1).pipe(delay(1000));
  }
}
