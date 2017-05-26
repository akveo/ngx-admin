/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { Injectable } from '@angular/core';

@Injectable()
export class NgaPreloaderService {

  private loaders: Promise<any>[] = [];

  registerLoader(method: Promise<any>): void {
    this.loaders.push(method);
  }

  clear(): void {
    this.loaders = [];
  }

  load(): Promise<any> {
    this.showSpinner();
    return new Promise((resolve) => {
      this.executeAll(resolve);
    });
  }

  private executeAll(done: Function): void {
    Promise.all(this.loaders).then((values) => {
      this.hideSpinner();
      done.call(null, values);
    })
      .catch((error) => {
        console.error(error);
      });
  }

  private showSpinner(): void {
    document.getElementById('spinner').style['display'] = 'block';
  }

  private hideSpinner(): void {
    document.getElementById('spinner').style['display'] = 'none';
  }
}

