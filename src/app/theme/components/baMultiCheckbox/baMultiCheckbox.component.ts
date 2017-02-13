import {Component, Input, Self} from '@angular/core';
import {ControlValueAccessor, NgModel} from '@angular/forms';

@Component({
  selector: 'ba-multi-checkbox[ngModel]',
  templateUrl: './baMultiCheckbox.html',
  providers: [NgModel]
})
export class BaMultiCheckbox implements ControlValueAccessor {
  @Input() baMultiCheckboxClass:string;
  @Input() propertiesMapping:any;

  public model: NgModel;
  public state: boolean;

  public constructor(@Self() state:NgModel) {
    this.model = state;
    state.valueAccessor = this;
  }

  public getProp(item: any, propName: string): string {
    const prop = this.propertiesMapping[propName];

    if (!prop) {
      return item[propName];
    } else if (typeof prop === 'function') {
      return prop(item);
    }
    return item[prop];
  }
  public onChange(value: any): void {}
  public onTouch(value: any): void {}
  public writeValue(state: any): void {
    this.state = state;
  }

  public registerOnChange(fn: any): void {
    this.onChange = function(state: boolean) {
      this.writeValue(state);
      this.model.viewToModelUpdate(state);
    }
  }
  public registerOnTouched(fn: any): void { this.onTouch = fn; }
}
