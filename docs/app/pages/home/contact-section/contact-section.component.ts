/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'ngx-landing-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.scss'],
})
export class ContactSectionComponent {

  @ViewChild('contactForm', { static: false }) contactForm: HTMLFormElement;
  @ViewChild('emailInput', { static: false }) emailInput: ElementRef;

  isAgree = false;
  invalid = false;

  constructor() {
  }

  submitForm() {
    if (!this.emailInput.nativeElement.value) {
      this.invalid = true;

      return;
    }

    this.contactForm.nativeElement.submit();
    this.invalid = false;
    this.emailInput.nativeElement.value = '';
  }

  get disabledControl() {
    return this.isAgree ? null : 'disabled';
  }
}
