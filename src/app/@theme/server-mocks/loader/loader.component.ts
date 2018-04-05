import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'ngx-loader',
  template: `<span class="universal-loader"></span>`,
  styles: [`
    :host {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      min-height: 6em;
      padding: 1em;
      overflow: hidden;
    }

    :host .universal-loader {
      height: 4em;
      width: 4em;
      border-radius: 50%;
      transform: translateZ(0);
      animation: spin 2s linear infinite;
    }

    .nb-theme-default :host .universal-loader {
      border: 0.5em solid rgba(42, 42, 42, 0.2);
      border-top-color: #a4abb3;
    }
    .nb-theme-cosmic :host .universal-loader {
      border: 0.5em solid rgba(255, 255, 255, 0.2);
      border-top-color: #a1a1e5;
    }
  `],
})
export class LoaderComponent {
  constructor(public elementRef: ElementRef) {}
}
