import { Component } from '@angular/core';
import { ElectricityService } from '../../../@core/data/electricity.service';

@Component({
  selector: 'ngx-electricity',
  styleUrls: ['./electricity.component.scss'],
  templateUrl: './electricity.component.html',
})
export class ElectricityComponent {

  data: Array<any>;

  type: string = 'week';
  types = ['week', 'month', 'year'];

  constructor(private electricityService: ElectricityService) {
    this.data = electricityService.getData();
  }
}
