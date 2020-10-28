/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { AfterViewInit, Component } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-premium-form',
  templateUrl: './premium-form.component.html',
  styleUrls: ['./premium-form.component.scss'],
})
export class PremiumFormComponent implements AfterViewInit {


  constructor(protected ref: NbDialogRef<PremiumFormComponent>) {
  }

  ngAfterViewInit() {
    hbspt.forms.create({
      portalId: '2452262',
      formId: 'b066428e-c41a-4dce-bbc2-5690cf084a8f',
      target: '#hubspotForm',
      submitButtonClass: 'hs-submit-btn btn',
      css: '',
      cssClass: 'hs-custom-form',
    });
  }

  closeDialog() {
    this.ref.close();
  }
}
