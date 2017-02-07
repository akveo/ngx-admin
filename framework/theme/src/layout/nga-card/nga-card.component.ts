import { Component } from '@angular/core';

@Component({
  selector: 'nga-card',
  template: `
    <template>
      <ng-content select="nga-card-header"></ng-content>
      <ng-content select="nga-card-body"></ng-content>
      <ng-content select="nga-card-footer"></ng-content>
    </template>
  `,
})
export class NgaCardComponent {
}
