import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserAPI } from '../../../../service/api/user-api.service';

@Component({
  selector: 'ngx-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  userDetails: any = {};
  userExperiences: any[] = [];
  userEducation: any[] = [];
  userProjects: any[] = [];
  userSkills: any[] = [];
  userCertificates: any[] = [];
  // userResumes: any[] = [];
  // userCoverLetters: any[] = [];

  constructor(private route: ActivatedRoute, private userAPI: UserAPI) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const userId = params['userId']; // Get the userId from query params

      if (userId) {
        this.userAPI.getUserDetails(userId).subscribe((response) => {
          if (response.success) {
            this.userDetails = response.data;
            this.userExperiences = this.userDetails.experiences || [];
            this.userEducation = this.userDetails.education || [];
            this.userProjects = this.userDetails.projects || [];
            this.userSkills = this.userDetails.skills || [];
            this.userCertificates = this.userDetails.certificates || [];
            // this.userResumes = this.userDetails.resumes || [];
            // this.userCoverLetters = this.userDetails.coverLetters || [];
          } else {
            console.error('Failed to retrieve user details:', response.message);
          }
        });
      } else {
        console.error('User ID not found in query parameters.');
      }
    });
  }
}
