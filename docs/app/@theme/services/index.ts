/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { NgxVersionService } from './version.service';
import { DialogStateService } from './dialog-state.service';
import { NgxAnalytics } from './analytics.service';
import { NgxHighlightService } from './highlight.service';
import { NgxMenuService } from './menu.service';
import { NgxPaginationService } from './pagination.service';
import { NgxStructureService } from './structure.service';
import { NgxTabbedService } from './tabbed.service';
import { NgxTextService } from './text.service';
import { NgxTocStateService } from './toc-state.service';
import { NgxCodeLoaderService } from './code-loader.service';
import { NgxStylesService } from './styles.service';
import { NgxIframeCommunicatorService } from './iframe-communicator.service';


export const ngxLandingServices = [
  NgxVersionService,
  DialogStateService,
  NgxAnalytics,
  NgxHighlightService,
  NgxMenuService,
  NgxPaginationService,
  NgxStructureService,
  NgxTabbedService,
  NgxTextService,
  NgxTocStateService,
  NgxCodeLoaderService,
  NgxStylesService,
  NgxIframeCommunicatorService,
];
