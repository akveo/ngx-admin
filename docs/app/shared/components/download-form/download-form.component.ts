/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { AfterViewInit, Component } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-download-form',
  templateUrl: './download-form.component.html',
  styleUrls: ['./download-form.component.scss'],
})
export class DownloadFormComponent implements AfterViewInit {

  constructor(protected ref: NbDialogRef<DownloadFormComponent>) {
  }

  ngAfterViewInit() {
    hbspt.forms.create({
      portalId: '2452262',
      formId: '93007d7b-5f11-4dd8-bcfd-f8b99d31f31e',
      target: '#hubspotForm',
      submitButtonClass: 'hs-submit-btn btn',
      css: '',
      cssClass: 'hs-custom-form',
      redirectUrl: 'https://github.com/akveo/ngx-admin',
    });
  }

  closeDialog() {
    this.ref.close();
  }
}
