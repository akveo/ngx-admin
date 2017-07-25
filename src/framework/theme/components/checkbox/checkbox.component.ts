/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { Component, Input, Output, HostBinding, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'nga-checkbox',
  template: `
    <label class="custom-control custom-checkbox">
      <input type="checkbox" class="custom-control-input"
             [disabled]="disabled"
             [checked]="value"
             (change)="value = !value">
      <span class="custom-control-indicator"></span>
      <span class="custom-control-description">
        <ng-content></ng-content>
      </span>
    </label>
  `,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => NgaCheckboxComponent),
    multi: true,
  }],
})
export class NgaCheckboxComponent implements ControlValueAccessor {

  status: string;

  @Input('value') _value: boolean = false;
  @Input() disabled: boolean;

  @Input('status')
  private set setStatus(val: string) {
    this.status = val;
  }

  @HostBinding('class.success')
  private get success() {
    return this.status === 'success';
  }

  @HostBinding('class.warning')
  private get warning() {
    return this.status === 'warning';
  }

  @HostBinding('class.danger')
  private get danger() {
    return this.status === 'danger';
  }

  onChange: any = () => { };
  onTouched: any = () => { };

  get value() {
    return this._value;
  }

  set value(val) {
    this._value = val;
    this.onChange(val);
    this.onTouched();
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  writeValue(val: any) {
    this.value = val;
  }
}
