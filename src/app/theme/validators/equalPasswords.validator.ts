import { FormGroup } from '@angular/forms';

export class EqualPasswordsValidator {

  public static validate(firstField, secondField) {

    return (c: FormGroup) => {

      return (c.controls && c.get(firstField).value == c.get(secondField).value) ? null : {
        passwordsEqual: {
          valid: false
        }
      };
    }
  }
}
