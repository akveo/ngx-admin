import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import 'style-loader!./login.component.scss';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  email: FormControl;
  password: FormControl;
  submitted: boolean;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.email = new FormControl('', Validators.compose([Validators.required, Validators.minLength(4)]));
    this.password = new FormControl('', Validators.compose([Validators.required, Validators.minLength(4)]));

    this.form = this.formBuilder.group({
      'email': this.email,
      'password': this.password
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
