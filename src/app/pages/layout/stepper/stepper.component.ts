import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';

import { UserAPI } from '../../../service/api/user-api.service';

@Component({
  selector: 'ngx-stepper',
  templateUrl: 'stepper.component.html',
  styleUrls: ['stepper.component.scss'],
})
export class StepperComponent implements OnInit {

  personalDetails: FormGroup;
  experience: FormGroup;
  project: FormGroup;
  education: FormGroup;
  certifications: FormGroup;
  skills: FormGroup;
  professionalSummary: FormGroup;
  userId: string

  constructor(private fb: FormBuilder, private userAPI: UserAPI, private router: Router) {
  }

  ngOnInit() {
    this.personalDetails = this.fb.group({
      username: [''],
      email: [''],
      phone: [''],
      address1: [''],
      address2: [''],
      city: [''],
      state: [''],
      zip: [''],
      linkedinLink: [''],
      portfolioLink: [''],
    });

    this.experience = this.fb.group({
      position: [''],
      employer: [''],
      location: [''],
      startDate: [''],
      endDate: [''],
      currentJob: [''],
      companyLink: [''],
      description: [''],
    });

    this.project = this.fb.group({
      name: [''],
      link: [''],
      employer: [''],
      description: [''],
      startDate: [''],
      endDate: [''],
    });

    this.education = this.fb.group({
      degreeName: [''],
      school: [''],
      location: [''],
      major: [''],
      minor: [''],
      startDate: [''],
      endDate: [''],
      grade: [''],
      description: [''],
    });

    this.certifications = this.fb.group({
      name: [''],
      issuer: [''],
      startDate: [''],
      endDate: [''],
      description: [''],
    });

    this.skills = this.fb.group({
      name: [''],
    });

    this.professionalSummary = this.fb.group({
      professionalSummary: [''],
    });
  }

  async submitForms() {
    try {
      // Combine professional summary with personal details
      const personalDetailsWithSummary = {
        ...this.personalDetails.value,
        professionalSummary: this.professionalSummary.value.professionalSummary,
        password: 'password',
        role: 'USER'
      };
  
      // Save personal details including professional summary
      const userDetailsResponse = await this.userAPI.saveUserDetails(personalDetailsWithSummary).toPromise();
      this.userId = userDetailsResponse.data.id;

      console.log(this.userId)
  
      // Save other details using the obtained user ID
      await Promise.all([
        this.userAPI.saveExperience(this.experience.value, this.userId).toPromise(),
        this.userAPI.saveEducation(this.education.value, this.userId).toPromise(),
        this.userAPI.saveProjects(this.project.value, this.userId).toPromise(),
        this.userAPI.saveSkills(this.skills.value, this.userId).toPromise(),
        this.userAPI.saveCertifications(this.certifications.value, this.userId).toPromise()
      ]);


      console.log("userID: ", this.userId)
  
      // Navigate to the profile page
      const navigationExtras: NavigationExtras = {
        queryParams: { userId: this.userId }
      };
      this.router.navigateByUrl('/pages/layout/stepper/profile', navigationExtras);
    } catch (error) {
      console.error('Error occurred while saving user details:', error);
      // Handle error
    }
  }
}
