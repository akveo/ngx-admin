import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NbComponentShape, NbComponentSize, NbComponentStatus } from '@nebular/theme';

import { UserAPI } from '../../../../service/api/user-api.service';

@Component({
  selector: 'ngx-profile',
  templateUrl: 'profile.component.html',
  styleUrls: ['profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  personalDetails: FormGroup;
  experience: FormGroup;
  project: FormGroup;
  education: FormGroup;
  certifications: FormGroup;
  skills: FormGroup;
  professionalSummary: FormGroup;
  userId: string

  status: NbComponentStatus =  'primary' ;
  shapes: NbComponentShape[] = [ 'rectangle', 'semi-round', 'round' ];
  size: NbComponentSize =  'tiny';
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
  
      // Save other details using the obtained user ID
      await this.userAPI.saveExperience(this.experience.value, this.userId).toPromise();
      await this.userAPI.saveEducation(this.education.value, this.userId).toPromise();
      await this.userAPI.saveProjects(this.project.value, this.userId).toPromise();
      await this.userAPI.saveSkills(this.skills.value, this.userId).toPromise();
      await this.userAPI.saveCertifications(this.certifications.value, this.userId).toPromise();


      console.log("userID: ", this.userId)
  
      this.router.navigateByUrl(`/pages/layout/stepper/profile?userId=${this.userId}`);
    } catch (error) {
      console.error('Error occurred while saving user details:', error);
      // Handle error
    }
  }
}
