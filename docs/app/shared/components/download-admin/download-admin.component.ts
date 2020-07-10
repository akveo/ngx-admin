/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { Component } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { DownloadFormComponent } from '../download-form/download-form.component';

@Component({
  selector: 'ngx-download-admin',
  templateUrl: './download-admin.component.html',
  styleUrls: ['./download-admin.component.scss'],
})
export class DownloadAdminComponent {

  constructor(private dialogService: NbDialogService) {
  }

  openDialog() {
    this.dialogService.open(DownloadFormComponent);
  }
}
