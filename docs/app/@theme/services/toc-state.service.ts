import { Injectable } from '@angular/core';

export interface NgxTocElement {
  fragment: string;
  element: any;
  y: number;
  setInView(val: boolean);
}

@Injectable()
export class NgxTocStateService {
  state: NgxTocElement[] = [];

  add(el: NgxTocElement) {
    this.state.push(el);
  }

  remove(el: NgxTocElement) {
    this.state = this.state.filter(e => e !== el);
  }

  list(): NgxTocElement[] {
    return this.state;
  }

  clear() {
    this.state = [];
  }
}
