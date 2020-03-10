import { Component } from '@angular/core';

@Component({
  selector: 'ngx-form-inputs',
  styleUrls: ['./form-inputs.component.scss'],
  templateUrl: './form-inputs.component.html',
})
export class FormInputsComponent {
  public starRate: number = 2;
  public heartRate: number = 4;
  public radioGroupValue: string = 'This is value 2';
}
