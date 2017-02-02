import { AbstractControl } from '@angular/forms';

export class EmailValidator {

  public static validate(c: AbstractControl) {
    const pattern: RegExp = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

    return pattern.test(c.value) ? null : {
      validateEmail: {
        valid: false
      }
    };
  }
}
