/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { Component } from '@angular/core';
import {NbDialogService} from '@nebular/theme';
import {PremiumFormComponent} from '../premium-form/premium-form.component';

@Component({
  selector: 'ngx-premium',
  templateUrl: './premium.component.html',
  styleUrls: ['./premium.component.scss'],
})
export class PremiumComponent {


  constructor(private dialogService: NbDialogService) {
  }

  openDialog() {
    this.dialogService.open(PremiumFormComponent);
  }

}
