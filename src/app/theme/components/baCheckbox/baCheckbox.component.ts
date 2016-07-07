import {Component, Provider, forwardRef, Input} from "@angular/core";
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/common";

const BA_CHECKBOX_CONTROL_VALUE_ACCESSOR = new Provider(
  NG_VALUE_ACCESSOR, {
    useExisting: forwardRef(() => BaCheckbox),
    multi: true
  });

@Component({
  selector: 'ba-checkbox',
  template: require('./baCheckbox.html'),
  providers: [BA_CHECKBOX_CONTROL_VALUE_ACCESSOR]
})
export class BaCheckbox implements ControlValueAccessor {
  @Input() disabled:boolean;
  @Input() label:string;
  @Input() value:string;
  @Input() name:string;
  @Input() baCheckboxClass:string;

  public state: boolean;

  onChange(value: any): void {}
  onTouch(value: any): void {}
  writeValue(value: any): void {
    this.state = value;
  }

  registerOnChange(fn: any): void { this.onChange = fn; }
  registerOnTouched(fn: any): void { this.onTouch = fn; }
}
