import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ngx-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      firstName: ['John', Validators.required],
      lastName: ['Doe', Validators.required],
      email: ['john.doe@example.com', [Validators.required, Validators.email]],
      company: ['Acme Corp', Validators.required],
      position: ['Product Manager', Validators.required],
      phone: ['+1 (555) 123-4567', Validators.required],
      address: ['123 Main St, New York, NY 10001', Validators.required],
    });
  }

  onSubmit() {
    if (this.profileForm.valid) {
      // Handle profile update logic
      console.log('Profile updated:', this.profileForm.value);
    }
  }
}