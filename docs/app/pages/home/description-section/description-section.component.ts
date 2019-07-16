/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { Component, Input } from '@angular/core';
import { Descriptions } from '../../../@core/data/service/descriptions.service';

@Component({
  selector: 'ngx-landing-description-section',
  templateUrl: './description-section.component.html',
  styleUrls: ['./description-section.component.scss'],
})
export class DescriptionSectionComponent {
  @Input() descriptions: Descriptions[];
}
