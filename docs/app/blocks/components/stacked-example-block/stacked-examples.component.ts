import { Component, Input } from '@angular/core';

import { NgxExampleView } from '../../enum.example-view';
import { animate, animation, keyframes, style, transition, trigger, useAnimation } from '@angular/animations';

export const pulse = animation(
  animate(
    '{{ timing }}s {{ delay }}s',
    keyframes([
      style({ transform: 'scale3d(1, 1, 1)' }),
      style({ transform: 'scale3d({{ scale }}, {{ scale }}, {{ scale }})' }),
      style({ transform: 'scale3d(1, 1, 1)' }),
    ]),
  ),
  { params: { scale: 1.02, timing: 0.5, delay: 0 } },
);

@Component({
  selector: 'ngx-stacked-example-block',
  template: `
    <div>
      <ngx-live-example-block [hidden]="!isLive"
                              [@exampleState]="isLive ? 'live': 'code'"
                              [content]="content"
                              hasViewSwitch="true"
                              (changeView)="changeView($event)">
      </ngx-live-example-block>

      <ngx-tabbed-example-block [hidden]="isLive"
                                [@exampleState]="isLive ? 'live': 'code'"
                                [content]="content"
                                hasViewSwitch="true"
                                (changeView)="changeView($event)">
      </ngx-tabbed-example-block>
    </div>
  `,
  animations: [
    trigger('exampleState', [
      transition('live => code', [
        useAnimation(pulse),
      ]),
      transition('code => live', [
        useAnimation(pulse),
      ]),
    ]),
  ],
})
export class NgxStackedExampleComponent {

  @Input() content: any;
  isLive = true;

  constructor() {
  }

  changeView(view: NgxExampleView) {
    this.isLive = view === NgxExampleView.LIVE;
  }
}
