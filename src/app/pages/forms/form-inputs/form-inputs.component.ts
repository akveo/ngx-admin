import { Component, OnInit } from '@angular/core';

import { BreadcrumbsService } from '../../../@core/utils/breadcrumbs.service';

@Component({
  selector: 'ngx-form-inputs',
  styleUrls: ['./form-inputs.component.scss'],
  templateUrl: './form-inputs.component.html',
})
export class FormInputsComponent implements OnInit {

  starRate = 2;
  heartRate = 4;

  constructor(private breadcrumbs: BreadcrumbsService) {  }

  ngOnInit() {
    this.breadcrumbs.addFriendlyNameForRoute('/pages/forms/inputs', 'Forms Inputs');
  }
}
