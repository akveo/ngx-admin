
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-props-block',
  template: `
    <ngx-prop-block *ngIf="inputs.length > 0"
                    [properties]="inputs"
                    name="Inputs"
                    [slag]="slag"
                    class="widget-block">
    </ngx-prop-block>

    <ngx-prop-block *ngIf="outputs.length > 0"
                    [properties]="outputs"
                    name="Outputs"
                    [slag]="slag"
                    class="widget-block">
    </ngx-prop-block>

    <ngx-prop-block *ngIf="props.length > 0"
                    [properties]="props"
                    name="Properties"
                    [slag]="slag"
                    class="widget-block">
    </ngx-prop-block>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxPropsBlockComponent {
  outputs: any = [];
  inputs: any = [];
  props: any = [];
  name: string;
  slag: string;

  @Input('source')
  set setSource(source: any) {
    this.inputs = source.props.filter(item => item.kind === 'input');
    this.outputs = source.props.filter(item => item.kind === 'output');
    this.props = source.props.filter(item => item.kind === 'property');
    this.name = source.name;
    this.slag = source.slag;
  }
}
