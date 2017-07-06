import { Component } from '@angular/core';

@Component({
  selector: 'ngx-temperature',
  styleUrls: ['./temperature.component.scss'],
  template: `
    <nga-card size="xmedium">
      <nga-tabset fullWidth>
        <nga-tab tabTitle="Temperature">
          <ngx-temperature-dragger [(value)]="temperature" [arcThickness]="20" [knobRadius]="15" [bottomAngle]="90"
             disableArcColor="#2c2961" [fillColors]="['#2ec6ff', '#31ffad', '#7bff24', '#EAE75F']">
          </ngx-temperature-dragger>
        </nga-tab>
        <nga-tab tabTitle="Humidity">
          <span>Content #2</span>
        </nga-tab>
      </nga-tabset>
    </nga-card>
  `,
})
export class TemperatureComponent {
  temperature = 0.5;
}
