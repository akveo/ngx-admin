import {Component, Provider, forwardRef, Input} from "@angular/core";
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/common";
import {BaCheckbox} from '../baCheckbox';

const BA_MULTI_CHECKBOX_CONTROL_VALUE_ACCESSOR = new Provider(
  NG_VALUE_ACCESSOR, {
    useExisting: forwardRef(() => BaMultiCheckbox),
    multi: true
  });

@Component({
  selector: 'ba-multi-checkbox',
  template: require('./baMultiCheckbox.html'),
  directives: [BaCheckbox],
  providers: [BA_MULTI_CHECKBOX_CONTROL_VALUE_ACCESSOR]
})
export class BaMultiCheckbox implements ControlValueAccessor {
  @Input() baMultiCheckboxClass:string;
  @Input() propertiesMapping:any;
  private _model;

  getProp(item: any, propName: string): string {
    const prop = this.propertiesMapping[propName];

    if (!prop) {
      return item[propName];
    } else if (typeof prop === 'function') {
      return prop(item);
    }
    return item[prop];
  }
  onChange(value: any): void {}
  onTouch(value: any): void {}
  writeValue(value: any): void {
    this._model = value;
  }

  registerOnChange(fn: any): void { this.onChange = fn; }
  registerOnTouched(fn: any): void { this.onTouch = fn; }
}
