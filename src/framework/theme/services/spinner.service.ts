/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { Injectable } from '@angular/core';

@Injectable()
export class NgaSpinnerService {

  private loaders: Promise<any>[] = [];
  private selector: string = 'nga-global-spinner';

  registerLoader(method: Promise<any>): void {
    this.loaders.push(method);
  }

  clear(): void {
    this.loaders = [];
  }

  load(): void {
    this.showSpinner();
    this.executeAll();
  }

  private executeAll(done = () => {}): void {
    Promise.all(this.loaders).then((values) => {
      this.hideSpinner();
      done.call(null, values);
    })
      .catch((error) => {
        // TODO: Promise.reject
        console.error(error);
      });
  }

  // TODO is there any better way of doing this?
  private showSpinner(): void {
    const el = this.getSpinnerElement();
    if (el) {
      el.style['display'] = 'block';
    }
  }

  private hideSpinner(): void {
    const el = this.getSpinnerElement();
    if (el) {
      el.style['display'] = 'none';
    }
  }

  private getSpinnerElement() {
    return document.getElementById(this.selector);
  }
}
