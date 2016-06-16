import {Control, ControlGroup} from '@angular/common';

export class EqualPasswordsValidator {

  public static validate(firstField, secondField) {
    
    return (c: ControlGroup) => {
      
      return (c.controls && c.controls[firstField].value == c.controls[secondField].value) ? null : {
        passwordsEqual: {
          valid: false
        }
      };
    }
  }
}