/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { NgxVersionService } from './version.service';
import { DialogStateService } from './dialog-state.service';
import { NgxAnalytics } from './analytics.service';


export const ngxLandingServices = [
  NgxVersionService,
  DialogStateService,
  NgxAnalytics,
];
