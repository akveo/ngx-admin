import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../../../environments/environment';
import { Thing } from '../../store/models';

@Injectable()
export class ThingsService {

  constructor(private http: HttpClient) { }

  getThings() {
    return this.http.get(environment.thingsUrl);
  }

  addThing(thing: Thing) {
    return this.http.post(environment.thingsUrl, thing);
  }

  deleteThing(thing: Thing) {
    return this.http.delete(environment.thingsUrl + '/' + thing.id);
  }

  editThing(thing: Thing) {
    return this.http.put(environment.thingsUrl + '/' + thing.id, thing);
  }
}
