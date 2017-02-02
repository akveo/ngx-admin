import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { EmailValidator, EqualPasswordsValidator } from '../../theme/validators';

import 'style-loader!./register.component.scss';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {

  form: FormGroup;
  name: FormControl;
  email: FormControl;
  password: FormControl;
  repeatPassword: FormControl;
  passwords: FormGroup;

  submitted: boolean;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.name = new FormControl('', Validators.compose([Validators.required, Validators.minLength(4)]));
    this.email = new FormControl('', Validators.compose([Validators.required, EmailValidator.validate]));
    this.password = new FormControl('', Validators.compose([Validators.required, Validators.minLength(4)]));
    this.repeatPassword = new FormControl('', Validators.compose([Validators.required, Validators.minLength(4)]));
    this.passwords = this.formBuilder.group({
      'password': this.password,
      'repeatPassword': this.repeatPassword,
      }, { validator: EqualPasswordsValidator.validate('password', 'repeatPassword') });

    this.form = this.formBuilder.group({
      'name': this.name,
      'email': this.email,
      'passwords': this.passwords
    });

    this.submitted = false;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.valid) {
      // your code goes here
      // console.log(this.form.value);
    }
  }
}
