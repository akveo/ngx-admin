import {Component} from '@angular/core';

@Component({
  selector: 'ngx-backend-integration',
  template: `
    <div class="diagram-container">
      <ngx-backend-integration-diagram></ngx-backend-integration-diagram>
    </div>
    <div class="description-container">
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./backend-integration.component.scss'],
})
export class BackendIntegrationComponent {
}
