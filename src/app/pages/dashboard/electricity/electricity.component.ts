import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-electricity',
  styleUrls: ['./electricity.component.scss'],
  templateUrl: './electricity.component.html',
})
export class ElectricityComponent implements OnInit {

  data = {
    2015: [
      { month: 'Jan', delta: '0.97', down: true, kWatts: '816', cost: '97' },
      { month: 'Feb', delta: '1.83', down: true, kWatts: '806', cost: '95' },
      { month: 'Mar', delta: '0.64', down: true, kWatts: '803', cost: '94' },
      { month: 'Apr', delta: '2.17', down: false, kWatts: '818', cost: '98' },
      { month: 'May', delta: '1.32', down: true, kWatts: '809', cost: '96' },
      { month: 'Jun', delta: '0.05', down: true, kWatts: '808', cost: '96' },
      { month: 'Jul', delta: '1.39', down: false, kWatts: '815', cost: '97' },
      { month: 'Aug', delta: '0.73', down: true, kWatts: '807', cost: '95' },
      { month: 'Sept', delta: '2.61', down: true, kWatts: '792', cost: '92' },
      { month: 'Oct', delta: '0.16', down: true, kWatts: '791', cost: '92' },
      { month: 'Nov', delta: '1.71', down: true, kWatts: '786', cost: '89' },
      { month: 'Dec', delta: '0.37', down: false, kWatts: '789', cost: '91' },
    ],
    2016: [],
    2017: [],
  };

  ngOnInit() {
  }
}
