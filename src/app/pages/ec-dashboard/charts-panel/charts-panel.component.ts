import { Component } from '@angular/core';

@Component({
  selector: 'ngx-ec-charts',
  styleUrls: ['./charts-panel.component.scss'],
  template: `
    <nb-card size="medium">
      <nb-tabset fullWidth>
        <nb-tab tabTitle="Orders">
          <ngx-orders-chart></ngx-orders-chart>
        </nb-tab>
        <nb-tab tabTitle="Profit">
          <ngx-profit-chart></ngx-profit-chart>
        </nb-tab>
      </nb-tabset>
    </nb-card>

  `,
})
export class EcChartsPanelComponent {
}
