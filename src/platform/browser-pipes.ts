/*
 * These are globally available pipes in any template
 */

import { PLATFORM_PIPES } from '@angular/core';

// application_pipes: pipes that are global through out the application
export const APPLICATION_PIPES = [

];

export const PIPES = [
  { provide: PLATFORM_PIPES, multi: true, useValue: APPLICATION_PIPES }
];
