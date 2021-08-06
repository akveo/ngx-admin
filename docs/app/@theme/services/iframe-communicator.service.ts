import { Inject, Injectable } from '@angular/core';
import { Observable,  fromEvent as observableFromEvent } from 'rxjs';
import { filter,  map } from 'rxjs/operators';
import { NB_WINDOW } from '@nebular/theme';

@Injectable()
export class NgxIframeCommunicatorService {

  constructor(@Inject(NB_WINDOW) private window) {
  }

  public send(payload: any, target: Window = this.window.parent) {
    if (target !== this.window) {
      target.postMessage(payload, '*');
    }
  }

  public receive(id: string): Observable<any> {
    return observableFromEvent(this.window, 'message')
      .pipe(
        filter((msg: any) => msg.data && msg.data.id === id),
        map((msg: any) => msg.data),
      );
  }
}
