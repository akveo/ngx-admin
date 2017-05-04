/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { Component } from '@angular/core';

@Component({
  selector: 'nga-actions-test',
  template: `
    <nga-layout>
      <nga-layout-header>
        <nga-actions inverse>
          <nga-action icon="ion-ios-email-outline" (click)="actionOnClick('first')"></nga-action>
          <nga-action icon="ion-ios-bell-outline"></nga-action>
          <nga-action>
            <nga-user></nga-user>
          </nga-action>
          <nga-action icon="ion-ios-flower-outline"></nga-action>
          <nga-action icon="ion-ios-medical-outline"></nga-action>
          <nga-action icon="ion-ios-download-outline" disabled></nga-action>
          <nga-action>
            Hello
          </nga-action>
        </nga-actions>
      </nga-layout-header>
      <nga-layout-column>

        <nga-card>
          <nga-card-body>
            <nga-actions>
              <nga-action icon="ion-ios-email-outline" (click)="actionOnClick('first')"></nga-action>
              <nga-action icon="ion-ios-bell-outline"></nga-action>
              <nga-action>
                <nga-user></nga-user>
              </nga-action>
              <nga-action icon="ion-ios-flower-outline"></nga-action>
              <nga-action icon="ion-ios-medical-outline"></nga-action>
              <nga-action icon="ion-ios-download-outline" disabled></nga-action>
              <nga-action>
                Hello
              </nga-action>
            </nga-actions>
          </nga-card-body>
        </nga-card>

        <nga-card>
          <nga-card-body>
            <nga-actions size="medium">
              <nga-action icon="ion-ios-email-outline" (click)="actionOnClick('first')"></nga-action>
              <nga-action icon="ion-ios-bell-outline"></nga-action>
              <nga-action>
                <nga-user></nga-user>
              </nga-action>
              <nga-action icon="ion-ios-flower-outline"></nga-action>
              <nga-action icon="ion-ios-medical-outline"></nga-action>
              <nga-action icon="ion-ios-download-outline" disabled></nga-action>
              <nga-action>
                Hello
              </nga-action>
            </nga-actions>
          </nga-card-body>
        </nga-card>

        <nga-card>
          <nga-card-body>
            <nga-actions size="large">
              <nga-action icon="ion-ios-email-outline" (click)="actionOnClick('first')"></nga-action>
              <nga-action icon="ion-ios-bell-outline"></nga-action>
              <nga-action>
                <nga-user></nga-user>
              </nga-action>
              <nga-action icon="ion-ios-flower-outline"></nga-action>
              <nga-action icon="ion-ios-medical-outline"></nga-action>
              <nga-action icon="ion-ios-download-outline" disabled></nga-action>
              <nga-action>
                Hello
              </nga-action>
            </nga-actions>
          </nga-card-body>
        </nga-card>
      </nga-layout-column>
    </nga-layout>
  `,
})
export class NgaActionsTestComponent {

  actionOnClick(event: any) {
    console.info(event);
  }
}
