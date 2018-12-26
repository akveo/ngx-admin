/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { share } from 'rxjs/operators';

@Injectable()
export class DialogStateService {

  protected dialogState$ = new ReplaySubject();

  changeDialogState(state: string) {
    this.dialogState$.next({state});
  }

  onChangeDialogState(): Observable<any> {
    return this.dialogState$.pipe(share());
  }
}
