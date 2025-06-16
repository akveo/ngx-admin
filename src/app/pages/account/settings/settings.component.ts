import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'ngx-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  settingsForm: FormGroup;
  
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.settingsForm = this.fb.group({
      emailNotifications: [true],
      smsNotifications: [false],
      twoFactorAuth: [true],
      dataRetention: ['30days'],
      theme: ['default'],
      language: ['en'],
    });
  }

  onSubmit() {
    if (this.settingsForm.valid) {
      // Handle settings update logic
      console.log('Settings updated:', this.settingsForm.value);
    }
  }
}