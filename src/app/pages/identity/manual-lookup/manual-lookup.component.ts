import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ngx-manual-lookup',
  templateUrl: './manual-lookup.component.html',
  styleUrls: ['./manual-lookup.component.scss']
})
export class ManualLookupComponent implements OnInit {
  identityForm: FormGroup;
  isSubmitting = false;
  result = null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {
    this.identityForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      country: ['', Validators.required],
      identificationNumber: [''],
      email: ['', Validators.email],
      phone: [''],
      address: [''],
    });
  }

  ngOnInit(): void {
    // Check if country is passed as query parameter
    this.route.queryParams.subscribe(params => {
      if (params['country']) {
        this.identityForm.patchValue({
          country: params['country']
        });
      }
    });
  }

  onSubmit() {
    if (this.identityForm.valid) {
      this.isSubmitting = true;
      // Simulate API call
      setTimeout(() => {
        this.isSubmitting = false;
        this.result = {
          overallMatch: 85,
          fieldMatches: {
            name: 90,
            dateOfBirth: 100,
            address: 70,
            identification: 80
          }
        };
      }, 2000);
    } else {
      // Mark all fields as touched to show validation errors
      Object.keys(this.identityForm.controls).forEach(key => {
        this.identityForm.get(key).markAsTouched();
      });
    }
  }

  resetForm() {
    this.identityForm.reset();
    this.result = null;
  }

  getMatchStatus(score: number): string {
    if (score >= 80) return 'success';
    if (score >= 60) return 'warning';
    return 'danger';
  }
}